<script lang="ts">
	import type { ITrainingModule } from '../store/trainingModules';
	import TrainingModuleCard from './TrainingModuleCard.svelte';
	export let trainingModules: ITrainingModule[];
</script>

<div class="grid">
	{#each trainingModules as trainingModule (trainingModule.id)}
		<TrainingModuleCard {trainingModule} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		grid-gap: 1.875rem;
		width: 100%;
		height: auto;
		padding-top: 1.875rem;
	}
</style>
