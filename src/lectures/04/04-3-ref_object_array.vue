<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// 04-09. ref -> object
		const count = ref(0);
		const state = reactive({
			// 04-08. count: count, 키와 값이 같다면 단축 가능
			count,
		});
		count.value++;
		count.value++;

		// 04-10. ref -> Array
		const message = ref('Hello');
		const arr = reactive(message);

		// 04-11. (9)에서 사용할 때에는 value 없고 배열(10)에는 value 있음
		console.log('state.count: ', state.count);
		console.log('arr[0]: ', arr[0].value);

		return {
			count,
			state,
			arr,
		};
	},
};
</script>

<style lang="scss" scoped></style>
