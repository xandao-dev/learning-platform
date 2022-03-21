<script lang="ts">
	import type { NavigatorLocation, NavigateFn } from 'svelte-navigator';
	import type { IRoute } from '../routes/routes';
	import { user } from '../store/user';
	import { currentRoute } from '../store/routing';
	import DefaultButton from '../lib/DefaultButton.svelte';
	import FormInput from '../lib/form-components/FormInput.svelte';
	import FormImagePicker from '../lib/form-components/FormImagePicker.svelte';

	export let route: IRoute;
	// svelte-ignore unused-export-let
	export let location: NavigatorLocation;
	// svelte-ignore unused-export-let
	export let navigate: NavigateFn;

	currentRoute.set(route);
	let name = $user.name;
	let avatar = $user.avatar;
	function setUser() {
		user.set({ name, avatar });
	}
</script>

<svelte:head>
	<title>Usuário - Learning Platform</title>
</svelte:head>
<div class="page">
	<header class="page-header">
		<h1 class="page-title">Configurações do Usuário</h1>
	</header>
	<section class="settings">
		<div class="user">
			<h1>{$user.name}</h1>
			<img class="avatar" src={$user.avatar} alt="avatar do usuário" />
		</div>
		<div class="user-form">
			<p>Alterar usuário</p>
			<form>
				<FormInput name="name" label="Name" margin="2rem 0 0 2rem" bind:value={name} />
				<FormImagePicker margin="2rem auto 0 auto" tabindex={0} bind:image={avatar} />
			</form>
			<DefaultButton on:click={setUser}>Salvar</DefaultButton>
		</div>
	</section>
</div>

<style>
	.page {
		margin: 1.875rem;
	}
	.page-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.page-title {
		font-size: 1.375rem;
		text-transform: uppercase;
		font-weight: 600;
		margin: 0;
		padding: 0;
	}
	.settings {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1.875rem;
	}
	.user {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.user h1 {
		font-size: 1.375rem;
		font-weight: 600;
		margin: 0;
		padding: 0;
	}
	.avatar {
		width: 3.75rem;
		height: 3.75rem;
		border-radius: 50%;
		margin-left: 2rem;
	}
	.user-form {
		display: flex;
		flex-direction: column;
		align-items: end;
		margin-top: 1.875rem;
		row-gap: 2rem;
		border: 1px solid var(--color-background-card-dark);
	}
	.user-form p {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0;
		padding: 0;
		align-self: flex-start;
	}
	.user-form form {
		display: flex;
		column-gap: 2rem;
	}
</style>
