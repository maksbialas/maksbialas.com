<script lang="ts">
	import { page } from '$app/state';

	const { links }: { links: [text: string, href: string][] } = $props();
</script>

<nav>
	<div id="logo">M</div>
	<ul>
		{#each links as [text, href]}
			<li class:current={page.route.id === href}>
				<a {href}>{text}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/*padding: 1rem 0;*/
		margin: 0 var(--side-margin);
		height: 6rem;
	}

	#logo {
		color: white;
		background-color: black;
		font-family:
			Libre Baskerville,
			serif;
		font-size: 2rem;
		line-height: 2rem;
		padding: 0.6rem 0.5rem;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		display: inline-block;
		margin-left: 1.25rem;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			bottom: -0.25rem;
			left: -0.5rem;
			width: 0;
			height: 2px;
			background: var(--primary-font-color);
			transition: width 0.15s ease-in-out;
		}

		&.current,
		&:hover {
			&::after {
				width: calc(100% + 0.5rem);
			}
		}
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
