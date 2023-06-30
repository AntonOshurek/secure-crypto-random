# SecureCryptoRandom Library

SecureCryptoRandom is a JavaScript library designed for generating secure random passwords. It is based on the cryptographic functions of the browser and provides a set of methods for creating passwords of varying lengths using different character sets.

## Installation

You can install the SecureCryptoRandom library using npm:

```
npm install secure-crypto-random
```

## Usage

To use the SecureCryptoRandom library, import the required methods and create an instance of the SecureCryptoRandom class:

```
import { shuffleString, createWordsArrayFromString } from 'secure-crypto-random';

class SecureCryptoRandom {
  // ...class implementation...
}

const secureCryptoRandom = new SecureCryptoRandom();
```

## Methods

### cryptoRandom()

Generates a random number between 0 and 1 using the cryptographic functions of the browser. Returns a number.

```
const randomNumber = secureCryptoRandom.cryptoRandom();
console.log(randomNumber); // Example output: 0.723456789
```

### getRandomInt()

Generates a random integer between 0 and 9 using the cryptoRandom() method. Returns an integer.

```
const randomInt = secureCryptoRandom.getRandomInt();
console.log(randomInt); // Example output: 5
```

### getRandomIndex(range: number)

Generates a random index between 0 and range (exclusive). Throws an error if range is negative or zero. Returns an integer.

```
const randomIndex = secureCryptoRandom.getRandomIndex(10);
console.log(randomIndex); // Example output: 3

```

### getRandomChar(charCase: 'upper' | 'lower')

Generates a random character either in uppercase or lowercase. Throws an error if charCase is not 'upper' or 'lower'. Returns a string.

```

const randomChar = secureCryptoRandom.getRandomChar('upper');
console.log(randomChar); // Example output: 'C'

```

### createPassword(options: { passLength: number, uppercase: boolean, lowercase: boolean, numbers: boolean, symbols: boolean, userString?: string })

Creates a random password based on the provided options. The passLength parameter specifies the length of the password. The uppercase, lowercase, numbers, and symbols parameters indicate whether to include characters from the respective character sets in the password. The userString parameter allows you to specify an additional string to be included in the password.

```

const password = secureCryptoRandom.createPassword({
passLength: 15,
uppercase: true,
lowercase: true,
numbers: true,
symbols: true,
userString: 'JohnDoe'
});
console.log(password); // Example output: '8Y7a#b3N@9o1J4e6D2'

```

## Notes

- The cryptoRandom() method relies on the window.crypto.getRandomValues function provided by the browser. If the browser does not support this function, it falls back to using Math.random(), which is less secure.

- The createPassword() method calculates the available characters based on the provided options. It then generates random characters and inserts them into an array. If a userString is provided, it splits it into words, generates random indexes, and inserts the words at the specified positions in the password array.

- The shuffleString() function and createWordsArrayFromString() function are utility functions used internally by the library.

That's it! You are now ready to use the SecureCryptoRandom library to generate secure random passwords in your JavaScript applications.
