<script lang="ts">
	import type { NavigatorLocation, NavigateFn } from 'svelte-navigator';
	import type { IRoute } from '../routes/routes';
	import { currentRoute } from '../store/routing';

	export let route: IRoute;
	// svelte-ignore unused-export-let
	export let location: NavigatorLocation;
	// svelte-ignore unused-export-let
	export let navigate: NavigateFn;

	currentRoute.set(route);
</script>

<svelte:head>
	<title>Usuário - Learning Platform</title>
</svelte:head>
<div>
	<h1>Configurações do Usuário</h1>
</div>
