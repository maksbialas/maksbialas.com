<script lang="ts">
	import '$lib/style.css';
	import { page } from '$app/state';

	const { children } = $props();
</script>

<nav>
	<div id="logo">M</div>
	<ul>
		{#snippet navLink(text: string, href: string)}
			<li class:current={page.route.id === href}>
				<a {href}>{text}</a>
			</li>
		{/snippet}
		{@render navLink('About', '/')}
		{@render navLink('Contact', '/contact')}
	</ul>
</nav>

{@render children()}

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
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
			right: 0;
			width: 0;
			height: 2px;
			background: var(--primary-font-color);
			transition: width 0.15s ease-in-out;
		}

		&.current,
		&:hover {
			&::after {
				width: calc(100% + .5rem);
			}
		}
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
