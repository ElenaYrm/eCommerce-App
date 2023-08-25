export function getCurrentDate(): string {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'short', day: '2-digit', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return formattedDate;
}
