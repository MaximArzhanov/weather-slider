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
  USER_ALREADY_ADDED_CITY_MESSAGE,
  CITY_WAS_NOT_ADDED_BY_USER_MESSAGE,
  SLIDE_REMOVED_SUCCESS_MESSAGE,
  CURRENT_USER_WAS_FOUND_MESSAGE,
  CURRENT_USER_WAS_NOT_FOUND_MESSAGE
} from "../utils/constants";

/* Создаёт объект с результатами запроса */
const createResultObject = (isError, isRequestSuccessful, message) => {
  const result = { isError: isError, isRequestSuccessful: isRequestSuccessful, message: message }
  return { ...result };
}

export const userAPI = {

  /* Регистрирует пользователя (записывает в localStorage) */
  registerUser(email, password) {
    return new Promise(function (resolve, reject) {

      let users = [];
      const user = { email: email, password: password, cities: ['Дубай', 'Сидней', 'Нью-Йорк', 'Мадрид', 'Токио'] };

      // Если в localStorage есть массив пользователей то массив сохраняется в переменную, иначе в переменную записывается пустой массив
      if (localStorage.getItem(USERS)) { users = JSON.parse(localStorage.getItem(USERS)); }
      else { localStorage.setItem(USERS, []); }

      if (users.some((user) => (user.email === email))) {       // Поиск уже существующего пользователя с таким email
        reject(createResultObject(true, false, USER_ALREADY_EXIST_MESSAGE));
      } else {
        users.push({...user});
        localStorage.setItem(USERS, JSON.stringify(users));     // Запись обновлённого списка пользователей в localStorage
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
      if (user) {                                                           // Если пользователь найден
        if (user.password === password) {

          localStorage.setItem(CURRENT_USER, JSON.stringify(user));         // Записывает текщего пользователя в localStorage
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
            cities.push(city);        // Добавление названия города в массив названий городов
            user.cities = cities;     // Запись массива названий городов к текущему пользователю
            // Перезапись данных (Обновлённый список городов) текущего пользователя в localStorage
            localStorage.removeItem(CURRENT_USER);
            localStorage.setItem(CURRENT_USER, JSON.stringify(user));
          }
          // return user;            // Возвращается изменённый объект user
        }
        return user;                 // Возвращается изменённый объект user
      })

      // Запись обновлённого списка пользователей (Обновлён список городов у текущего пользователя) в localStorage
      localStorage.setItem(USERS, JSON.stringify(users));
      resolve(createResultObject(false, true, NEW_CITY_ADDED_MESSAGE));
    });
  },

  /* Добавляет новый город к данным текущего авторизованного пользователя */
  deleteCity(cityName, currentUser) {
    return new Promise(function (resolve, reject) {
      const usersInLocalStorage = JSON.parse(localStorage.getItem(USERS));
      const users = usersInLocalStorage.map((user) => {   // Проход по всем пользователям в localStorage
        if (user.email === currentUser.email) {           // Поиск текущего авторизованного пользователя
          const cities = [...user.cities];                // Копирование сохранённого списка городов
          // Проверка: если названия города нет в списке
          if (!cities.includes(cityName)) {
            reject(createResultObject(true, false, CITY_WAS_NOT_ADDED_BY_USER_MESSAGE));
          }
          const newCities = cities.filter((city) => city !== cityName);
          user.cities = newCities;                        // Запись массива названий городов к текущему пользователю
          // Перезапись данных (Обновлённый список городов) текущего пользователя в localStorage
          localStorage.removeItem(CURRENT_USER);
          localStorage.setItem(CURRENT_USER, JSON.stringify(user));

        }
        return user;            // Возвращается изменённый объект user
      })

      // Запись обновлённого списка пользователей (Обновлён список городов у текущего пользователя) в localStorage
      localStorage.setItem(USERS, JSON.stringify(users));
      resolve(createResultObject(false, true, SLIDE_REMOVED_SUCCESS_MESSAGE));
    });
  },

  /* Добавляет новый город к данным текущего авторизованного пользователя */
  getCurrentUser() {
    return new Promise(function (resolve, reject) {
      const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
      if (currentUser) {
        const result = createResultObject(false, true, CURRENT_USER_WAS_FOUND_MESSAGE);
        result.currentUser = currentUser;
        resolve(result);
      } else {
        reject(createResultObject(true, false, CURRENT_USER_WAS_NOT_FOUND_MESSAGE));
      }
    });
  }

}
