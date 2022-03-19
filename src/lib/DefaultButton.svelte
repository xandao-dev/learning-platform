<script lang="ts">
	export let width = '15.625rem';
	export let height = '2.1875rem';
	export let color = 'var(--color-text-white)';
	export let bgColor = 'var(--color-primary)';
</script>

<button style="width: {width}; height: {height}; color: {color}; background-color: {bgColor};" on:click>
	<slot>ok</slot>
</button>

<style>
	button {
		position: relative;
		border-radius: 0.3125rem;
		border: none;
		text-align: center;
		overflow: hidden;
		cursor: pointer;
		font: inherit;
		outline: none;
		font-size: 1.125rem;
		font-weight: 400;
		text-transform: uppercase;
		user-select: none;
	}
	button:hover {
		filter: brightness(0.9);
	}
</style>
