export function isValidOib(oib: string) {
  if (/\d{11}/.exec(oib) === null) {
    return false;
  }

  let calculated = 10;

  for (const digit of oib.substring(0, 10)) {
    calculated += parseInt(digit);
    calculated %= 10;

    if (calculated === 0) {
      calculated = 10;
    }

    calculated *= 2;
    calculated %= 11;
  }

  const check = 11 - calculated === 10 ? 0 : 11 - calculated;
  return check === parseInt(oib[10]);
}