<script lang="ts">
	import type { ITrainingModule } from '../store/trainingModules';
	import Offcanvas from './Offcanvas.svelte';
	import ModuleLessonAccordion from './ModuleLessonAccordion.svelte';
	import ModuleLessonForm from './form-components/ModuleLessonForm.svelte';
	import DefaultButton from './DefaultButton.svelte';
	import { trainingModules as trainingModulesStore } from '../store/trainingModules';
	import { IModuleLesson, moduleLessons as moduleLessonsStore } from '../store/moduleLessons';
	import { v4 as uuidv4 } from 'uuid';
	import { getEmptyModuleLesson } from '../store/moduleLessons';

	export let trainingModules: ITrainingModule[];
	export function newLesson() {
		offcanvasData.title = 'Novo treinamento';
		offcanvasData.help = 'Adicione um novo treinamento ou curso';
		currentLesson = getEmptyModuleLesson();
		isEditingLesson = false;
		offcanvasData.open = true;
	}

	let offcanvasData = {
		title: '',
		help: '',
		open: false,
	};
	let isEditingLesson = false;
	let currentLesson: IModuleLesson = getEmptyModuleLesson();
	function editLesson(e: { detail: { id: string } }) {
		offcanvasData.title = 'Editar treinamento';
		offcanvasData.help = 'Edite o treinamento ou curso';
		currentLesson = moduleLessonsStore.getById(e.detail.id);
		isEditingLesson = true;
		offcanvasData.open = true;
	}
	function removeLesson(e: { detail: { id: string } }) {
		moduleLessonsStore.remove(e.detail.id);
	}

	function offcanvasSaveLesson() {
		offcanvasData.open = false;
		currentLesson.id = uuidv4();
		moduleLessonsStore.create(currentLesson);
	}
	function offcanvasUpdateLesson() {
		offcanvasData.open = false;
		moduleLessonsStore.edit(currentLesson);
	}
	function offcanvasRemoveLesson() {
		offcanvasData.open = false;
		moduleLessonsStore.remove(currentLesson.id);
	}
</script>

<div class="block">
	{#each trainingModules as trainingModule (trainingModule.id)}
		<ModuleLessonAccordion {trainingModule} margin="0 0 0.625rem 0" on:remove={removeLesson} on:edit={editLesson} />
	{/each}
</div>
<Offcanvas {...offcanvasData}>
	<ModuleLessonForm bind:moduleLesson={currentLesson} {trainingModules} />
	<svelte:fragment slot="footer">
		{#if !isEditingLesson}
			<DefaultButton bgColor="var(--btn-primary-bg)" on:click={offcanvasSaveLesson}>Salvar</DefaultButton>
		{:else}
			<DefaultButton bgColor="var(--btn-primary-bg)" on:click={offcanvasUpdateLesson}>Salvar</DefaultButton>
			<DefaultButton bgColor="var(--btn-secondary-bg)" on:click={offcanvasRemoveLesson}>Deletar</DefaultButton>
		{/if}
	</svelte:fragment>
</Offcanvas>

<style>
	.block {
		display: block;
		gap: 1.875rem;
		width: 100%;
		height: auto;
		padding-top: 1.875rem;
	}
</style>
