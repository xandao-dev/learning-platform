<script lang="ts">
	export let image: string = '';
	export let margin: string = '0 auto';
	export let tabindex: number | undefined = undefined;
	const onFileSelected = (e: any) => {
		let img = e.target.files[0];

		const oneMegaByte = 1048576;
		const maxSizeMB = 5;
		if (img.size > maxSizeMB * oneMegaByte) {
			alert(`Imagem muito grande, o máximo é ${maxSizeMB}MB!`);
			return;
		}

		let reader = new FileReader();
		reader.readAsDataURL(img);
		reader.onload = (e) => {
			image = e.target.result as string;
		};
	};
</script>

<label class="image-upload" class:clean={image} style="margin: {margin}" {tabindex}>
	<input type="file" accept=".jpg, .jpeg, .png" on:change={(e) => onFileSelected(e)} />
	{#if !image}
		<i class="bi bi-camera" />
		Selecione uma imagem
	{:else}
		<img class="preview" src={image} alt="Previsão da imagem selecionada pelo usuário" />
	{/if}
</label>

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
		background-color: var(--color-text-white);
		color: var(--color-icon-gray);
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
		font-size: 0.75rem;
		cursor: pointer;
	}
	.image-upload:focus,
	.image-upload:active {
		outline: 1px dashed var(--color-primary);
	}
	.clean {
		outline: none;
		background-color: transparent;
		color: transparent;
	}
	.image-upload > i {
		font-size: 2rem;
		color: var(--color-icon-gray);
	}
	.image-upload > input {
		display: none;
	}
	.image-upload > img {
		width: 100%;
		height: 100%;
		border-radius: 0.625rem;
		object-fit: cover;
	}
</style>
