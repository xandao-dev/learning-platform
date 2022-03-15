<script lang="ts">
	import { Router, Route } from 'svelte-navigator';
	import Menubar from './lib/Menubar.svelte';
	import Sidebar from './lib/Sidebar.svelte';
	import Home from './routes/Home.svelte';
	import Trainings from './routes/Trainings.svelte';
	import UserSettings from './routes/UserSettings.svelte';
</script>

<Router>
	<Menubar />
	<Sidebar />
	<main>
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
	}
</style>
