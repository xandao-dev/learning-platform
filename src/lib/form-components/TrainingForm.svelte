<script lang="ts">
	import FormImagePicker from './FormImagePicker.svelte';
	import FormInput from './FormInput.svelte';
	import FormTextArea from './FormTextArea.svelte';
	import FormDatePicker from './FormDatePicker.svelte';
</script>

<form>
	<FormImagePicker margin="3.75rem auto 0 auto" tabindex={0} />
	<FormInput name="name" label="Name" margin="3.125rem 0 0 0" />
	<FormTextArea name="description" label="Descrição" margin="1.875rem 0 0 0" />
	<FormInput name="workload" label="Carga horária" placeholder="20h" margin="1.875rem 0 0 0" />
	<div class="date-pickers">
		<FormDatePicker name="startDate" label="Ativação do curso" />
		<FormDatePicker name="endDate" label="Desativação do curso" />
	</div>
</form>

<style>
	.date-pickers {
		display: flex;
		justify-content: space-between;
		margin: 1.875rem 0 0 0;
	}
</style>
