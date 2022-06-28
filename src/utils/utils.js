// Возвращает год в виде строки
const getYear = (stringDate) => {
  const splitedDateList = stringDate.split('-');
  return splitedDateList[0];
}

// Возвращает номер месяца в виде строки
const getMonth = (stringDate) => {
  const splitedDateList = stringDate.split('-');
  return splitedDateList[1];
}

// Возвращает число месяца в виде строки
const getDay = (stringDate) => {
  const splitedDateList = stringDate.split('-');
  return splitedDateList[2];
}

// Возвращает дату в виде строки "число месяц год" пример: "1 января 2022 г."
const getFormatedDate = (stringDate) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const date = new Date(getYear(stringDate), getMonth(stringDate), getDay(stringDate));
    const formatedDate = date.toLocaleString("ru", options);
    return formatedDate;
}

export {
  getFormatedDate
}
