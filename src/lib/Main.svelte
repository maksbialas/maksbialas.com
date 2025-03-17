<script lang="ts">
	import { fade } from 'svelte/transition';

	const { children } = $props();

	const outDuration = 150;
</script>

<main out:fade={{ duration: outDuration }} in:fade={{ delay: outDuration + 1 }}>
	{@render children()}
</main>

<style>
	main {
		grid-area: main;
	}
</style>
