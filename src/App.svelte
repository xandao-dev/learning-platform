<script lang="ts">
	import { Router, Route } from 'svelte-navigator';
	import { routes, IRoute } from './routes/routes';
	import Menubar from './lib/Menubar.svelte';
	import Sidebar from './lib/Sidebar.svelte';
	import Breadcrumb from './lib/Breadcrumb.svelte';
	import Default from './layout/Default.svelte';

	const routeList = Object.values(routes);
</script>

<Router>
	<Default>
		<Menubar slot="menubar" />
		<Sidebar slot="sidebar" />
		<Breadcrumb slot="breadcrumb" />
		<main slot="main">
			{#each routeList as route (route.path)}
				<Route path={route.path} component={route.component} />
			{/each}
		</main>
	</Default>
</Router>

<style>
	@import 'bootstrap-icons/font/bootstrap-icons';
	@import '../public/styles/typography.css';
	@import '../public/styles/colors.css';

	/* Typography */
	:global(:root) {
		font-family: 'Open Sans', sans-serif;
	}
	:global(html, body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
