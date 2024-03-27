<script lang="ts">
	import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
	import '@fortawesome/fontawesome-free/scss/brands.scss';
	import '@fortawesome/fontawesome-free/scss/regular.scss';
	import '@fortawesome/fontawesome-free/scss/solid.scss';

	import 'bootstrap-icons/font/bootstrap-icons.scss';

	import 'bootstrap/dist/css/bootstrap.css';

	import { onMount } from 'svelte';

	// import bootstrap.js client side
	onMount(async () => await import('bootstrap/dist/js/bootstrap'));
</script>

<div class="page">
	<header class="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
		<nav class="container-fluid flex-wrap flex-lg-nowrap">
			<a class="navbar-brand" href="/">__Template__</a>
			<button
				class="navbar-toggler hidden-md"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasDarkNavbar"
				aria-controls="offcanvasDarkNavbar"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
		</nav>
	</header>
	<div class="side-menu-layout">
		<aside class="side-menu">
			<div
				class="offcanvas-lg offcanvas-start text-bg-dark"
				tabindex="-1"
				id="offcanvasDarkNavbar"
				aria-labelledby="offcanvasDarkNavbarLabel"
			>
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">__Template__</h5>
					<button
						type="button"
						class="btn-close btn-close-white"
						data-bs-dismiss="offcanvas"
						data-bs-target="#offcanvasDarkNavbar"
						aria-label="Close"
					></button>
				</div>
				<div class="offcanvas-body">
					<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="/">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<ul class="dropdown-menu dropdown-menu-dark">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li>
									<hr class="dropdown-divider" />
								</li>
								<li><a class="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
					</ul>
					<form class="d-flex mt-3" role="search">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-success" type="submit">
							<i class="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</div>
			</div>
		</aside>
		<div class="container-fluid page-content">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.page {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
	}

	.page-content {
		overflow: auto;
	}

	.side-menu-layout {
		flex: 1;
		display: grid;
		grid-template-areas: 'sidebar main';
		grid-template-columns: 0fr 1fr;
	}

	.side-menu {
		z-index: 9999;
		position: sticky;
		top: 5rem;
		display: flex;
		height: 100%;
		overflow-y: auto;
	}

	@media (min-width: 992px) {
		.side-menu-layout {
			display: grid;
			grid-template-areas: 'sidebar main';
			grid-template-columns: auto 1fr;

			.offcanvas-lg {
				padding: 1rem 0.5rem;
			}

			.offcanvas-body {
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
