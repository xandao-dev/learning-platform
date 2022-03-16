<script lang="ts">
	import { Link } from 'svelte-navigator';
	import { routes } from '../routes/routes';
</script>

<nav>
	<div>
		<i class="bi bi-list" />
	</div>
	<div>
		<ul>
			<li>
				<Link to={routes.home.path}>
					<i class={routes.home.icon} />
				</Link>
			</li>
			<li>
				<Link to={routes.trainings.path}>
					<i class="{routes.trainings.icon} active" />
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
