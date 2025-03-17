<script lang="ts">
	import '$lib/style.css';
	import Navbar from '$lib/Navbar.svelte';
	import currentYearRoman from '$lib/currentYearRoman';

	const { children } = $props();

	const links: [text: string, href: string][] = [
		['About', '/'],
		['Contact', '/contact']
	];
</script>

<Navbar {links} />

{@render children()}

<footer>
	<div id="footer-links">
		<a href="https://www.linkedin.com/in/maksbialas/" target="_blank">LinkedIn</a>
		<a href="https://github.com/maksbialas" target="_blank">GitHub</a>
	</div>
	<div id="footer-author">
		{currentYearRoman()} Maksymilian Białas
	</div>
</footer>

<style>
		footer {
        grid-area: footer;
				display: flex;

				flex-direction: column;
        @media (min-width: 768px) {
            margin-bottom: 2rem;
            flex-direction: row;
        }
		}

		#footer-author, #footer-links {
				flex-grow: 1;
				line-height: 3.5rem;
		}

		#footer-author {
				text-align: right;
				font-size: .75rem;
		}

    a {
        padding-left: 0.5rem;
        padding-bottom: 0.2rem;
        margin-right: 1rem;
        border-bottom: 2px solid var(--primary-font-color);
        text-decoration: none;
    }
</style>