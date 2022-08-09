<template>
	<!-- 01. BootStrap Docs에서 NavBar 코드를 복붙한다. -->
	<!-- 01-1. expand-lg -> expand-sm : 작은 창에서도 Nav bar가 보임-->
	<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Navbar</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Home</a>
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
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li>
								<hr class="dropdown-divider" />
							</li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled">Disabled</a>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>

	<!-- 02. main 코드 작성 -->
	<main>
		<div class="container text-center py-4">
			<div class="row gx-5">
				<!-- card 사이 간격 부여 (gx, gy) -->
				<div class="col col-4">
					<!-- 3개씩 배치-->
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col col-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col col-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col col-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col col-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col col-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
