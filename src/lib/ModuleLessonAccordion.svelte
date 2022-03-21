<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { getEmptyTrainingModule, ITrainingModule } from '../store/trainingModules';
	import { IModuleLesson, moduleLessons } from '../store/moduleLessons';

	export let trainingModule: ITrainingModule = getEmptyTrainingModule();
	export let margin: string = '0';

	const dispatch = createEventDispatcher();
	let currentLessons: IModuleLesson[] = [];
	let moduleStatus = 'DESABILITADO';
	let isModuleOpen = false;

	function editLesson(lessonId: string) {
		dispatch('edit', {
			id: lessonId,
		});
	}
	function removeLesson(lessonId: string) {
		dispatch('remove', {
			id: lessonId,
		});
	}
	function toggleModule() {
		isModuleOpen = !isModuleOpen;
	}

	$: moduleStatus = trainingModule.enabled ? 'HABILITADO' : 'DESABILITADO';
	$: {
		$moduleLessons;
		currentLessons = moduleLessons.getAllFromModule(trainingModule.id);
	}
</script>

<div class="accordion" style="margin: {margin};" on:click={toggleModule}>
	<div class="accordion-header">
		<h1 class="title">{trainingModule.name}</h1>
		{#if !trainingModule.enabled}
			<div class="pill" class:enabled={trainingModule.enabled}>{moduleStatus}</div>
		{/if}
		{#if isModuleOpen}
			<i class="bi bi-chevron-double-up" />
		{:else}
			<i class="bi bi-chevron-double-down" />
		{/if}
	</div>
	{#if isModuleOpen}
		<ol on:click|stopPropagation>
			{#each currentLessons as lesson (lesson.id)}
				<li class="lesson">
					<i class="bi bi-book lesson-icon" />
					<h2 class="lesson-title">{lesson.name}</h2>
					<button class="h-empty-button edit-training" on:click|stopPropagation={() => editLesson(lesson.id)}>
						<i class="bi bi-pencil-square" />
					</button>
					<button
						class="h-empty-button remove-training"
						on:click|stopPropagation={() => removeLesson(lesson.id)}
					>
						<i class="bi bi-trash" />
					</button>
				</li>
			{/each}
		</ol>
	{/if}
</div>

<style>
	.accordion {
		width: 100%;
	}
	.accordion-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.625rem;
		background-color: var(--color-background-card);
		padding: 0 1.25rem;
		width: 100%;
		height: 3.125rem;
		cursor: pointer;
		box-sizing: border-box;
	}

	.title {
		color: var(--color-text-black);
		font-weight: 600;
		font-size: 1.125rem;
		margin: 0;
	}
	.pill {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--btn-secondary-bg);
		color: var(--color-text-white);
		height: 1.5625rem;
		width: 7.5rem;
		margin: 0 auto 0 1.25rem;
		border-radius: 1rem;
		font-size: 0.875rem;
		font-weight: 600;
	}
	.pill.enabled {
		background-color: var(--btn-primary-bg);
	}

	ol {
		margin: 0;
		padding: 0;
	}

	.lesson {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1.25rem 0 1.75rem;
		width: 100%;
		height: 2.6rem;
		box-sizing: border-box;
	}
	.lesson:nth-child(even) {
		background-color: var(--color-table-primary);
	}
	.lesson:nth-child(odd) {
		background-color: var(--color-table-secondary);
	}
	.lesson-icon {
		color: var(--color-text-dark);
		font-size: 1.25rem;
	}
	.lesson-title {
		color: var(--color-text-black);
		font-weight: 400;
		font-size: 1.125rem;
		margin: 0 auto 0 1.25rem;
	}
	.edit-training {
		height: min-content;
		width: min-content;
		align-self: center;
		justify-self: flex-end;
		margin: 0 1.5rem 0 0;
	}
	.edit-training i {
		margin: 1rem 0 0 0;
		color: var(--color-icon-dark);
		font-size: 1.25rem;
	}
	.remove-training {
		height: min-content;
		width: min-content;
		align-self: center;
		justify-self: flex-end;
	}
	.remove-training i {
		color: var(--color-icon-active);
		font-size: 1.25rem;
	}
</style>
