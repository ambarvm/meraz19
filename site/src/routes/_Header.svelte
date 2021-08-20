<script>
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';

	import { sidebarOpen } from '$lib/stores';
	import links from '$lib/links.json';

	let scrollY;
	$: transparent = browser && scrollY <= 56 && $page.path === '/';
	$: bgColor = transparent ? 'rgba(0,0,0,0)' : 'black';
	$: shadow = transparent ? 'none' : 'var(--shadow)';

	$: display = $sidebarOpen ? 'none' : 'flex';
</script>

<svelte:window bind:scrollY />

<nav
	class="app-bar"
	style={`background-color: ${bgColor}; box-shadow: ${shadow}; display: ${display} `}
>
	<button aria-label="Menu" on:click={() => ($sidebarOpen = true)}>
		<Fa icon={faBars} size="2x" />
	</button>

	<h1><a href="/">MERAZ</a></h1>
	<ul class="links">
		{#each links as { href, text }}
			<li>
				<a {href} class:active={href === '/' ? $page.path === href : $page.path.includes(href)}
					>{text}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	button {
		background: none;
		border: none;
		color: currentColor;
	}
	li {
		background-image: url('/assets/gold-texture.jpg');
		font-family: 'Metal Mania', cursive;
		font-size: 1.1em;
		letter-spacing: 2px;
		font-weight: bold;

		text-transform: uppercase;
		text-align: center;
		color: transparent;
		-webkit-font-smoothing: antialiased;

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	@media (max-width: 900px) {
		h1 {
			position: relative;
			left: -10px;
		}
	}

	h1 {
		font-size: 2em;
		margin: 10px;
		font-family: 'Metal Mania', cursive;
		font-weight: normal;
		letter-spacing: 5px;
		background: -webkit-linear-gradient(gold, gold, red);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.app-bar {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		right: 0;
		padding: 0px 40px 0px 15px;
		background-color: transparent;

		display: flex;
		align-items: center;
		overflow-x: hidden;
		color: var(--primary);
		-webkit-transition: display 4s ease-in-out;
		-moz-transition: display 4s ease-in-out;
		-ms-transition: display 4s ease-in-out;
		-o-transition: display 4s ease-in-out;
		transition: display 4s ease-in-out;

		transition: background-color 0.8s ease;
		--shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
			0 1px 5px 0 rgba(0, 0, 0, 0.2);
		box-shadow: var(--shadow);
	}
	.links {
		display: none;
		align-items: center;
		padding-inline-start: 3px;
		li {
			display: inline-block;
			margin-left: 1.7em;
			position: relative;

			a {
				color: inherit;
				font-size: 1.125em;
			}
			a:after {
				background: none repeat scroll 0 0 transparent;
				bottom: 0;
				content: '';
				display: block;
				height: 2px;
				left: 50%;
				bottom: -10px;
				position: absolute;
				background: var(--primary);
				transition: width 0.3s ease 0s, left 0.3s ease 0s;
				width: 0;
			}
			a:hover:after,
			a.active:after {
				width: 100%;
				left: 0;
			}
		}
	}
	.active {
		color: goldenrod;
	}
	nav > h1 {
		flex-grow: 1;
		text-align: center;
	}
	@media screen and (min-width: 900px) {
		.links {
			display: flex;
		}
		button {
			display: none;
		}
		nav > h1 {
			text-align: left;
		}
	}
</style>
