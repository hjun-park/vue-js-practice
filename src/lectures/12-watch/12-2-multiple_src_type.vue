<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		// 01. 값이 변경되는 것을 감지해서 출력
		watch(
			() => x.value + y.value,
			(sum, oldValue) => {
				console.log('sum = ', sum);
				console.log('oldValue = ', oldValue);
			},
		);

		// 02. watch에서는 리스트로 값을 받을 수 있음
		// 리스트를 입력하면 두 값을 모두 감시한다는 의미
		watch([x, y], ([newX, newY]) => {
			console.log(newX, newY);
		});

		// 03. obj에 있는 count 값을 감시한다.
		// 객체의 property에 직접 접근하는 방법은 감시가 되지 않음
		watch(obj.count, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
		});

		// 03-1. 따라서 다음과 같이 getter를 사용하여 object의 property를 감시한다.
		watch(
			() => obj.count,
			(newValue, oldValue) => {
				console.log('newValue: ', newValue);
			},
		);

		// 04. 반응형 객체를 직접 watch()하면 암시적으로 깊은 감시자 생성
		const person = reactive({
			name: '홍길동',
			age: 19,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// object 내의 object도 감시 가능 (object 자체가 변경됐을 때만)
		watch(person, newValue => {
			console.log('newValue: ', newValue);
		});

		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
