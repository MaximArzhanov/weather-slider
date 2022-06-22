import {
  USER_ALREADY_EXIST_MESSAGE,
  USER_REGISTERED_SUCCESS_MESSAGE,
  USER_LOGINED_SUCCESS_MESSAGE,
  WRONG_EMAIL_OR_PASSWORD_MESSAGE,
  USER_DOES_NOT_EXIST_MESSAGE
} from "../utils/constants";

export const authAPI = {

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
        result.isAuthSuccess = false;
        result.message = USER_ALREADY_EXIST_MESSAGE;
        reject({ ...result });
      } else {
        users.push({...user});
        localStorage.setItem('users', JSON.stringify(users));
        result.isError = false;
        result.isAuthSuccess = true;
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
          result.isAuthSuccess = true;
          result.message = USER_LOGINED_SUCCESS_MESSAGE;
          result.user = user;
          resolve({ ...result });
        } else {
          result.isError = true;
          result.isAuthSuccess = false;
          result.message = WRONG_EMAIL_OR_PASSWORD_MESSAGE;
          reject({ ...result });
        }
      } else {
        result.isError = true;
        result.isAuthSuccess = false;
        result.message = USER_DOES_NOT_EXIST_MESSAGE;
        reject({ ...result });
      }
    });
  }

}
