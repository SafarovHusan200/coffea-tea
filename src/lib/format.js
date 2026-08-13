export function formatPrice(value) {
  const number = Number(value);
  if (Number.isNaN(number)) return value;
  return `$${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number)}`;
}
