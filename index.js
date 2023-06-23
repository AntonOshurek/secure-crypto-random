const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()-=_+[]{}|;:,.<>?";

const secureRandomInt = () => {
	if (window.crypto && window.crypto.getRandomValues) {
		return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
  } else {
		console.error('[secureRandomInt] window.crypto - undefinde');
		return Math.random();
  };
};

const getRandomInt = () => {
	return Math.floor(secureRandomInt() * 10)
};

const getRandomIndex = (length) => {
	const randomIndex = Math.floor(secureRandomInt() * length);
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

const getPassword = ({passLength, uppercase, lowercase, numbers, symbols}) => {
  let availableChars = "";
  if (uppercase) availableChars += uppercaseChars;
  if (lowercase) availableChars += lowercaseChars;
  if (numbers) availableChars += numberChars;
  if (symbols) availableChars += symbolChars;

	let password = "";
  for (let i = 0; i < passLength; i++) {
    const shuffledChars = shuffleString(availableChars);
    const randomIndex = getRandomIndex(shuffledChars.length);
    password += shuffledChars[randomIndex];
  };

  return password;
};

function shuffleString(str) {
  const array = str.split("");

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  };

  return array.join("");
};

const generatePasswordParams = {
	passLength: 20,
	uppercase: true,
	lowercase: true,
	numbers: true,
	symbols: true,
};

// Пример использования функции
const password = getPassword(generatePasswordParams);
console.log(password);

// export { randomInt };
