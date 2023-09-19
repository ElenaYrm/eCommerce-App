import { getMonthIndex } from './getMonthIndex.ts';

export function getUserAge(now: Date, date: string, month: string, year: string): number {
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();
  const birthYear = Number(year);
  const birthMonth = getMonthIndex(month) - 1;
  const birthDate = Number(date);

  let userAge = currentYear - birthYear;

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate < birthDate)) {
    userAge -= 1;
  }

  return userAge;
}
