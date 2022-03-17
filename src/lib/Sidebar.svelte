<script lang="ts">
	import { Link } from 'svelte-navigator';
	import { routes, IRoute } from '../routes/routes';
	import { useLocation } from 'svelte-navigator';

	const location = useLocation();
	const sidebarRoutes = Object.values(routes).filter((route) => route.isOnSidebar);
	let currentRoute: IRoute = routes.home;

	function getRouteFromPath(path: string) {
		return Object.values(sidebarRoutes).find((route) => route.path === path);
	}

	$: currentRoute = getRouteFromPath($location.pathname);
</script>

<nav>
	<header class="header">
		<button class="h-empty-button">
			<i class="bi bi-list icons" />
		</button>
	</header>
	<ul>
		{#each sidebarRoutes as route (route.path)}
			<li>
				<Link to={route.path}>
					<i class="{route.icon} icons" class:selected={currentRoute.path === route.path} />
				</Link>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		width: 6.25rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-secondary);
	}

	/* all icons */
	.icons {
		display: inline-block;
		font-size: 2rem;
		line-height: 0rem;
		color: var(--color-icon-white);
	}

	/* hamburger */
	.header {
		margin: 3.75rem 0;
	}
	.header > .icons,
	.header > .icons::before {
		line-height: 1.5rem;
	}

	/* routes list */
	ul {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0 0;
	}
	li {
		margin: 0 0 3.125rem 0;
		padding: 0;
		width: 100%;
		cursor: pointer;
	}
	li:last-child {
		margin-bottom: 0;
	}
	.selected {
		color: var(--color-icon-active);
	}
</style>
