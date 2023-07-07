// utils.js
export function shuffleString(str: string): string;
export function createWordsArrayFromString(str: string): string[];

// secureCryptoRandom.js
type CharCase = 'upper' | 'lower';

declare global {
  interface Window {
    crypto: {
      getRandomValues(array: Uint32Array): Uint32Array;
    };
  }
}

class SecureCryptoRandom {
  #uppercaseChars: string;
  #lowercaseChars: string;
  #numberChars: string;
  #symbolChars: string;

  cryptoRandom(): number;
  getRandomInt(): number;
  getRandomIndex(range: number): number;
  getRandomChar(charCase: CharCase): string;
  createPassword(options: {
    passLength: number;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    userString?: string;
  }): string;
}

export default SecureCryptoRandom;
