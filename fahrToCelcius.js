'use strict';

const convert = fahr => {
	let F = Number(fahr);
	if (F == F) {
		let celsius;
		celsius = (fahr - 32) * (5 / 9);
		let result = celsius.toFixed(4);
		console.log(`${fahr}°F to Celsius is: ${result}°C`);
	} else {
		console.log(`${fahr} is not a valid number but a/an ${typeof fahr}.`);
	}
};
//TEST CODE

convert(0);
convert('0');
convert([1, 2, 3]);
convert({ temp: 0 });
