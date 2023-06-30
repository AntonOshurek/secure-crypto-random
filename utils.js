export const shuffleString = (str) => {
	const array = str.split('');

	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	};

	return array.join("");
};

export const createWordsArrayFromString = (string) => {
	let words = [];

	if(string.length > 0) {
		words = string.trim().split(/\s+/);

		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].replace(/\s/g, '');
		};
	};
	return words;
};
