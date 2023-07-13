# SecureCryptoRandom Library

SecureCryptoRandom is a JavaScript library designed for generating secure random passwords. It is based on the cryptographic functions of the browser and provides a set of methods for creating passwords of varying lengths using different character sets.

## Key Features

- **Secure Randomness: The library utilizes the window.crypto API, if available, to generate random values using cryptographic primitives. This ensures a higher level of security and randomness compared to traditional pseudo-random number generators.**

- **Customizable Password Generation: The library allows you to create passwords with various configurations:**

  - **Password Length: You can specify the desired length of the password.**
  - **Character Sets: Choose from uppercase letters, lowercase letters, numbers, and symbols to include in the generated password.**
  - **User String: Optionally, you can provide a user-defined string to be included in the password generation process.**

- **Strong Entropy: By combining multiple character sets and using shuffling techniques, the library enhances the entropy of the generated passwords, making them more resistant to brute-force attacks.**

- **User String Integration: The library offers the ability to incorporate a user-provided string into the password generation process. This allows users to include their own memorable words or phrases, making the passwords more personalized.**

- **Error Handling: The library includes error handling to ensure proper usage. It validates input parameters and throws informative error messages in case of invalid configurations.**

## Usage Example

```
import secureCryptoRandom from 'secure-crypto-random';

// Generate a password with default settings
const password = secureCryptoRandom.createPassword({ passLength: 12 });

console.log(password);
// Output: "J0Xm2i5$e6#9"

// Generate a password with custom settings
const customPassword = secureCryptoRandom.createPassword({
  passLength: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  userString: 'MySecret'
});

console.log(customPassword);
// Output: "s4T8$7lG3@f9h6MySecret"
```

The SecureCryptoRandom library provides a secure and flexible solution for generating strong passwords in JavaScript applications. With its customizable options and secure randomness, it helps to enhance the overall security of user accounts and sensitive information.

Please note that while this library offers additional security features, it is important to follow other best practices for password management, such as regularly updating passwords and storing them securely.

## Installation

You can install the SecureCryptoRandom library using npm:

```
npm install secure-crypto-random
```

## Usage

To use the SecureCryptoRandom library, import the class instance and start use it:

```
import secureCryptoRandom from 'secure-crypto-random';

	const generatePasswordParams = {
		passLength: 25,
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true,
		userString: Anton Oshurek,
	};

	console.log(secureCryptoRandom.createPassword(generatePasswordParams));
	//result = zAshurekLqij0Anton;LHwu
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
	passLength: 12,
	uppercase: false,
	lowercase: false,
	numbers: true,
	symbols: true,
	userString: 'John Doe'
});
console.log(password); // Example output: '{Doe!.John)'


const secondPassword = secureCryptoRandom.createPassword({
	passLength: 20,
	uppercase: true,
	lowercase: true,
	numbers: true,
	symbols: true,
});
console.log(secondPassword); // Example output: '6M>;x2JWn*QW.;(z[mu['


//default properties without params object :
// passLength: 20,
// uppercase: true,
// lowercase: true,
// numbers: true,
// symbols: true,

console.log(secureCryptoRandom.createPassword());
//result = )v*^e-HEdQ342Fsx_.Nh

```

If the passLength property is missing or undefined, an error is thrown to indicate that the passLength value cannot be missing.

The function checks the selected options and constructs a string of available characters based on the selected character sets: uppercase letters, lowercase letters, numbers, and symbols.

If there are no available characters to create a password (either because no options are selected or no character sets are available), an error is thrown with a message indicating that the parameters are not selected or there are no characters available to create a password. An example usage is also provided in the error message.

The function calculates the full password length by subtracting the length of the userString (if provided) from the passLength. If the resulting full password length is negative or zero, an error is thrown with a message indicating that the pass length cannot be negative or zero. The error message also includes the original passLength, the optional userString, and the resulting range of symbols after subtracting the userString length.

The function generates an array of random symbols for the password by iterating fullPassLength times. Each iteration shuffles the available characters and selects a random symbol to push into the passSymbolsArray.

If a userString is provided and its length is greater than zero, the function extracts words from the userString and creates an array of user words. It generates random indexes within the range of the full password length to determine where to insert each user word into the passSymbolsArray.

Finally, the passSymbolsArray is joined into a string to form the password, which is then returned.

In summary, the function allows the user to pass an options object with various parameters, but the passLength property is mandatory. If a property is missing in the options object, it will not be applied, but the passLength property must always be present.

## Notes

- The cryptoRandom() method relies on the window.crypto.getRandomValues function provided by the browser. If the browser does not support this function, it falls back to using Math.random(), which is less secure.

- The createPassword() method calculates the available characters based on the provided options. It then generates random characters and inserts them into an array. If a userString is provided, it splits it into words, generates random indexes, and inserts the words at the specified positions in the password array.

- The shuffleString() function and createWordsArrayFromString() function are utility functions used internally by the library.

That's it! You are now ready to use the SecureCryptoRandom library to generate secure random passwords in your JavaScript applications.

## Keywords

- #JavaScript
- #library
- #password
- #generation
- #security
- #random
- #cryptographic
- #customization
- #npm
- #web development
