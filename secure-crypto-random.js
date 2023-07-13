import { shuffleString, createWordsArrayFromString } from './utils.js';

class SecureCryptoRandom {
	#uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	#lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	#numberChars = "0123456789";
	#symbolChars = "!@#$%^&*()-=_+[]{}|;:,.<>?";
	#defaultGeneratePasswordOptions = {
		passLength: 20,
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true,
	};

	cryptoRandom() {
		if (window.crypto && window.crypto.getRandomValues) {
			return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
		} else {
			console.error('[cryptoRandom] window.crypto - undefined');
			return Math.random();
		};
	};

	getRandomInt() {
		return Math.floor(this.cryptoRandom() * 10);
	};

	getRandomIndex(range) {
		if(Math.sign(range) === -1 || Math.sign(range) === 0 ) {
			throw new Error(`Error in getRandomIndex function. range cannot be negative or zero!`);
		};

		return Math.floor(this.cryptoRandom() * range);
	};

	getRandomChar(charCase) {
		switch(charCase) {
			case 'upper':
				return this.#uppercaseChars[this.getRandomIndex(this.#uppercaseChars.length)];
			case 'lower':
				return this.#lowercaseChars[this.getRandomIndex(this.#lowercaseChars.length)];
			default:
				throw new Error('unknow value in getRandomChar function. You can use only "upper" or "lower" cases in funtion parametrs!');
		};
	};

	createPassword(options = this.#defaultGeneratePasswordOptions) {
		const {
			passLength,
			uppercase,
			lowercase,
			numbers,
			symbols,
			userString,
		} = options;

		if(!passLength) {
			throw new Error('passLength value cannot be missing');
		};

		let availableChars = "";
		if (uppercase) availableChars += this.#uppercaseChars;
		if (lowercase) availableChars += this.#lowercaseChars;
		if (numbers) availableChars += this.#numberChars;
		if (symbols) availableChars += this.#symbolChars;

		if(Math.sign(availableChars.length) === -1 || Math.sign(availableChars.length) === 0) {
			throw new Error('The parameters are not selected or there are no characters available to create a password. example : secureCryptoRandom.createPassword({passLength: 24, uppercase: true,})');
		};

		const fullPassLength = userString ? passLength - userString.length : passLength;

		if(Math.sign(fullPassLength) === -1 || Math.sign(fullPassLength) === 0) {
			throw new Error(`pass length don\'t be a negative or zero. You set passLength - ${passLength} ${userString ? 'and extra line - \'' + userString + '\'.' : null} After Range = ${fullPassLength} symbols`);
		};

		const passSymbolsArray = [];

		for (let i = 0; i < fullPassLength; i++) {
			const shuffledChars = shuffleString(availableChars);
			const randomIndex = this.getRandomIndex(shuffledChars.length);

			passSymbolsArray.push(shuffledChars[randomIndex]);
		};

		if(userString && userString.length > 0) {
			const userWords = createWordsArrayFromString(userString);
			const userWordsCount = userWords.length;
			const indexForUserWord = [];

			for(let i = 0; i < userWordsCount; i++) {
				indexForUserWord.push(this.getRandomIndex(fullPassLength));
			};

			for(let i = 0; i < indexForUserWord.length; i++) {
				const indexToInsert = indexForUserWord[i];
				const wordToInsert = userWords[i];

				passSymbolsArray.splice(indexToInsert, 0, wordToInsert);
			};
		};

		const password = passSymbolsArray.join('');
		return password;
	};
};

const secureCryptoRandom = new SecureCryptoRandom();

export default secureCryptoRandom;
