<script lang="ts">
	import type { NavigatorLocation, NavigateFn } from 'svelte-navigator';
	import type { IRoute } from '../routes/routes';
	import { currentRoute } from '../store/routing';
	import { trainings } from '../store/trainings';
	import { ITrainingModule, trainingModules } from '../store/trainingModules';
	import TabsNavigator from '../lib/TabsNavigator.svelte';
	import DefaultButton from '../lib/DefaultButton.svelte';
	import TrainingDescription from '../lib/TrainingDescription.svelte';
	import TrainingModulesView from '../lib/TrainingModulesView.svelte';

	export let trainingId: string;
	export let route: IRoute;
	// svelte-ignore unused-export-let
	export let location: NavigatorLocation;
	// svelte-ignore unused-export-let
	export let navigate: NavigateFn;

	currentRoute.set(route);
	const training = trainings.getById(trainingId);
	let modulesView: TrainingModulesView;
	let currentModules: ITrainingModule[] = [];
	const tabs = [
		{
			name: 'Módulos',
			path: `${trainingId}#modules`,
			hash: 'modules',
		},
		{
			name: 'Aulas',
			path: `${trainingId}#lessons`,
			hash: 'lessons',
		},
	];
	let selectedTab = tabs[0];
	$: currentModules = trainingModules.getAllFromTraining(trainingId);
</script>

<svelte:head>
	<title>Treinamento - Learning Platform</title>
</svelte:head>
<div class="page">
	<div class="navigator">
		<TabsNavigator {tabs} bind:current={selectedTab} />
	</div>
	<div class="content">
		{#if selectedTab.hash === 'lessons'}
			<h1>Aulas</h1>
		{:else}
			<TrainingModulesView bind:this={modulesView} trainingModules={currentModules} />
		{/if}
	</div>
	<div class="actions">
		{#if selectedTab.hash === 'lessons'}
			<DefaultButton on:click={() => {}}>Nova Aula</DefaultButton>
		{:else}
			<DefaultButton on:click={modulesView?.newModule}>Novo Módulo</DefaultButton>
		{/if}
	</div>
	<div class="training-preview">
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
			'content preview';
		column-gap: 1.875rem;
	}
	.navigator {
		grid-area: navigator;
	}
	.actions {
		grid-area: actions;
		display: flex;
		justify-content: center;
	}
	.training-preview {
		grid-area: preview;
	}
</style>
