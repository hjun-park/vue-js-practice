<template>
	<div>
		<h2>Home View</h2>
		<!-- 02-07. route에 대한 정보 확인 방법(1)-->
		<!-- <p>{{ $route }}</p> -->
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>

		<!-- 02-09. Vue Router 함수로 만들어서 이동 -->
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// 02-07. route에 대한 정보 확인 방법(2)
// const router = useRouter();
// console.log('route.path: ', router.path);

// 02-09. Vue Router 함수로 만들어서 이동
const router = useRouter(); // Router 객체를 가져옴
const goAboutPage = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
