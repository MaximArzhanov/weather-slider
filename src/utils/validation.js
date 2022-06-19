/* Валидация полей формы */
const validationInput = (e, dispatch, actionCreator) => {
  let inputID = '';
  let errorText = '';
  let action = {};

  if (e.target.validity.valid) {
    inputID = e.target.id;
    action = actionCreator(inputID, '');
    dispatch(action);
  } else {
    inputID = e.target.id;
    errorText = e.target.validationMessage;
    action = actionCreator(inputID, errorText);
    dispatch(action);
  }
}

/* Валидация формы */
const validationForm = (e, dispatch, actionCreator) => {
  const form = e.target.closest('form');
  const actionTest = actionCreator(form.checkValidity());
  dispatch(actionTest);
}

export {
  validationInput,
  validationForm
}
