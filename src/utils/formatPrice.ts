export function formatPrice(price: number): string {
  const formattedPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return formattedPrice;
}
