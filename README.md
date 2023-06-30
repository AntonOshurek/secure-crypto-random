# crypto-random-password

crypto-random-password is a JavaScript library for generating secure random passwords. It utilizes cryptographic methods to ensure strong randomness and provides various options for customizing password generation.

## Features

- **Generation of random passwords with customizable length.**
- **Support for uppercase letters, lowercase letters, numbers, and symbols in generated passwords.**
- **Ability to include a user-defined string in the generated password.**
- **Robust security using cryptographic algorithms for random number generation.**

## Installation

### Install the crypto-random-password library using npm:

```
npm install crypto-random-password
```

## Usage

To use the library, import the desired functions and invoke them with appropriate parameters.

### getRandomChar

The `getRandomChar` function generates a random character based on the specified character case.

```
import { getRandomChar } from 'crypto-random-password';

const randomUppercaseChar = getRandomChar({ charCase: 'upper' });
console.log(randomUppercaseChar); // Example output: 'R'

const randomLowercaseChar = getRandomChar({ charCase: 'lower' });
console.log(randomLowercaseChar); // Example output: 'j'
```

### getPassword

The `getPassword` function generates a secure random password with customizable options.

```
import { getPassword } from 'crypto-random-password';

const passwordOptions = {
passLength: 12,
uppercase: true,
lowercase: true,
numbers: true,
symbols: true,
userString: 'MySecret'
};

const password = getPassword(passwordOptions);
console.log(password); // Example output: 'H4tF@#iU6?9mMySecret'
```

## API Reference

### getRandomChar(options: { charCase: CharCase }): string

Generates a random character based on the specified character case.

- options: An object specifying the character case:
- charCase: The character case ('upper' or 'lower').

Returns: A randomly generated character.

### getPassword(options: PasswordOptions): string

Generates a secure random password based on the specified options.

\*options: An object specifying the password generation options:

- passLength: The length of the password (integer).
- uppercase: Include uppercase letters in the password (boolean).
- lowercase: Include lowercase letters in the password (boolean).
- numbers: Include numbers in the password (boolean).
- symbols: Include symbols in the password (boolean).
- userString: A user-defined string to include in the password (string).
- Returns: The generated random password.

## Examples

Here are a few examples demonstrating the usage of the crypto-random-password library:

```
import { getRandomChar, getPassword } from 'crypto-random-password';

const randomUppercaseChar = getRandomChar({ charCase: 'upper' });
console.log(randomUppercaseChar); // Example output: 'R'

const passwordOptions = {
passLength: 12,
uppercase: true,
lowercase: true,
numbers: true,
symbols: true,
userString: 'MySecret'
};

const password = getPassword(passwordOptions);
console.log(password); // Example output: 'H4tF@#iU6?9mMySecret'
```

## Conclusion

With crypto-random-password, you can easily generate secure random passwords with customizable options. It offers strong randomness using cryptographic methods, ensuring the reliability and security of the generated passwords.

We hope this documentation helps you effectively utilize the features of the crypto-random-password library. If you have any further questions or require assistance,
