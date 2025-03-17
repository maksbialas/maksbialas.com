export default function currentYearRoman(): string {
	const romanNumerals = [
		['I', 'IV', 'V', 'IX'],
		['X', 'XL', 'L', 'XC'],
		['C', 'CD', 'D', 'CM'],
		['M']
	];

	let roman = '';
	let i = 0;
	let year = new Date().getFullYear();

	while (year > 0) {
		const digit = year % 10;
		year = Math.floor(year / 10);

		if (digit > 0) {
			if (digit <= 3) {
				roman = romanNumerals[i][0].repeat(digit) + roman;
			} else if (digit === 4) {
				roman = romanNumerals[i][1] + roman;
			} else if (digit === 5) {
				roman = romanNumerals[i][2] + roman;
			} else if (digit <= 8) {
				roman = romanNumerals[i][2] + romanNumerals[i][0].repeat(digit - 5) + roman;
			} else {
				roman = romanNumerals[i][3] + roman;
			}
		}
		i++;
	}

	return roman;
}
