<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import type { NavigatorLocation } from 'svelte-navigator';
	import TrainingCard from '../lib/TrainingCard.svelte';
	import DefaultButton from '../lib/DefaultButton.svelte';
	import Offcanvas from '../lib/Offcanvas.svelte';
	import ImagePicker from '../lib/ImagePicker.svelte';
	import type { ITraining } from 'src/store/trainings';
	import svelteLogo from '../assets/trainings/svelte.png';
	import reactLogo from '../assets/trainings/react.png';

	// svelte-ignore unused-export-let
	export let location: NavigatorLocation;
	// svelte-ignore unused-export-let
	export let navigate: {};

	let trainings: ITraining[] = [
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
			description: 'Como criar aplicativos utilizando React',
			logo: reactLogo,
			duration: '30h',
			startDate: 1600000000000,
			endDate: 9999999999999,
			enabled: false,
		},
	];

	interface IOffcanvasData {
		title: string;
		help: string;
		open: boolean;
	}
	let offcanvasData: IOffcanvasData = {
		title: '',
		help: '',
		open: false,
	};

	function addTraining() {
		offcanvasData.title = 'Novo treinamento';
		offcanvasData.help = 'Adicione um novo treinamento ou curso';
		offcanvasData.open = true;

		/*
		const training: ITraining = {
			id: uuidv4(),
			title: 'Curso de Vue.js',
			description: 'Como criar aplicativos utilizando Vue.js, um framework web progressivo',
			logo: reactLogo,
			duration: '30h',
			startDate: 1600000000000,
			endDate: 9999999999999,
			enabled: false,
		};
		trainings = [...trainings, training];
		*/
	}
</script>

<svelte:head>
	<title>Treinamentos - Learning Platform</title>
</svelte:head>
<div class="page">
	<header class="page-header">
		<h1 class="page-title">Seus Treinamentos</h1>
		<DefaultButton on:click={addTraining}>Novo Treinamento</DefaultButton>
	</header>
	<section>
		{#each trainings as training (training.id)}
			<TrainingCard {training} />
		{/each}
	</section>
	<Offcanvas {...offcanvasData}>
		<ImagePicker />
	</Offcanvas>
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
</style>
