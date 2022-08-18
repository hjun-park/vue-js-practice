<template>
	<!-- 01-01. 기존 App.vue에 있는 header를 따로 컴포넌트로 분리 -->
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">GYM CODING</a>
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
						<!-- 02-04. Vue Router에서는 페이지 이동 시에 -->
						<!--  a 태그 대신 <RouterLink> 사용-->
						<!-- 그렇게 되면 리로딩 하지 않고 매핑된 페이지 렌더링 가능 -->
						<li class="nav-item">
							<!-- 02-11. active-class를 지정하면 버튼 클릭 시 활성화된 창 확인 가능 -->
							<RouterLink class="nav-link" active-class="active" to="/"
								>Home</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink class="nav-link" active-class="active" to="/about"
								>About</RouterLink
							>
						</li>
						<!-- 03-06. 새로운 링크 걸기 위해 element 추가 후 posts로 연결-->
						<li class="nav-item">
							<RouterLink class="nav-link" active-class="active" to="/posts"
								>게시글</RouterLink
							>
						</li>

						<!-- <li class="nav-item"> -->
						<!-- 02-05. 기존 a태그를 사용한 부분은 클릭 시 페이지 리로딩이 된다. -->
						<!-- <a class="nav-link active" aria-current="page" href="/">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/about">About</a>
						</li> -->
					</ul>

					<!-- 03-07. 버튼 클릭 시 글쓰기 화면 나오도록 생성 -->
					<div class="d-flex" role="search" type="button" @click="goPage">
						<button class="btn btn-outline-light" type="submit">글쓰기</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
// 03-08. goPage 메소드 -> 게시글 등록화면을 보낼 것

import { useRouter } from 'vue-router';

// 그래서 router 객체 만들어준다.
// 페이지로 보내려면 push 사용
const router = useRouter();
const goPage = () => {
	router.push('/posts/create');
};
</script>

<style lang="scss" scoped></style>
