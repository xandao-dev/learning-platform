<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import type { NavigatorLocation } from 'svelte-navigator';
	import TrainingCard from '../lib/TrainingCard.svelte';
	import type { ITraining } from 'src/store/trainings';
	import svelteLogo from '../assets/trainings/svelte.png';
	import reactLogo from '../assets/trainings/react.png';

	// svelte-ignore unused-export-let
	export let location: NavigatorLocation;
	// svelte-ignore unused-export-let
	export let navigate: {};

	const trainings: ITraining[] = [
		{
			id: '00569d59-5bc9-491e-94ec-a5906188727e',
			title: 'Curso de Svelte',
			description: 'Um curso para introdução ao Svelte utilizando Vite',
			logo: svelteLogo,
			duration: '20h',
			startDate: 1600000000000,
			endDate: 9999999999999,
			enabled: true,
		},
		{
			id: '42f0aa21-3bbd-46af-9586-0153c6f32a0d',
			title: 'Curso de React',
			description: 'Description 2',
			logo: reactLogo,
			duration: '30h',
			startDate: 1600000000000,
			endDate: 9999999999999,
			enabled: false,
		},
	];
</script>

<svelte:head>
	<title>Treinamentos - Learning Platform</title>
</svelte:head>
<div class="page">
	<h1 class="page-title">Seus Treinamentos</h1>
	<section>
		{#each trainings as training (training.id)}
			<TrainingCard {training} />
		{/each}
	</section>
</div>

<style>
	.page {
		margin: 1.875rem;
	}
	.page-title {
		font-size: 1.375rem;
		text-transform: uppercase;
		font-weight: 600;
		margin: 0;
		padding: 0;
	}
</style>
