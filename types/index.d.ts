type CharCase = 'upper' | 'lower';

declare const uppercaseChars: string;
declare const lowercaseChars: string;
declare const numberChars: string;
declare const symbolChars: string;

declare const secureRandomInt: () => number;
declare const getRandomInt: () => number;
declare const getRandomIndex: (range: number) => number;

declare const getRandomChar: (options: { charCase: CharCase }) => string;

declare const createWordsArrayFromString: (string: string) => string[];

declare const getPassword: (options: {
  passLength: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  userString: string;
}) => string;

declare function shuffleString(str: string): string;

export {
  uppercaseChars,
  lowercaseChars,
  numberChars,
  symbolChars,
  secureRandomInt,
  getRandomInt,
  getRandomIndex,
  getRandomChar,
  createWordsArrayFromString,
  getPassword,
  shuffleString
};
