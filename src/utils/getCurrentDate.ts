export function getCurrentDate(): string {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'short', day: '2-digit', year: 'numeric' };

  return today.toLocaleDateString('en-US', options);
}
