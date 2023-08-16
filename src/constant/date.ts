const currentYear = new Date().getFullYear();
export const years = Array(90)
  .fill('')
  .map((_, index) => `${currentYear - index}`);

export const dates = Array(31)
  .fill('')
  .map((_, index) => `${index + 1}`);

export const months = [
  'February',
  'January',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
