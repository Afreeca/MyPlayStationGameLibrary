import moment from 'moment';

export const addKeyToObjectArray = (array) => {  
  return array.map((item, key) => {
    return Object.assign(item, {key: key})
  });
};
  
export const formatMomentDate = (date) => {
  const dt = moment(date);
  return `${formatDig(dt.day())}-${formatDig(dt.month())}-${dt.year()}`
}

const formatDig = (digit) => {
  return digit.toString().padStart(2, "0");
}