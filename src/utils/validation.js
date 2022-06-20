/* Валидация полей формы */
const validationInput = (e, dispatch, actionCreator) => {
  let inputID = e.target.id;
  let errorText = '';
  let action = {};

  if (e.target.validity.valid) {
    action = actionCreator(inputID, '');
    dispatch(action);
  } else {
    errorText = e.target.validationMessage;
    action = actionCreator(inputID, errorText);
    dispatch(action);
  }
}

/* Валидация формы */
const validationForm = (e, dispatch, actionCreator) => {
  const form = e.target.closest('form');
  const action = actionCreator(form.checkValidity());
  dispatch(action);
}

export {
  validationInput,
  validationForm
}
