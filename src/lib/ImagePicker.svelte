<script lang="ts">
	let files: FileList;

	$: if (files) {
		console.log(files);
		for (const file of files) {
			console.log(`${file.name}: ${file.size} bytes`);
		}
	}
</script>

<label class="image-upload">
	<input accept="image/png, image/jpeg" bind:files id="avatar" name="avatar" type="file" />
	<i class="bi bi-camera" />
	Selecione uma imagem
</label>

{#if files}
	<h2>Selected files:</h2>
	{#each Array.from(files) as file}
		<p>{file.name} ({file.size} bytes)</p>
	{/each}
{/if}

<style>
	.image-upload {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		box-sizing: border-box;
		border-radius: 0.625rem;
		border: 1px dashed var(--color-icon-gray);
		width: 10.625rem;
		height: 6.25rem;
		margin: 0 auto;
		background-color: var(--color-icon-white);
		color: var(--color-icon-gray);
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
		font-size: 0.75rem;
		cursor: pointer;
	}
	.image-upload > i {
		font-size: 2rem;
		color: var(--color-icon-gray);
	}
	input[type='file'] {
		display: none;
	}
</style>
