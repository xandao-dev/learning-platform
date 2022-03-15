<script lang="ts">
	import { Link } from 'svelte-navigator';
</script>

<nav>
	<div>
		<i class="bi bi-list" />
	</div>
	<div>
		<ul>
			<Link to="/">
				<i class="bi bi-house" />
			</Link>
			<Link to="trainings">
				<i class="bi bi-book" />
			</Link>
		</ul>
	</div>
</nav>

<style></style>
