<script lang="ts">
	import { Router, Route, Link } from 'svelte-navigator';
	import type { NavigatorLocation, NavigateFn } from 'svelte-navigator';
	import type { IRoute } from '../routes/routes';
	import { currentRoute } from '../store/routing';
	import { trainings } from '../store/trainings';
	import TabsNavigator from '../lib/TabsNavigator.svelte';
	import DefaultButton from '../lib/DefaultButton.svelte';
	import TrainingDescription from '../lib/TrainingDescription.svelte';

	export let trainingId: string;
	export let route: IRoute;
	// svelte-ignore unused-export-let
	export let location: NavigatorLocation;
	// svelte-ignore unused-export-let
	export let navigate: NavigateFn;

	currentRoute.set(route);
	const training = trainings.getById(trainingId);
	const tabs = [
		{
			name: 'Módulos',
			path: `${trainingId}#modules`,
			hash: 'modules',
		},
		{
			name: 'Aulas',
			path: `${trainingId}#classes`,
			hash: 'classes',
		},
	];
	let selectedTab = tabs[0];
	let newActionText = 'Novo módulo';
	$: newActionText = selectedTab.hash === 'modules' ? 'Novo Módulo' : 'Nova Aula';
</script>

<svelte:head>
	<title>Treinamento - Learning Platform</title>
</svelte:head>
<div class="page">
	<div class="navigator">
		<TabsNavigator {tabs} bind:current={selectedTab} />
		<div class="content">
			<Router>
				<Route path=":id" let:params>
					<h2>Módulos</h2>
					<h2>ID: {JSON.stringify(params)}</h2>
					<h2>ID2: {JSON.stringify(trainingId)}</h2>
					<h2>LOC: {JSON.stringify(location.hash)}</h2>
				</Route>
			</Router>
		</div>
	</div>
	<div class="actions">
		<DefaultButton on:click={() => {}}>{newActionText}</DefaultButton>
	</div>
	<div class="description">
		<TrainingDescription {training} />
	</div>
</div>

<style>
	.page {
		margin: 1.875rem;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto;
		grid-template-areas:
			'navigator actions'
			'navigator description';
		column-gap: 1.875rem;
	}
	.navigator {
		grid-area: navigator;
	}
	.actions {
		grid-area: actions;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.description {
		grid-area: description;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
