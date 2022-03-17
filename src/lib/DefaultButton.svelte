<script lang="ts">
	export let width = '15.625rem';
	export let height = '2.1875rem';
	export let color = 'var(--color-text-white)';
	export let bgColor = 'var(--color-primary)';

	let button: HTMLButtonElement;
	let ripples = [];
	function createRipple(e: { clientX: number; clientY: number }) {
		const rippleEl = button.querySelector(`[button-ripple-effect]`);
		if (rippleEl) button.removeChild(rippleEl);

		const btnRect = button.getBoundingClientRect();
		const diameter = Math.max(btnRect.width, btnRect.height);
		const radius = diameter / 2;

		const left = e.clientX - (btnRect.left + radius);
		const top = e.clientY - (btnRect.top + radius);
		const id = ripples.length + 1;

		const newRipple = { id, diameter, left, top };
		ripples = [...ripples, newRipple];
	}
</script>

<button
	style="width: {width}; height: {height}; color: {color}; background-color: {bgColor};"
	bind:this={button}
	on:click
	on:click={createRipple}
>
	<slot>ok</slot>
	{#each ripples as { diameter, left, top }}
		<div button-ripple-effect style="width: {diameter}px; height: {diameter}px; left: {left}px; top: {top}px;" />
	{/each}
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
	}
	div[button-ripple-effect] {
		position: absolute;
		pointer-events: none;
		border-radius: 50%;
		transform: scale(0.5);
		animation: ripple 600ms linear forwards;
		background-color: rgba(255, 255, 255, 0.5);
		opacity: 1;
	}
	@keyframes ripple {
		to {
			transform: scale(3);
			opacity: 0;
		}
	}
</style>
