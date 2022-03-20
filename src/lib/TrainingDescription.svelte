<script lang="ts">
	import type { ITraining } from '../store/trainings';
	export let training: ITraining;

	let trainingStatus = 'DESABILITADO';
	$: trainingStatus = training.enabled ? 'HABILITADO' : 'DESABILITADO';
</script>

<div class="card">
	<img class="logo" src={training.image} alt="Imagem com a logo do treinamento" />
	<h1 class="title">{training.name}</h1>
	<p class="description">{training.description}</p>
	<div class="pill" class:enabled={training.enabled}>{trainingStatus}</div>
	<p class="workload"><b>Duração:</b>{training.workload}</p>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto auto auto;
		grid-template-areas:
			'logo logo'
			'title pill'
			'description description'
			'workload .';
		margin-top: 1.875rem;
	}
	.logo {
		grid-area: logo;
		width: 20rem;
		height: 9.375rem;
		border-radius: 0.625rem;
		object-fit: cover;
	}
	.title {
		grid-area: title;
		color: var(--color-text-black);
		font-weight: 600;
		font-size: 1.375rem;
		margin: 1.875rem 0 0 0;
	}
	.description {
		grid-area: description;
		color: var(--color-text-dark);
		font-weight: 400;
		font-size: 1rem;
		max-width: 20rem;
		overflow: hidden;
		white-space: normal;
		text-overflow: ellipsis;
		margin: 1.875rem 0 0 0;
	}
	.pill {
		grid-area: pill;
		align-self: center;
		justify-self: end;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--btn-secondary-bg);
		color: var(--color-text-white);
		height: 1.5625rem;
		width: 7.5rem;
		border-radius: 1rem;
		font-size: 0.875rem;
		font-weight: 600;
		margin: 1.875rem 0 0 0;
	}
	.pill.enabled {
		background-color: var(--btn-primary-bg);
	}
	.workload {
		grid-area: workload;
		color: var(--color-text-dark);
		font-weight: 400;
		font-size: 1rem;
		margin: 0.935rem 0 0 0;
	}
	.workload b {
		color: var(--color-text-black);
		font-weight: 600;
		margin-right: 0.25rem;
	}
</style>
