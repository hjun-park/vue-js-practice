<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { computed } from 'vue';
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('Hello Vue');
		const reverseMessage = ref('');

		// 01. message에 대해 감시 시작
		// 02. 새로들어온 newValue에 대해 함수 수행
		watch(
			message,
			newValue => {
				console.log('즉시 실행함');
				reverseMessage.value = newValue.split('').reverse().join('');
			},
			{ immediate: true }, // 최초에 한 번 즉시 실행
		);

		// 03. (computed) 아래와 같은 방법으로도 즉시 실행 가능
		const computedReverseMessage = computed(() =>
			message.value.split('').reverse().join(''),
		);

		// 04. computed vs watch
		/*
			computed: vue 인스턴스의 상태(ref, reactive 변수) 종속 관계를 자동으로 셋팅
			watch: vue 인스턴스 상태 변경 시점에 따라 특정한 액션 (call api, push route) 등을 취하고자 할 때 사용
				- 비즈니스 로직 구현할 때 사용
		*/

		return { message, reverseMessage, computedReverseMessage };
	},
};
</script>

<style lang="scss" scoped></style>
