export function isValidPhoneNumber(phoneNumber: string) {
  return /^\+\d.{11,12}$/.test(phoneNumber);
}
