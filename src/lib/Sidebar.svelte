<script lang="ts">
	import { Link } from 'svelte-navigator';
</script>

<nav>
	<div>
		<i class="bi bi-list" />
	</div>
	<div>
		<ul>
			<li>
				<Link to="/">
					<i class="bi bi-house" />
				</Link>
			</li>
			<li>
				<Link to="trainings">
					<i class="bi bi-book active" />
				</Link>
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		width: 6.25rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-secondary);
	}
	i {
		font-size: 1.5rem;
		color: var(--color-icon-white);
	}
	.active {
		color: var(--color-icon-active);
	}
</style>
