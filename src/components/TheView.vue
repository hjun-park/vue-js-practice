<template>
	<!-- 02. main 코드 작성 -->
	<!-- File name rule : 파스칼 형식을 따르며 
  하나의 컴포넌트만 가진 경우라면 The로 시작한다.-->
	<main>
		<div class="container text-center py-4">
			<div class="row g-3">
				<!-- card 사이 간격 부여 (gx, gy) -->
				<div class="col col-4"><AppCard></AppCard></div>
				<div class="col col-4"><AppCard></AppCard></div>
				<div class="col col-4"><AppCard></AppCard></div>
				<div class="col col-4"><AppCard></AppCard></div>
				<div class="col col-4"><AppCard></AppCard></div>
				<div class="col col-4"><AppCard></AppCard></div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
export default {
	components: { AppCard },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
