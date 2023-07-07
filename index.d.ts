// utils.js
export function shuffleString(str: string): string;
export function createWordsArrayFromString(str: string): string[];

declare module 'secure-crypto-random' {
  class SecureCryptoRandom {
    constructor();
    getRandomInt(): number;
    getRandomChar(charCase: 'upper' | 'lower'): string;
    createPassword(options: {
      passLength: number;
      uppercase?: boolean;
      lowercase?: boolean;
      numbers?: boolean;
      symbols?: boolean;
      userString?: string;
    }): string;
  }

  const secureCryptoRandom: SecureCryptoRandom;
  export default secureCryptoRandom;
}

