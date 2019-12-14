import moment from 'moment';

export const addKeyToObjectArray = (array) => {  
  return array.map((item, key) => {
    return Object.assign(item, {key: key})
  });
};
  
export const formatMomentDate = (date) => {
  const dt = moment(date);
  return `${formatDigit(dt.day())}-${formatDigit(dt.month())}-${dt.year()}`
}

const formatDigit = (digit) => {
  return digit.toString().padStart(2, "0");
}

export const getFileExtension = (file) => file.split('.').pop();