<script lang="ts">
	import FormInput from './FormInput.svelte';
	import FormTextArea from './FormTextArea.svelte';
	import { getEmptyModuleLesson, IModuleLesson } from '../../store/moduleLessons';
	import type { ITrainingModule } from '../../store/trainingModules';
	import FormSelect from './FormSelect.svelte';

	interface IOption {
		id: string;
		name: string;
	}

	export let moduleLesson: IModuleLesson = getEmptyModuleLesson();
	export let trainingModules: ITrainingModule[] = [];

	function getModulesOptions(): IOption[] {
		return trainingModules.map((trainingModule) => {
			return {
				id: trainingModule.id,
				name: trainingModule.name,
			};
		});
	}
	let trainingModulesOptions = getModulesOptions();
	$: trainingModulesOptions = getModulesOptions();
</script>

<form>
	<FormSelect
		bind:value={moduleLesson.moduleId}
		options={trainingModulesOptions}
		label="Módulo"
		name="moduleId"
		margin="3.125rem 0 0 0"
	/>
	<FormInput name="name" label="Nome" margin="1.875rem 0 0 0" bind:value={moduleLesson.name} />
	<FormTextArea name="content" label="Conteúdo" margin="1.875rem 0 0 0" bind:value={moduleLesson.content} />
</form>
