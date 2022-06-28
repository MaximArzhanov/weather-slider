const getYear = (stringDate) => {
  const splitedDateList = stringDate.split('-');
  return splitedDateList[0];
}

const getMonth = (stringDate) => {
  const splitedDateList = stringDate.split('-');
  return splitedDateList[1];
}

const getDay = (stringDate) => {
  const splitedDateList = stringDate.split('-');
  return splitedDateList[2];
}

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
