function getMonthIndex(month: string): number {
  const date = new Date(`${month} 1, 2023`);
  return date.getMonth();
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
