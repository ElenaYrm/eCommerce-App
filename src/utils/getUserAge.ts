function getMonthIndex(month: string): number {
  const months = [
    'January',
    'February',
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

  return months.indexOf(month);
}

export function getUserAge(date: string, month: string, year: string): number {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();
  const birthYear = Number(year);
  const birthMonth = getMonthIndex(month);
  const birthDate = Number(date);

  let userAge = currentYear - birthYear;

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate < birthDate)) {
    userAge -= 1;
  }

  return userAge;
}
