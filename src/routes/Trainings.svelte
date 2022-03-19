<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import type { NavigatorLocation, NavigateFn } from 'svelte-navigator';
	import { trainings, getEmptyTraining, ITraining } from '../store/trainings';
	import TrainingCard from '../lib/TrainingCard.svelte';
	import DefaultButton from '../lib/DefaultButton.svelte';
	import Offcanvas from '../lib/Offcanvas.svelte';
	import TrainingForm from '../lib/form-components/TrainingForm.svelte';
	import svelteLogo from '../assets/trainings/svelte.png';
	import reactLogo from '../assets/trainings/react.png';
	import { routes, IRoute } from '../routes/routes';
	import { currentRoute } from '../store/routing';

	export let route: IRoute;
	// svelte-ignore unused-export-let
	export let location: NavigatorLocation;
	export let navigate: NavigateFn;

	currentRoute.set(route);

	let offcanvasData = {
		title: '',
		help: '',
		open: false,
	};
	let isEditingTraining = false;
	let currentTraining = getEmptyTraining();

	if (!$trainings.length) {
		const initialTrainings: ITraining[] = [
			{
				id: '00569d59-5bc9-491e-94ec-a5906188727e',
				name: 'Curso de Svelte',
				description: 'Um curso para introdução ao Svelte utilizando Vite',
				image: svelteLogo,
				workload: '20h',
				startDate: 1600000000000,
				endDate: 9999999999999,
				enabled: true,
			},
			{
				id: '42f0aa21-3bbd-46af-9586-0153c6f32a0d',
				name: 'Curso de React',
				description: 'Como criar aplicativos utilizando React',
				image: reactLogo,
				workload: '30h',
				startDate: 1600000000000,
				endDate: 9999999999999,
				enabled: false,
			},
		];
		trainings.createBulk(initialTrainings);
	}

	function newTraining() {
		offcanvasData.title = 'Novo treinamento';
		offcanvasData.help = 'Adicione um novo treinamento ou curso';
		currentTraining = getEmptyTraining();
		isEditingTraining = false;
		offcanvasData.open = true;
	}
	function editTraining(e: { detail: { id: string } }) {
		offcanvasData.title = 'Editar treinamento';
		offcanvasData.help = 'Edite o treinamento ou curso';
		currentTraining = trainings.getById(e.detail.id);
		isEditingTraining = true;
		offcanvasData.open = true;
	}
	function removeTraining(e: { detail: { id: string } }) {
		trainings.remove(e.detail.id);
	}
	function openTraining(e: { detail: { id: string } }) {
		navigate(routes.training.path.replace('*trainingId', e.detail.id));
	}

	function saveTraining() {
		offcanvasData.open = false;
		currentTraining.id = uuidv4();
		currentTraining.enabled = true;
		trainings.create(currentTraining);
	}
	function updateTraining() {
		offcanvasData.open = false;
		trainings.edit(currentTraining);
	}
	function disableTraining() {
		offcanvasData.open = false;
		currentTraining.enabled = false;
		trainings.edit(currentTraining);
	}
</script>

<svelte:head>
	<title>Treinamentos - Learning Platform</title>
</svelte:head>
<div class="page">
	<header class="page-header">
		<h1 class="page-title">Seus Treinamentos</h1>
		<DefaultButton on:click={newTraining}>Novo Treinamento</DefaultButton>
	</header>
	<section>
		{#each $trainings as training (training.id)}
			<TrainingCard {training} on:remove={removeTraining} on:edit={editTraining} on:open={openTraining} />
		{/each}
	</section>
	<Offcanvas {...offcanvasData}>
		<TrainingForm bind:training={currentTraining} />
		<svelte:fragment slot="footer">
			{#if !isEditingTraining}
				<DefaultButton bgColor="var(--btn-primary-bg)" on:click={saveTraining}>Salvar</DefaultButton>
			{:else}
				<DefaultButton bgColor="var(--btn-primary-bg)" on:click={updateTraining}>Salvar</DefaultButton>
				<DefaultButton bgColor="var(--btn-secondary-bg)" on:click={disableTraining}>Desabilitar</DefaultButton>
			{/if}
		</svelte:fragment>
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
