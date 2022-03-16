<script lang="ts">
	import { Link } from 'svelte-navigator';
	import { routes, IRoute } from '../routes/routes';
	import { useLocation } from 'svelte-navigator';

	const location = useLocation();
	let breadcrumbList: IRoute[] = [];
	$: breadcrumbList = getBreadcrumbList(getRouteFromPath($location.pathname));

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
	function isLastCrumb(index: number) {
		return index === breadcrumbList.length - 1;
	}
</script>

<div class="breadcrumb">
	<div>
		{#each breadcrumbList as route, i (route.path)}
			{#if !isLastCrumb(i)}
				<Link to={route.path}>
					{route.name}
				</Link>
				<i class="bi bi-chevron-right" />
			{:else}
				{route.name}
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
