<script lang="ts">
	import { getEmptyTrainingModule, ITrainingModule } from '../store/trainingModules';
	import Offcanvas from './Offcanvas.svelte';
	import ModuleLessonAccordion from './ModuleLessonAccordion.svelte';
	import TrainingModuleForm from './form-components/TrainingModuleForm.svelte';
	import DefaultButton from './DefaultButton.svelte';
	import { trainingModules as trainingModulesStore } from '../store/trainingModules';
	import { routes } from '../routes/routes';
	import { useNavigate } from 'svelte-navigator';
	import { v4 as uuidv4 } from 'uuid';

	export let trainingId: string;
	export let trainingModules: ITrainingModule[];
	export function newModule() {
		offcanvasData.title = 'Novo treinamento';
		offcanvasData.help = 'Adicione um novo treinamento ou curso';
		currentModule = getEmptyTrainingModule();
		isEditingModule = false;
		offcanvasData.open = true;
	}

	const navigate = useNavigate();
	let offcanvasData = {
		title: '',
		help: '',
		open: false,
	};
	let isEditingModule = false;
	let currentModule = getEmptyTrainingModule();

	function editModule(e: { detail: { id: string } }) {
		offcanvasData.title = 'Editar treinamento';
		offcanvasData.help = 'Edite o treinamento ou curso';
		currentModule = trainingModulesStore.getById(e.detail.id);
		isEditingModule = true;
		offcanvasData.open = true;
	}
	function removeModule(e: { detail: { id: string } }) {
		trainingModulesStore.remove(e.detail.id);
	}
	function openModule() {
		const path = routes.training.path.replace('*trainingId', trainingId);
		const hash = '#lessons';
		navigate(`${path}${hash}`);
	}

	function saveModule() {
		offcanvasData.open = false;
		currentModule.id = uuidv4();
		currentModule.trainingId = trainingId;
		currentModule.enabled = true;
		trainingModulesStore.create(currentModule);
	}
	function updateModule() {
		offcanvasData.open = false;
		trainingModulesStore.edit(currentModule);
	}
	function disableModule() {
		offcanvasData.open = false;
		currentModule.enabled = false;
		trainingModulesStore.edit(currentModule);
	}
</script>

<div class="block">
	{#each trainingModules as trainingModule (trainingModule.id)}
		<ModuleLessonAccordion
			{trainingModule}
			margin="0 0 0.625rem 0"
			on:remove={removeModule}
			on:edit={editModule}
			on:open={openModule}
		/>
	{/each}
</div>
<Offcanvas {...offcanvasData}>
	<TrainingModuleForm bind:trainingModule={currentModule} />
	<svelte:fragment slot="footer">
		{#if !isEditingModule}
			<DefaultButton bgColor="var(--btn-primary-bg)" on:click={saveModule}>Salvar</DefaultButton>
		{:else}
			<DefaultButton bgColor="var(--btn-primary-bg)" on:click={updateModule}>Salvar</DefaultButton>
			<DefaultButton bgColor="var(--btn-secondary-bg)" on:click={disableModule}>Desabilitar</DefaultButton>
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
