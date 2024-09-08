function isValidPhoneNumber(phoneNumber) {
  return /^\+\d.{11,12}$/.test(phoneNumber);
}

module.exports = { isValidPhoneNumber };
