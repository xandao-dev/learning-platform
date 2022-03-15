<script lang="ts">
	import { Router, Route } from 'svelte-navigator';
	import Menubar from './lib/Menubar.svelte';
	import Sidebar from './lib/Sidebar.svelte';
	import Home from './routes/Home.svelte';
	import Trainings from './routes/Trainings.svelte';
	import UserSettings from './routes/UserSettings.svelte';
	import Default from './layout/Default.svelte';
</script>

<Router>
	<Default>
		<Menubar slot="menubar" />
		<Sidebar slot="sidebar" />
		<main slot="main">
			<Route path="/">
				<Home />
			</Route>
			<Route path="trainings">
				<Trainings />
			</Route>
			<Route path="user-settings">
				<UserSettings />
			</Route>
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
