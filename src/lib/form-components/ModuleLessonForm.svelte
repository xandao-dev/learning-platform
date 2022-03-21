<script lang="ts">
	import FormInput from './FormInput.svelte';
	import FormTextArea from './FormTextArea.svelte';
	import { getEmptyModuleLesson, IModuleLesson } from '../../store/moduleLessons';

	export let moduleLesson: IModuleLesson = getEmptyModuleLesson();
</script>

<form>
	<FormInput name="name" label="Nome" margin="3.125rem 0 0 0" bind:value={moduleLesson.name} />
	<FormTextArea name="content" label="Conteúdo" margin="1.875rem 0 0 0" bind:value={moduleLesson.content} />
</form>
