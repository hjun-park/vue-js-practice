<template>
	<!-- 01-02. App.vue에 있는 Main을 컴포넌트로 분리 -->

	<!--
		/ -> HomeView.vue 렌더링
		/about -> AboutView.vue 렌더링
	-->
	<main>
		<div class="container py-4">
			<!-- RouterView 사용해서 렌더링 가능 -->
			<RouterView></RouterView>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
