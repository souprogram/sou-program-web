const IT_WORDS = [
  'binary',
  'code',
  'compiler',
  'computer',
  'data',
  'database',
  'debug',
  'developer',
  'encrypt',
  'firewall',
  'function',
  'hardware',
  'html',
  'internet',
  'javascript',
  'keyboard',
  'kernel',
  'linux',
  'network',
  'python',
  'query',
  'server',
  'software',
  'syntax',
  'technology',
  'upload',
];

export const generateCipherTask = () => {
  const randomWord = IT_WORDS[Math.floor(Math.random() * IT_WORDS.length)];
  // Generate key between -7 to -3 OR 3 to 7
  const randomKey = Math.floor(Math.random() * 5) + 3;
  const isNegative = Math.random() > 0.5;
  return {
    word: randomWord,
    key: isNegative ? -randomKey : randomKey,
    encrypted: caesarCipher(randomWord, isNegative ? -randomKey : randomKey),
  };
};

const caesarCipher = (text: string, key: number): string => {
  // Normalize the key to handle full cycles (e.g., key = 29 becomes key = 1)
  const normalizedKey = ((key % 26) + 26) % 26; // Handles both positive and negative keys

  return text
    .toUpperCase()
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        // Shift character and wrap around alphabet
        let shiftedCode = code - normalizedKey;
        if (shiftedCode < 65) shiftedCode += 26; // Wrap around for negative shift
        if (shiftedCode > 90) shiftedCode -= 26; // Wrap around for positive shift
        return String.fromCharCode(shiftedCode);
      }
      return char;
    })
    .join('');
};
