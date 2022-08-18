<template>
	<div>
		<h2>게시글 상세</h2>
		<hr class="my-4" />
		<!-- 03-04. 동적 라우트에 매핑된 값을 확인하는 방법 -->
		<p>params : {{ $route.params }}</p>

		<!-- 03-05. 이외에도 query parameter, hash 로 받을 수 있다. -->
		<!-- query parameter : /posts?serach=love -->
		<!-- 						hash : /posts/alice#profile -->
		<p>query : {{ $route.query }}</p>
		<p>hash : {{ $route.hash }}</p>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
