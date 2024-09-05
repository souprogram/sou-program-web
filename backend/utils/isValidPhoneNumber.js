export function isValidPhoneNumber(phoneNumber) {
  return /^\+3859[125789]\d.{5,6}$/.test(phoneNumber);
}
