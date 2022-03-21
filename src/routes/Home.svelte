<script lang="ts">
	import type { NavigatorLocation, NavigateFn } from 'svelte-navigator';
	import type { IRoute } from '../routes/routes';
	import { currentRoute } from '../store/routing';
	import { user } from '../store/user';
	import businessImage from '../assets/images/business.svg';

	export let route: IRoute;
	// svelte-ignore unused-export-let
	export let location: NavigatorLocation;
	// svelte-ignore unused-export-let
	export let navigate: NavigateFn;

	currentRoute.set(route);
</script>

<svelte:head>
	<title>Home - Learning Platform</title>
</svelte:head>
<div class="page">
	<header class="page-header">
		<h1 class="page-title">Home</h1>
	</header>
	<div class="dashboard">
		<div class="user-card">
			<h1>Seja bem-vindo, {$user.name}!</h1>
			<img src={businessImage} alt="Ilustração de um computador" />
		</div>
	</div>
</div>

<style>
	.page {
		margin: 1.875rem;
	}
	.page-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.page-title {
		font-size: 1.375rem;
		text-transform: uppercase;
		font-weight: 600;
		margin: 0;
		padding: 0;
	}
	.dashboard {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1.875rem;
	}
	.dashboard h1 {
		font-size: 1.375rem;
		font-weight: 600;
		margin: 0;
		padding: 0;
	}
</style>
