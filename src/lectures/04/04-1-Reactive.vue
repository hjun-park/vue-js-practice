<template>
	<div>
		<!-- 04-2. 클릭하면 값이 1개씩 증가하는 반응형 객체-->
		<button @click="increment">Click {{ state.count }}</button>

		<!-- 04-3. deep한 위치에 있는 객체도 출력함-->
		<button @click="increment">Deep Click {{ state.deep.count }}</button>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		// 04-1. ref()는 잠시 잊고 JS에서 진행, 반응형 객체 생성
		const state = reactive({
			count: 0,
			deep: {
				count: 0,
			},
		});
		// 04-2. @click에 함수로 매핑하기 위함
		const increment = () => {
			state.count++;
			state.deep.count++;
		};

		return {
			state,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
