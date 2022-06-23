import {
  USER_ALREADY_EXIST_MESSAGE,
  USER_REGISTERED_SUCCESS_MESSAGE,
  USER_LOGINED_SUCCESS_MESSAGE,
  WRONG_EMAIL_OR_PASSWORD_MESSAGE,
  USER_DOES_NOT_EXIST_MESSAGE
} from "../utils/constants";

export const userAPI = {

  /* Регистрирует пользователя (записывает в localStorage) */
  registerUser(email, password) {
    return new Promise(function (resolve, reject) {

      let users = [];
      const result = {};

      if (localStorage.getItem('users')) {  // Если в localStorage есть массив пользователей то массив сохраняется в переменную
        users = JSON.parse(localStorage.getItem('users'));
      } else {
        localStorage.setItem('users', []);  // Если в localStorage нет массива пользователей то записывается пустой массив
      }

      const user = { email: email, password: password };

      if (users.some((user) => (user.email === email))) {
        result.isError = true;
        result.isRequestSuccessful = false;
        result.message = USER_ALREADY_EXIST_MESSAGE;
        reject({ ...result });
      } else {
        users.push({...user});
        localStorage.setItem('users', JSON.stringify(users));
        result.isError = false;
        result.isRequestSuccessful = true;
        result.message = USER_REGISTERED_SUCCESS_MESSAGE;
        resolve({ ...result });
      }
    });
  },

  /* Обеспечивает вход пользователя в систему */
  loginUser(email, password) {
    return new Promise(function (resolve, reject) {

      let users = [];
      const result = {};

      if (localStorage.getItem('users')) {  // Если в localStorage есть массив пользователей то массив сохраняется в переменную
        users = JSON.parse(localStorage.getItem('users'));
      }

      const user = users.find((user) => user.email === email);

      if (user) {
        if (user.password === password) {
          result.isError = false;
          result.isRequestSuccessful = true;
          result.message = USER_LOGINED_SUCCESS_MESSAGE;
          result.user = user;
          resolve({ ...result });
        } else {
          result.isError = true;
          result.isRequestSuccessful = false;
          result.message = WRONG_EMAIL_OR_PASSWORD_MESSAGE;
          reject({ ...result });
        }
      } else {
        result.isError = true;
        result.isRequestSuccessful = false;
        result.message = USER_DOES_NOT_EXIST_MESSAGE;
        reject({ ...result });
      }
    });
  },


  /* Обеспечивает вход пользователя в систему */
  addCity(city, currentUser) {
    return new Promise(function (resolve, reject) {

      const result = {};
      const usersInLocalStorage = JSON.parse(localStorage.getItem('users'));

      const users = usersInLocalStorage.map((user) => {   // Проход по всем пользователям в localStorage
        if (user.email === currentUser.email) {           // Поиск текущего авторизованного пользователя

          if (!user.cities) {
            user.cities = [];
          }

          const cities = [ ...user.cities ];              // Копирование сохранённого списка городов
          if (cities.includes(city)) {                    // Проверка: если пользователь уже добавил город
            result.isError = true;
            result.isRequestSuccessful = false;
            result.message = 'Пользователь уже добавил этот город';
            reject({ ...result });
          } else {
            cities.push(city);    // Добавление названия города в массив названий городов
            user.cities = cities; // Запись массива названий городов к текущему пользователю
          }

          // user.cities = [ ...user.cities, city]
          return user;            // Возвращается изменённый объект user
        }
      })

      localStorage.setItem('users', JSON.stringify(users));
      result.isError = false;
      result.isRequestSuccessful = true;
      result.message = 'Добавлен новый слайд';
      resolve({ ...result });


      // try {
      //   const cityList = props.cardWeatherList.map((card) => {
      //     return card.location.name;
      //   })
      //   const usersInLocalStorage = JSON.parse(localStorage.getItem('users'));
      //   const users = usersInLocalStorage.map((user) => {
      //     if (user.email === props.currentUser.email) {
      //       user.cities = cityList;
      //       return user;
      //     }
      //   })
      //   localStorage.setItem('users', JSON.stringify(users));

      // } catch (error) {
      //   console.log(error);
      // }

    });
  }



}
