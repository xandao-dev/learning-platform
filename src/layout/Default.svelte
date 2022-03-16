<script lang="ts">
</script>

<div class="layout-grid">
	<div class="menubar">
		<slot name="menubar" />
	</div>
	<div class="breadcrumb">
		<slot name="breadcrumb" />
	</div>
	<div class="sidebar">
		<slot name="sidebar" />
	</div>
	<div class="main">
		<slot name="main" />
	</div>
</div>

<style>
	.layout-grid {
		display: grid;
		grid-template-columns: auto 1fr 1fr;
		grid-template-rows: auto auto 1fr;
		grid-template-areas:
			'sidebar menubar menubar'
			'sidebar breadcrumb breadcrumb'
			'sidebar main main';
		width: 100vw;
		height: 100vh;
	}
	.menubar {
		grid-area: menubar;
	}
	.breadcrumb {
		grid-area: breadcrumb;
	}
	.sidebar {
		grid-area: sidebar;
	}
	.main {
		grid-area: main;
		/* #FIXME move 70px to store */
		height: calc(100vh - 70px);
		overflow-y: auto;
	}
</style>
