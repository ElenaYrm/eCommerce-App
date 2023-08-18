export function getMonthIndex(month: string): number {
  const date = new Date(`${month} 1, 2023`);
  return date.getMonth();
}
