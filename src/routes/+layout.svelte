<script lang="ts">
	import '$lib/style.css';
	import Navbar from '$lib/Navbar.svelte';

	const { children } = $props();

	const links: [text: string, href: string][] = [
		['About', '/'],
		['Contact', '/contact']
	];

	function currentYearRoman(): string {
		const romanNumerals = [
			['I', 'IV', 'V', 'IX'],
			['X', 'XL', 'L', 'XC'],
			['C', 'CD', 'D', 'CM'],
			['M']
		];

		const values = [1, 10, 100, 1000];
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
</script>

<Navbar {links} />

{@render children()}

<footer>{currentYearRoman()} Maksymilian Białas</footer>

<style>
	footer {
			font-size: .75rem;
			position: absolute;
			right: var(--side-margin);
			bottom: .75rem;
	}

  @media (min-width: 768px) {
      footer {
          bottom: 4rem;
      }
	}
</style>