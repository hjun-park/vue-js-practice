<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		// 04-14. readonly
		const original = reactive({
			count: 0,
		});

		// readonly 속성 복사
		const copy = readonly(original);
		original.count++;
		copy.count++; // readonly라서 변경 되지 않음

		console.log(original.count);
		console.log(copy.count);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
