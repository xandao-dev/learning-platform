<script lang="ts">
	import { Link } from 'svelte-navigator';
	import { routes, IRoute } from '../../routes/routes';
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
	function isLastCrumb(index: number) {
		return index === breadcrumbList.length - 1;
	}

	$: breadcrumbList = getBreadcrumbList(getRouteFromPath($location.pathname));
</script>

<div class="breadcrumb">
	<div class="crumbs">
		{#each breadcrumbList as route, i (route.path)}
			{#if !isLastCrumb(i)}
				<Link to={route.path}>
					<span class="link-content">{route.name}</span>
				</Link>
				<i class="bi bi-chevron-right chevron" />
			{:else}
				<span class="link-content last-link">{route.name}</span>
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
	.crumbs {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-left: 1.875rem;
	}
	.chevron {
		margin: 0 1.25rem;
		font-size: 0.75rem;
	}
	.link-content {
		color: var(--color-text-dark);
		font-size: 1rem;
	}
	.link-content:not(.last-link):hover {
		color: var(--color-text-black);
	}
</style>
