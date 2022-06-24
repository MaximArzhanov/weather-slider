import { EMAIL_INPUT, PASSWORD_INPUT, SEARCH_INPUT } from "./constants";

/* Валидация полей формы */
const validationInput = (inputID, value) => {
  switch (inputID) {
    case EMAIL_INPUT: {
      const validationResult = validateEmail(value);
      return { ...validationResult }
    }
    case PASSWORD_INPUT: {
      const validationResult = validatePassword(value);
      return { ...validationResult }
    }
    case SEARCH_INPUT: {
      const validationResult = validateSearch(value);
      return { ...validationResult }
    }
    default: {
      const validationResult = { errorText: 'Не определён тип поля', isValid: false };
      return { ...validationResult };
    }
  }
}

/* Валидация для поля email */
const validateEmail = (value) => {

  const validationResult = {
    errorText: '',
    isValid: false
  }

  const regExp = /\S+@\S+\.\S+/; // Регулярное выражение для проверки на соответствие формату email

  let charList = value.match(/[^\d^@^.\sA-Z]/gi); // Регулярное выражение для проверки на содержание ненужных символов
  if (charList === null) {
    charList = [];
  } else {
    charList = charList.map((item) => { return item = '\"' + item + '\"'});
  }

  let atCharList = value.match(/[@]/gi); // Регулярное выражение для проверки на содержание количества символов @
  if (atCharList === null) {
    atCharList = [];
  }

  switch (true) {
    case (value.length === 0): {
      validationResult.errorText = 'Поле \"Почта\" не должно быть пустым';
      validationResult.isValid = false;
      return validationResult;
    }
    case (!value.includes('@')): {
      validationResult.errorText = 'Email должен содержать символ \'@\'';
      validationResult.isValid = false;
      return validationResult;
    }
    case (!value.includes('.')): {
      validationResult.errorText = 'Email должен содержать символ \'.\'';
      validationResult.isValid = false;
      return validationResult;
    }
    case (value[value.length - 1] === '.'): {
      validationResult.errorText = 'После точки должно быть название домена';
      validationResult.isValid = false;
      return validationResult;
    }
    case (value.includes(' ')): {
      validationResult.errorText = 'Email не должен содержать пробелы';
      validationResult.isValid = false;
      return validationResult;
    }
    case (atCharList.length > 1): {
      validationResult.errorText = 'В email должен быть только один символ \"@\"';
      validationResult.isValid = false;
      return validationResult;
    }
    case (value.includes('..')): {
      validationResult.errorText = 'В email не может быть двух символов точка подряд: ".."';
      validationResult.isValid = false;
      return validationResult;
    }
    case (charList.length !== 0): {
      const chatListJoined = charList.join(' ');
      validationResult.errorText = `Введены недопустимые символы: ${chatListJoined}`;
      validationResult.isValid = false;
      return validationResult;
    }
    case (!regExp.test(value)): {
      validationResult.errorText = 'Введённый email не соотвествует формату [user@mail.domain]';
      validationResult.isValid = false;
      return validationResult;
    }
    default: {
      validationResult.errorText = '';
      validationResult.isValid = true;
      return validationResult;
    }
  }
}

/* Валидация для поля password */
const validatePassword = (value) => {
  const validationResult = {
    errorText: '',
    isValid: false
  }

  switch (true) {
    case (value.length === 0): {
      validationResult.errorText = 'Поле \"Пароль\" не должно быть пустым';
      validationResult.isValid = false;
      return validationResult;
    }
    case (value.includes(' ')): {
      validationResult.errorText = 'Пароль не должен содержать пробелы';
      validationResult.isValid = false;
      return validationResult;
    }
    case (value.length < 8): {
      validationResult.errorText = 'Пароль должен содержать минимум 8 символов';
      validationResult.isValid = false;
      return validationResult;
    }
    default: {
      validationResult.errorText = '';
      validationResult.isValid = true;
      return validationResult;
    }
  }
}

/* Валидация для поля search */
const validateSearch = (value) => {
  const validationResult = {
    errorText: '',
    isValid: false
  }

  let charList = value.match(/[^(а-я)^(\sA-Z)^-]/gi); // Регулярное выражение для проверки на содержание ненужных символов
  if (charList === null) {
    charList = [];
  } else {
    charList = charList.map((item) => { return item = '\"' + item + '\"'});
  }

  switch (true) {
    case (value.length === 0): {
      validationResult.errorText = 'Поле не должно быть пустым';
      validationResult.isValid = false;
      return validationResult;
    }
    case (charList.length !== 0): {
      const chatListJoined = charList.join(' ');
      validationResult.errorText = `Введены недопустимые символы: ${chatListJoined}`;
      validationResult.isValid = false;
      return validationResult;
    }
    default: {
      validationResult.errorText = '';
      validationResult.isValid = true;
      return validationResult;
    }
  }
}

/* Валидация формы */
const validationForm = (form) => {
  const inputList = Array.from(form.querySelectorAll('input'));
  // Проходит по всем инпутам на форме и проводит валидацию для них.
  // Если хотя бы одно поле не валидно, то вся форма является не валидной
  const validationFormResult = inputList.every((input) => {
    const inputId = input.id;
    const value = input.value;
    const validationInputResult = validationInput(inputId, value);
    return validationInputResult.isValid;
  });
  return validationFormResult;
}

export {
  validationInput,
  validationForm
}
