const currentYear = new Date().getFullYear();
export const years: string[] = Array(90)
  .fill('')
  .map((_, index) => `${currentYear - index}`);

export const dates: string[] = Array(31)
  .fill('')
  .map((_, index) => `${index + 1}`);

export const months: string[] = [
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

export const countries: string[] = ['US'];
