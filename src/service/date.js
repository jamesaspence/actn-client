export const formatDate = date => {
  const year = '' + date.getFullYear();
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();

  if (month.length < 2) {
    month = '0' + month;
  }

  if (day.length < 2) {
    day = '0' + day;
  }

  return `${year}-${month}-${day}`;
};

export const isSunday = date => date.getDay() === 0;

export const getTimeOfDay = date => (date.getHours() > 10 && date.getMinutes() > 4) || date.getHours() >= 12 ? 'evening' : 'morning';

export const subtractDay = date => {
  date.setDate(date.getDate() - 1);

  return date;
};