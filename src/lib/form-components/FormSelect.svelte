<script lang="ts">
	interface IOption {
		id: string;
		name: string;
	}

	export let name: string = 'name';
	export let label: string = 'Nome';
	export let value: string = '';
	export let options: IOption[] = [];
	export let margin: string = '0';

	$: if (!value) {
		value = options[0].id;
	}
</script>

<div style="margin: {margin}">
	<label for={name}>{label}</label>
	<select {name} bind:value>
		{#each options as item}
			<option value={item.id}>{item.name}</option>
		{/each}
	</select>
</div>

<style>
	label {
		display: block;
		margin-bottom: 0.3125rem;
		color: var(--color-text-black);
		font-size: 1.125rem;
	}
	select {
		display: block;
		width: 100%;
		height: 2.5rem;
		padding: 0 1rem;
		box-sizing: border-box;
		border: none;
		border-radius: 0.3125rem;
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-text-black);
		background-color: var(--color-text-white);
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
		transition: all 0.5s;
		cursor: text;
	}
	select:focus,
	select:active {
		border: 1px solid var(--color-primary);
	}
</style>
