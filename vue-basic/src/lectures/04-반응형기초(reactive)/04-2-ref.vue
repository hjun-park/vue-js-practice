<template>
	<div>
		<p>{{ newMessage.value }}</p>
		<button @click="addMessage">add click</button>
	</div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
	setup() {
		// 04-4. message 반응형 상태를 preemptive 타입으로 생성
		let message = reactive('Hello Vue!');

		// 04-5. 클릭해도 반응형으로 동작하지 않음
		// JS에서 String + String 완전 새로운 객체를 생성하기 때문
		const addMessage = () => {
			message = message + '!';
			newMessage.value = newMessage.value + '!';
		};

		// 04-6. 따라서 객체를 생성해서 같은 메모리를 사용하도록 한다.
		let newMessage = reactive({
			value: 'Hello Vue!',
		});

		// 04-7. 위의 단점을 해결하고자 ref를 사용하면 된다.
		// ref는 변이가능한(mutable) 객체를 반환한다.
		// boolean, string, number 같은 preemptive한 변수들을 객체로 반환해 준다,
		let refMessage = ref('Hello Vue!');

		return {
			message,
			addMessage,
			newMessage,
			refMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
