<script lang="ts">
	import '$lib/style.css';
	import Navbar from '$lib/Navbar.svelte';

	const { children } = $props();

	const links: [text: string, href: string][] = [
		['About', '/'],
		['Contact', '/contact']
	];
</script>

<Navbar {links} />

{@render children()}
