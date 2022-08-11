<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

/*
	watch - 반응형 상태가 변경되는 것을 감지하여 특정한 작업 수행
*/
export default {
	setup() {
		const message = ref('');

		// 01. 해당 message 값이 변경되면 oldValue, newValue가 넘어옴
		watch(message, (newValue, oldValue) => {
			// DOM~

			// API~
			// state 변경
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		});

		return { message };
	},
};
</script>

<style lang="scss" scoped></style>
