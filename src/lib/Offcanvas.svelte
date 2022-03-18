<script lang="ts">
	import DefaultButton from './DefaultButton.svelte';

	export let title: string = '';
	export let help: string = '';
	export let open: boolean = false;

	function closeOffcanvas() {
		open = false;
	}
</script>

<div class="overlay" class:show={open} on:click|self={closeOffcanvas}>
	<div class="offcanvas">
		<header>
			<button class="h-empty-button close-button" on:click={closeOffcanvas}>
				<i class="bi bi-x" />
			</button>

			<h1 class="title">{title}</h1>
			<div class="help">
				<i class="bi bi-question-circle" />
				<div class="tooltip">{help}</div>
			</div>
		</header>
		<section class="content">
			<slot />
		</section>
		<footer>
			<slot>
				<DefaultButton bgColor="var(--btn-secondary-bg)" on:click={closeOffcanvas}>Cancelar</DefaultButton>
			</slot>
		</footer>
	</div>
</div>

<style>
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: var(--color-background-overlay);
		z-index: 10;
		display: none;
	}
	.show {
		display: block;
	}
	.offcanvas {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		top: 0;
		right: 0;
		width: 36.25rem;
		padding: 1.875rem;
		height: 100%;
		box-sizing: border-box;
		background-color: var(--color-background-offcanvas);
		z-index: 20;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header .close-button > i {
		font-size: 2rem;
		color: var(--color-icon-gray);
	}
	header .title {
		font-size: 1.375rem;
		text-transform: uppercase;
		font-weight: 600;
		margin: 0;
	}
	header .help {
		position: relative;
	}
	header .help > i {
		font-size: 1.25rem;
		color: var(--color-icon-gray);
	}
	header .help > .tooltip {
		position: absolute;
		visibility: hidden;
		background-color: #333a;
		pointer-events: none;
		box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
		max-width: 16rem;
		width: max-content;
		min-width: 5rem;
		border-radius: 0.625rem;
		padding: 1rem;
		font-size: 1rem;
		font-weight: 300;
		color: var(--color-text-white);
		overflow: hidden;
		opacity: 0;
		transition: all 0.2s ease-in-out;
		transition-property: opacity, visibility;
		z-index: 30;
		top: inherit;
		right: 0;
	}
	header .help:hover > .tooltip {
		opacity: 1;
		visibility: visible;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row-reverse;
	}
</style>
