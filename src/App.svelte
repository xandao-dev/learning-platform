<script lang="ts">
	import { Router, Route } from 'svelte-navigator';
	import { routes, IRoute } from './routes/routes';
	import Menubar from './lib/layout-components/Menubar.svelte';
	import Sidebar from './lib/layout-components/Sidebar.svelte';
	import Breadcrumb from './lib/layout-components/Breadcrumb.svelte';
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
	@import '../public/styles/buttons.css';

	/* Typography */
	:global(:root) {
		font-family: 'Open Sans', sans-serif;
	}
	:global(input[type='text']) {
		font-family: 'Open Sans', sans-serif;
	}
	:global(input[type='search']) {
		font-family: 'Open Sans', sans-serif;
	}
	:global(input:input-placeholder) {
		/* Internet Explorer 10-11 */
		font-family: 'Open Sans', sans-serif;
	}
	:global(input::input-placeholder) {
		/* Microsoft Edge */
		font-family: 'Open Sans', sans-serif;
	}
	:global(input::placeholder) {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		font-family: 'Open Sans', sans-serif;
		opacity: 1; /* Firefox */
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	:global(h1, h2, h3, h4, h5, h6, p, a, button, input, textarea, select) {
		outline: none;
	}
	:global(a) {
		text-decoration: none;
	}
</style>
