<script lang="ts">
	import FormImagePicker from './FormImagePicker.svelte';
	import FormInput from './FormInput.svelte';
	import FormTextArea from './FormTextArea.svelte';
	import { getEmptyTrainingModule, ITrainingModule } from '../../store/trainingModules';

	export let trainingModule: ITrainingModule = getEmptyTrainingModule();
</script>

<form>
	<FormImagePicker margin="3.75rem auto 0 auto" tabindex={0} bind:image={trainingModule.image} />
	<FormInput name="name" label="Nome" margin="3.125rem 0 0 0" bind:value={trainingModule.name} />
	<FormTextArea
		name="description"
		label="Descrição"
		margin="1.875rem 0 0 0"
		bind:value={trainingModule.description}
	/>
</form>
