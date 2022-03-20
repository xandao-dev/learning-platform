<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ITrainingModule } from '../store/trainingModules';
	import { moduleLessons } from '../store/moduleLessons';
	export let trainingModule: ITrainingModule;

	const dispatch = createEventDispatcher();
	function editModule() {
		dispatch('edit', {
			id: trainingModule.id,
		});
	}
	function removeModule() {
		dispatch('remove', {
			id: trainingModule.id,
		});
	}
	function openModule() {
		dispatch('open', {
			id: trainingModule.id,
		});
	}
	let numberOfLessons = moduleLessons.getAllFromModule(trainingModule.id).length;
	let moduleStatus = 'DESABILITADO';
	$: moduleStatus = trainingModule.enabled ? 'HABILITADO' : 'DESABILITADO';
</script>

<div class="card" on:click={openModule}>
	<img class="logo" src={trainingModule.image} alt="Imagem com a logo do treinamento" />
	<h1 class="title">{trainingModule.name}</h1>
	<p class="description">{trainingModule.description}</p>
	<p class="lessons"><b>Aulas:</b>{numberOfLessons}</p>
	<div class="pill" class:enabled={trainingModule.enabled}>{moduleStatus}</div>
	<button class="h-empty-button edit-training" on:click={editModule}>
		<i class="bi bi-pencil-square" />
	</button>
	<button class="h-empty-button remove-training" on:click={removeModule}>
		<i class="bi bi-trash" />
	</button>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: auto auto auto;
		grid-template-rows: repeat(4, min-content) auto;
		grid-template-areas:
			'logo logo logo'
			'title title edit-training'
			'description description description'
			'lessons lessons lessons'
			'pill pill remove-training';
		column-gap: 1.25rem;
		width: 18.25rem;
		height: 18.25rem;
		border-radius: 0.625rem;
		background-color: var(--color-background-card);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
		cursor: pointer;
		padding: 1rem;
		box-sizing: border-box;
	}
	.logo {
		grid-area: logo;
		width: calc(100% + 2rem);
		height: 6.25rem;
		border-radius: 0.625rem 0.625rem 0 0;
		object-fit: cover;
		margin: -1rem -1rem 0 -1rem;
	}
	.title {
		grid-area: title;
		color: var(--color-text-black);
		font-weight: 600;
		font-size: 1.125rem;
		align-self: baseline;
		margin: 1rem 0 0 0;
	}
	.description {
		grid-area: description;
		color: var(--color-text-dark);
		font-weight: 400;
		font-size: 1rem;
		max-width: 100%;
		max-height: 4rem;
		line-height: 1rem;
		overflow: hidden;
		white-space: normal;
		text-overflow: ellipsis;
		margin: 0.3125rem 0 0 0;
	}
	.lessons {
		grid-area: lessons;
		color: var(--color-text-dark);
		font-weight: 400;
		font-size: 1rem;
		margin: 0.3125rem 0 0 0;
	}
	.lessons b {
		color: var(--color-text-black);
		font-weight: 600;
		margin-right: 0.25rem;
	}
	.pill {
		grid-area: pill;
		align-self: end;
		justify-self: start;
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
	}
	.pill.enabled {
		background-color: var(--btn-primary-bg);
	}
	.edit-training {
		grid-area: edit-training;
		height: min-content;
		width: min-content;
		align-self: flex-end;
		justify-self: flex-end;
	}
	.edit-training i {
		margin: 1rem 0 0 0;
		color: var(--color-icon-dark);
		font-size: 1.25rem;
	}
	.remove-training {
		grid-area: remove-training;
		height: min-content;
		width: min-content;
		align-self: flex-end;
		justify-self: flex-end;
	}
	.remove-training i {
		color: var(--color-icon-active);
		font-size: 1.25rem;
	}
</style>
