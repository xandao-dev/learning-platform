<script lang="ts">
	let user = {
		name: 'Alexandre Calil',
	};
</script>

<div class="profile">
	<div class="info">
		<h1 class="name">{user.name}</h1>
		<span class="action">Key Account</span>
	</div>
	<img
		class="avatar"
		src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
		alt="user profile"
	/>
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
		margin-right: 2rem;
	}
</style>
