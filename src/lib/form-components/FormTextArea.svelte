<script lang="ts">
	export let name: string = 'name';
	export let label: string = 'Nome';
	export let value: string = '';
	export let placeholder: string = '';
	export let margin: string = '0';
</script>

<div style="margin: {margin}">
	<label for={name}>{label}</label>
	<textarea type="text" {name} {placeholder} bind:value maxlength="350" />
</div>

<style>
	label {
		display: block;
		margin-bottom: 0.3125rem;
		color: var(--color-text-black);
		font-size: 1.125rem;
	}
	textarea {
		display: block;
		width: 100%;
		height: 12.5rem;
		padding: 1rem;
		box-sizing: border-box;
		border: none;
		border-radius: 0.3125rem;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.375rem;
		color: var(--color-text-dark);
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
		transition: all 0.5s;
		cursor: text;
		resize: none;
	}
	textarea:focus,
	textarea:active {
		border: 1px solid var(--color-primary);
	}
</style>
