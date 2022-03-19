<script lang="ts">
	export let name: string = 'name';
	export let label: string = 'Nome';
	export let value: string = '2017-06-01T08:30';
	export let margin: string = '0';
</script>

<div style="margin: {margin}">
	<label for={name}>{label}</label>
	<input type="datetime-local" {name} {value} step="60" />
</div>

<style>
	label {
		display: block;
		margin-bottom: 0.3125rem;
		color: var(--color-text-black);
		font-size: 1.125rem;
	}
	input {
		display: block;
		width: 100%;
		height: 2.5rem;
		min-width: 14rem;
		padding: 0 0.5rem;
		box-sizing: border-box;
		border: none;
		border-radius: 0.3125rem;
		font-size: 0.75rem;
		font-weight: 400;
		color: var(--color-text-black);
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
		transition: all 0.5s;
		cursor: text;
	}
	input:focus,
	input:active {
		border: 1px solid var(--color-primary);
	}
</style>
