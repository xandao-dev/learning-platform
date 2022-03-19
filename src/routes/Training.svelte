<script lang="ts">
	import { Router, Route, Link } from 'svelte-navigator';
	import type { NavigatorLocation, NavigateFn } from 'svelte-navigator';
	import type { IRoute } from '../routes/routes';
	import { currentRoute } from '../store/routing';
	import TrainingCard from '../lib/TrainingCard.svelte';
	import DefaultButton from '../lib/DefaultButton.svelte';
	import Offcanvas from '../lib/Offcanvas.svelte';
	import TrainingForm from '../lib/form-components/TrainingForm.svelte';

	export let trainingId: string;
	export let route: IRoute;
	// svelte-ignore unused-export-let
	export let location: NavigatorLocation;
	// svelte-ignore unused-export-let
	export let navigate: NavigateFn;

	currentRoute.set(route);
</script>

<svelte:head>
	<title>Treinamento - Learning Platform</title>
</svelte:head>
<div class="page">
	<header class="page-header">
		<h1 class="page-title">Seus Treinamentos</h1>
		<DefaultButton on:click={() => {}}>Novo Treinamento</DefaultButton>
		<Link to="{trainingId}#modules">Módulos</Link>
		<Link to="{trainingId}#classes">Aulas</Link>
	</header>
	<section>
		<Router>
			<Route path=":id" let:params>
				<h2>Módulos</h2>
				<h2>ID: {JSON.stringify(params)}</h2>
				<h2>ID3: {JSON.stringify(trainingId)}</h2>
				<!--Offcanvas {...offcanvasData}>
					<TrainingForm bind:training={currentTraining} />
					<svelte:fragment slot="footer">
						{#if !isEditingTraining}
							<DefaultButton bgColor="var(--btn-primary-bg)" on:click={saveTraining}>Salvar</DefaultButton
							>
						{:else}
							<DefaultButton bgColor="var(--btn-primary-bg)" on:click={updateTraining}
								>Salvar</DefaultButton
							>
							<DefaultButton bgColor="var(--btn-secondary-bg)" on:click={disableTraining}
								>Desabilitar</DefaultButton
							>
						{/if}
					</svelte:fragment>
				</Offcanvas-->
			</Route>
		</Router>
	</section>
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
