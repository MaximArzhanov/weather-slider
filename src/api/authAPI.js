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
      const user = { email: email, password: password };
      const result = {};

      if (JSON.parse(localStorage.getItem(email))) { // Проверяет существует ли уже пользователь с такой почтой
        result.isErorr = true;
        result.text = USER_ALREADY_EXIST_MESSAGE;
        reject({ ...result });
      } else {
        localStorage.setItem(email, JSON.stringify(user));
        result.isErorr = false;
        result.text = USER_REGISTERED_SUCCESS_MESSAGE;
        resolve({ ...result });
      }
    });
  },

  /* Обеспечивает вход пользователя в систему */
  loginUser(email, password) {
    return new Promise(function (resolve, reject) {
      const user = JSON.parse(localStorage.getItem(email));
      const result = {};

      if (user) { // Проверяет наличие пользователя
        if (user.password === password) {
          result.isErorr = false;
          result.text = USER_LOGINED_SUCCESS_MESSAGE;
          result.user = user;
          resolve({ ...result});
        } else {
          result.isErorr = true;
          result.text = WRONG_EMAIL_OR_PASSWORD_MESSAGE;
          reject({ ...result });
        }
      } else {
        result.isErorr = true;
        result.text = USER_DOES_NOT_EXIST_MESSAGE;
        reject({ ...result });

      }
    });
  }

}
