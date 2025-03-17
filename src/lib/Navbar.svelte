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
        grid-area: navbar;
        display: flex;
        align-items: center;
        justify-content: space-between;
				margin: 1.5rem 0;
    }

    #logo {
        color: var(--background-color);
        background-color: var(--primary-font-color);
        font-family: Libre Baskerville,
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
    }
</style>
