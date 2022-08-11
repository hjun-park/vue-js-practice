<template>
	<div>
		<p>{{ counter }}</p>
		<p>{{ message }}</p>
		<button @click="increment">click!</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// 02-4. setup(props, context)
	setup() {
		// 02-1. 반응형 상태 counter 선언
		const counter = ref(0);
		const message = ref('Hello Vue3');

		// 02-2. 메소드로도 가능
		const increment = () => {
			counter.value++;
		};

		return {
			// 02-3. return 안 하면 위에 데이터바인딩 불가
			counter,
			message,
			increment,
		};
	},
};
</script>

<style></style>
