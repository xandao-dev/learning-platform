<script lang="ts">
	import { Link } from 'svelte-navigator';

	interface ITab {
		name: string;
		path: string;
		hash: string;
	}

	export let tabs: ITab[];
	export let current: ITab;
</script>

<nav>
	<div class="links">
		{#each tabs as tab (tab.path)}
			<div class="link" on:click={() => (current = tab)}>
				<Link to={tab.path}>
					<span class="link-text" class:selected={tab.path === current?.path}>{tab.name}</span>
				</Link>
			</div>
		{/each}
	</div>
	<div class="bar" />
</nav>

<style>
	.links {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.link:first-child .link-text {
		border-radius: 0.625rem 0 0 0;
	}
	.link:last-child .link-text {
		border-radius: 0 0.625rem 0 0;
	}
	.link:not(:last-child) .link-text {
		border-right: solid 0.125rem var(--color-background-card-dark);
	}
	.link-text {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-background-dark);
		width: 12.5rem;
		height: 2.5rem;
		color: var(--color-text-dark);
		font-size: 1.125rem;
		font-weight: 600;
	}
	.link-text.selected {
		background-color: var(--color-primary);
		color: var(--color-text-white);
	}
	.bar {
		background-color: var(--color-primary);
		width: 100%;
		height: 0.125rem;
	}
</style>
