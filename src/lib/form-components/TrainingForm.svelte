<script lang="ts">
	import FormImagePicker from './FormImagePicker.svelte';
	import FormInput from './FormInput.svelte';
	import FormTextArea from './FormTextArea.svelte';
	import FormDatePicker from './FormDatePicker.svelte';
	import { getEmptyTraining, ITraining } from '../../store/trainings';

	export let training: ITraining = getEmptyTraining();
	let startDate = '';
	let endDate = '';
	$: {
		training.startDate = new Date(startDate).getTime();
		training.endDate = new Date(endDate).getTime();
	}
</script>

<form>
	<FormImagePicker margin="3.75rem auto 0 auto" tabindex={0} bind:image={training.image} />
	<FormInput name="name" label="Name" margin="3.125rem 0 0 0" bind:value={training.name} />
	<FormTextArea name="description" label="Descrição" margin="1.875rem 0 0 0" bind:value={training.description} />
	<FormInput
		name="workload"
		label="Carga horária"
		placeholder="20h"
		margin="1.875rem 0 0 0"
		bind:value={training.workload}
	/>
	<div class="date-pickers">
		<FormDatePicker name="startDate" label="Ativação do curso" bind:value={startDate} />
		<FormDatePicker name="endDate" label="Desativação do curso" bind:value={endDate} />
	</div>
</form>

<style>
	.date-pickers {
		display: flex;
		justify-content: space-between;
		margin: 1.875rem 0 0 0;
	}
</style>
