export const authAPI = {

  /* Регистрирует пользователя (записывает в localStorage) */
  registerUser(email, password) {
    return new Promise(function (resolve, reject) {
      const user = { email: email, password: password };
      const result = {};

      if (JSON.parse(localStorage.getItem(email))) { // Проверяет существует ли уже пользователь с такой почтой
        result.isErorr = true;
        result.text = 'Пользователь с такой почтой уже существует';
        reject({ ...result });
      } else {
        localStorage.setItem(email, JSON.stringify(user));
        result.isErorr = false;
        result.text = 'Пользователь успешно зарегистрирован';
        resolve(result);
      }
    });
  }

}
