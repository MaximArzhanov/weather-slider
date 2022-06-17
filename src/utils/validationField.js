/* Валидация полей формы */
const validationField = (e, dispatch, actionCreator) => {
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

export default validationField;
