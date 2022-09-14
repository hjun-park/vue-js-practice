<template>
	<div>
		<h2>Home View</h2>
		<!-- 02-07. route에 대한 정보 확인 방법(1)-->
		<!-- <p>{{ $route }}</p> -->
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>

		<!-- 02-09. Vue Router 함수로 만들어서 이동 -->
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
		<hr class="my-4" />
		<!-- 10-18. 만약 복잡한 element가 많이 있다면 반복적인 작업이 될 것이다. 
							따라서 이를 분리해본다. -->
		<!-- <div class="row g-3"> -->
		<!-- <div v-for="(item, index) in items" :key="index" class="col-4"> -->
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
		<!-- </div> -->
		<!-- </div> -->
		<!-- 10-20. v-slot을 이용해서 items와 요소 item을 넘겨준다. -->
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

// 02-07. route에 대한 정보 확인 방법(2)
// const router = useRouter();
// console.log('route.path: ', router.path);

// 02-09. Vue Router 함수로 만들어서 이동
const router = useRouter(); // Router 객체를 가져옴
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);
</script>

<style lang="scss" scoped></style>
