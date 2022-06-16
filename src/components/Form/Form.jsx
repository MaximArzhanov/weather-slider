import React from 'react';
import './Form.css';

function Form() {
  return (
    <form className="form">

      <label className="form__title">email
        <input
          id="email-input"
          className="form__input"
          type="email"
          name="email"
        />
      </label>
      <span className="form__error-input">ошибка</span>

      <label className="form__title">
        <input
          id="password-input"
          className="form__input"
          type="password"
          name="password"
        />
      </label>
      <span className="form__error-input">ошибка</span>

      <span className="form__error-api">Ошибка от сервера</span>

      <button className="form__button" type="submit">Кнопка</button>

    </form>
  );
}

export default Form;