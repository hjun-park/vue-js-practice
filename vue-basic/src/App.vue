<template>
	<div>
		<!-- 지역으로 등록해서 사용한 컴포넌트 (해당 파일 <script> 참고)-->
		<TheNav></TheNav>
		<TheView></TheView>
		<!-- 전역으로 등록해서 사용한 컴포넌트 (main.js 참고)-->
		<!-- <AppCard></AppCard> -->
	</div>
</template>

<script>
// 01. 컴포넌트 import
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';
import AppCard from './components/AppCard.vue';

// 02. 컴포넌트 사용
export default {
	components: {
		TheNav,
		TheView,
		// AppCard,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
