import {
  USER_ALREADY_EXIST_MESSAGE,
  USER_REGISTERED_SUCCESS_MESSAGE,
  USER_LOGINED_SUCCESS_MESSAGE,
  WRONG_EMAIL_OR_PASSWORD_MESSAGE,
  USER_DOES_NOT_EXIST_MESSAGE,
  IS_LOGINED,
  CURRENT_USER,
  USERS,
  NEW_CITY_ADDED_MESSAGE,
  USER_ALREADY_ADDED_CITY_MESSAGE
} from "../utils/constants";

const createResultObject = (isError, isRequestSuccessful, message) => {
  const result = { isError: isError, isRequestSuccessful: isRequestSuccessful, message: message }
  return { ...result };
}

export const userAPI = {

  /* Регистрирует пользователя (записывает в localStorage) */
  registerUser(email, password) {
    return new Promise(function (resolve, reject) {

      let users = [];

      // Если в localStorage есть массив пользователей то массив сохраняется в переменную, иначе в переменную записывается пустой массив
      if (localStorage.getItem(USERS)) { users = JSON.parse(localStorage.getItem(USERS)); }
      else { localStorage.setItem(USERS, []); }

      const user = { email: email, password: password };

      if (users.some((user) => (user.email === email))) {       // Поиск уже существующего пользователя с таким email
        reject(createResultObject(true, false, USER_ALREADY_EXIST_MESSAGE));
      } else {
        users.push({...user});
        localStorage.setItem(USERS, JSON.stringify(users));   // Запись обновлённого списка пользователей в localStorage
        resolve(createResultObject(false, true, USER_REGISTERED_SUCCESS_MESSAGE));
      }
    });
  },

  /* Обеспечивает вход пользователя в систему */
  loginUser(email, password) {
    return new Promise(function (resolve, reject) {

      let users = [];

      // Если в localStorage есть массив пользователей то массив сохраняется в переменную
      if (localStorage.getItem(USERS)) { users = JSON.parse(localStorage.getItem(USERS)); }

      const user = users.find((user) => user.email === email);              // Поиск пользователя по email

      if (user) {
        if (user.password === password) {
          localStorage.setItem(CURRENT_USER, JSON.stringify(result.user));  // Записывает текщего пользователя в localStorage
          localStorage.setItem(IS_LOGINED, true);                           // Записывает в localStorage флаг о том, что пользователь авторизовался

          const result = createResultObject(false, true, USER_LOGINED_SUCCESS_MESSAGE);
          result.user = user;
          resolve(result);
        } else { reject(createResultObject(true, false, WRONG_EMAIL_OR_PASSWORD_MESSAGE));  }
      } else {  reject(createResultObject(true, false, USER_DOES_NOT_EXIST_MESSAGE));  }
    });
  },


  /* Добавляет новый город к данным текущего авторизованного пользователя */
  addCity(city, currentUser) {
    return new Promise(function (resolve, reject) {

      const usersInLocalStorage = JSON.parse(localStorage.getItem(USERS));

      const users = usersInLocalStorage.map((user) => {   // Проход по всем пользователям в localStorage
        if (user.email === currentUser.email) {           // Поиск текущего авторизованного пользователя

          if (!user.cities) {  user.cities = [];  }       // Если пользователь не сохранил ни одного города, то создаётся пустой массив

          const cities = [ ...user.cities ];              // Копирование сохранённого списка городов

          // Проверка: если пользователь уже добавил город
          if (cities.includes(city)) {
            reject(createResultObject(true, false, USER_ALREADY_ADDED_CITY_MESSAGE));
          }
          else {
            cities.push(city);    // Добавление названия города в массив названий городов
            user.cities = cities; // Запись массива названий городов к текущему пользователю

            // Перезапись данных (Обновлённый список городов) текущего пользователя в localStorage
            localStorage.removeItem(CURRENT_USER);
            localStorage.setItem(CURRENT_USER, JSON.stringify(user));
          }

          return user;            // Возвращается изменённый объект user
        }
      })

      // Запись обновлённого списка пользователей (Обновлён список городов у текущего пользователя) в localStorage
      localStorage.setItem(USERS, JSON.stringify(users));
      resolve(createResultObject(false, true, NEW_CITY_ADDED_MESSAGE));
    });
  }



}
