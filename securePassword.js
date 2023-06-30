const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()-=_+[]{}|;:,.<>?";

const secureRandomInt = () => {
	if (window.crypto && window.crypto.getRandomValues) {
		return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
  } else {
		console.error('[secureRandomInt] window.crypto - undefined');
		return Math.random();
  };
};

const getRandomInt = () => {
	return Math.floor(secureRandomInt() * 10)
};

const getRandomIndex = (range) => {
	const randomIndex = Math.floor(secureRandomInt() * range);
	return randomIndex;
};

const getRandomChar = ({ charCase }) => {
	switch(charCase) {
		case 'upper':
			return uppercaseChars[getRandomIndex(uppercaseChars.length)];
		case 'lower':
			return lowercaseChars[getRandomIndex(lowercaseChars.length)];
		default:
			return ''
	};
};

const createWordsArrayFromString = (string) => {
	let words = [];

	if(string.length > 0) {
		words = string.trim().split(/\s+/);

		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].replace(/\s/g, '');
		};
	};
	return words;
};

const getPassword = ({passLength, uppercase, lowercase, numbers, symbols, userString}) => {
	let availableChars = "";
	if (uppercase) availableChars += uppercaseChars;
	if (lowercase) availableChars += lowercaseChars;
	if (numbers) availableChars += numberChars;
	if (symbols) availableChars += symbolChars;

	const fullPassLength = userString ? passLength - userString.length : passLength;

	if(Math.sign(fullPassLength) === -1 || 0) {
		throw new Error('pass length don\'t be a negative or zero');
	};

	const passSymbolsArray = [];

	for (let i = 0; i < fullPassLength; i++) {
		const shuffledChars = shuffleString(availableChars);
		const randomIndex = getRandomIndex(shuffledChars.length);

		passSymbolsArray.push(shuffledChars[randomIndex]);
	};

	if(userString && userString.length > 0) {
		const userWords = createWordsArrayFromString(userString);
		const userWordsCount = userWords.length;
		const indexForUserWord = [];

		for(let i = 0; i < userWordsCount; i++) {
			indexForUserWord.push(getRandomIndex(fullPassLength));
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

function shuffleString(str) {
	const array = str.split('');

	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	};

	return array.join("");
};

// const generatePasswordParams = {
// 	passLength: 20,
// 	uppercase: false,
// 	lowercase: false,
// 	numbers: true,
// 	symbols: true,
// 	userString: 'Anton Ashurek'
// };

export { randomInt, getPassword, getRandomChar, getRandomInt, secureRandomInt, getRandomIndex };
