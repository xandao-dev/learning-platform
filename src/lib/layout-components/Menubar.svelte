<script lang="ts">
	import ProfileMenu from '../ProfileMenu.svelte';
</script>

<div class="menubar">
	<div />
	<div />
	<div>
		<ProfileMenu />
	</div>
</div>

<style>
	.menubar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-secondary-light);
		height: 4.5rem;
	}
</style>
