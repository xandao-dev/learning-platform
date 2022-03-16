<script lang="ts">
	import { Link } from 'svelte-navigator';
	import { routes, IRoute } from '../routes/routes';
	import { useLocation } from 'svelte-navigator';

	const location = useLocation();
	let breadcrumbList: IRoute[] = [];
	function getBreadcrumbList(route: IRoute) {
		const breadcrumb = [];
		if (route?.name && route?.path) {
			breadcrumb.push({
				name: route.name,
				path: route.path,
			});
		}
		const parent = routes[route?.parent];
		if (parent?.name && parent?.path) {
			return [...getBreadcrumbList(parent), ...breadcrumb];
		}
		return breadcrumb;
	}
	function getRouteFromPath(path: string) {
		return Object.values(routes).find((route) => route.path === path);
	}

	$: breadcrumbList = getBreadcrumbList(getRouteFromPath($location.pathname));
</script>

<div class="breadcrumb">
	<div>
		{#each breadcrumbList as route, i (route.path)}
			<Link to={route.path}>
				{route.name}
			</Link>
			{#if i < breadcrumbList.length - 1}
				<i class="bi bi-chevron-right" />
			{/if}
		{/each}
	</div>
	<div />
	<div />
</div>

<style>
	.breadcrumb {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-background-dark);
		height: 3.125rem;
	}
</style>
