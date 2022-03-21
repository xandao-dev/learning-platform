<script lang="ts">
	import { routes } from '../routes/routes';
	import { Link } from 'svelte-navigator';
	import { user } from '../store/user';
</script>

<div class="profile">
	<div class="info">
		<h1 class="name">{$user.name}</h1>
		<Link to={routes.userSettings.path}>
			<span class="action">Key Account</span>
		</Link>
	</div>
	<img class="avatar" src={$user.avatar} alt="avatar do usuário" />
</div>

<style>
	.profile {
		display: flex;
		align-items: center;
	}
	.info {
		margin-right: 1rem;
		text-align: end;
	}
	.name {
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.375rem;
		margin: 0;
		color: var(--color-text-white);
	}
	.action {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-white);
	}
	.avatar {
		width: 3.75rem;
		height: 3.75rem;
		border-radius: 50%;
		margin-right: 1.875rem;
	}
</style>
