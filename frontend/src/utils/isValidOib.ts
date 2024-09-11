export function isValidOib(oib: string) {
  return /^\d{11}$/.test(oib);
}
