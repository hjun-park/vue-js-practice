<template>
	<div>
		<h2>제목</h2>
		<p>내용</p>
		<p class="text-muted">2020-01-01</p>
		<!-- 03-04. 동적 라우트에 매핑된 값을 확인하는 방법 -->
		<!-- <p>params : {{ $route.params }}</p> -->

		<!-- 03-05. 이외에도 query parameter, hash 로 받을 수 있다. -->
		<!-- query parameter : /posts?serach=love -->
		<!-- 						hash : /posts/alice#profile -->
		<!-- <p>query : {{ $route.query }}</p>
		<p>hash : {{ $route.hash }}</p> -->

		<!-- 03-22. Grid system으로 버튼 몇 개 넣기 -->
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전 글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음 글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

// 03-23. 버튼들에 대해 route 지정
const route = useRoute(); // Url 구조
const router = useRouter(); // 이동정보
const id = route.params.id;

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () => router.push({ name: 'PostEdit', params: { id: 1 } });
</script>

<style lang="scss" scoped></style>
