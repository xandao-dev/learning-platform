<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ITraining } from '../store/trainings';
	export let training: ITraining;

	const dispatch = createEventDispatcher();
	function editTraining() {
		dispatch('edit');
	}
	function removeTraining() {
		dispatch('remove', {
			id: training.id,
		});
	}
	let trainingStatus = 'DESABILITADO';
	$: trainingStatus = training.enabled ? 'HABILITADO' : 'DESABILITADO';
</script>

<div class="card">
	<img class="logo" src={training.image} alt="Imagem com a logo do treinamento" />
	<div class="content">
		<h1>{training.name}</h1>
		<p>{training.description}</p>
	</div>
	<div class="pill" class:enabled={training.enabled}>{trainingStatus}</div>
	<div class="tools">
		<button class="h-empty-button close-button" on:click={editTraining}>
			<i class="bi bi-pencil-square edit-training" />
		</button>
		<button class="h-empty-button close-button" on:click={removeTraining}>
			<i class="bi bi-trash remove-training" />
		</button>
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: 10.625rem auto 7.5rem 0;
		grid-template-rows: auto auto;
		grid-template-areas:
			'logo content pill .'
			'logo content tools .';
		grid-column-gap: 1.25rem;
		width: 100%;
		height: 6.25rem;
		margin: 1.875rem 0;
		border-radius: 0.625rem;
		background-color: var(--color-background-card);
		box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.15);
	}
	.logo {
		grid-area: logo;
		width: 10.625rem;
		height: 6.25rem;
		border-radius: 0.625rem 0 0 0.625rem;
		object-fit: cover;
	}
	.content {
		grid-area: content;
		padding: 1rem 0 0 0;
	}
	.content > h1 {
		color: var(--color-text-black);
		font-weight: 600;
		font-size: 1.125rem;
		margin: 0;
	}
	.content > p {
		color: var(--color-text-dark);
		font-weight: 400;
		font-size: 1rem;
		width: 20rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0.3125rem 0 0 0;
	}
	.pill {
		grid-area: pill;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--btn-secondary-bg);
		color: var(--color-text-white);
		height: 1.5625rem;
		width: 7.5rem;
		border-radius: 1rem;
		margin-top: 1rem;
		font-size: 0.875rem;
		font-weight: 600;
	}
	.pill.enabled {
		background-color: var(--btn-primary-bg);
	}
	.tools {
		grid-area: tools;
		display: flex;
		justify-content: space-between;
	}
	.tools .edit-training {
		color: var(--color-icon-dark);
		font-size: 1.25rem;
	}
	.tools .remove-training {
		color: var(--color-icon-active);
		font-size: 1.25rem;
	}
</style>
