export function isValidZipCode(zipCode: string) {
  return /^\d{5}$/.test(zipCode);
}
