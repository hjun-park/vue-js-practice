<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>

		<!-- 03-1. v-once는 변경 안 되는 데이터 -->
		<p v-once>{{ message }}</p>
		<button v-on:click="message = message + '!'">Click!</button>
		<br />

		<!-- 03-2. v-html : 문자열을 html 형식으로 출력 (XSS 때문에 사용금지)-->
		<h2>HTML</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>

		<!-- 03-3. v-bind : 문자열을 html 형식으로 출력 (XSS 때문에 사용금지)-->
		<!-- v-bind는 v-bind 없이 콜론(:)만으로도 가능하다 -->
		<br />
		<h2>속성 바인딩</h2>
		<div :title="dynamicTitle">마우스를 올려보세요</div>
		<!-- isInputDisabled가 true면 input값에 입력 불가, false하면 입력 가능-->
		<input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
		<!-- v-bind에 객체를 넣으면 다중속성 바인딩 가능 -->
		<input v-bind="attrs" />

		<!-- 03-4. 보간법은 JS구문을 직접 사용할 수 있다. -->
		<h2>Javascript</h2>
		{{ message.split('').reverse().join('') }} <br />
		{{ isInputDisabled ? '예' : '아니오' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요!');
		const rawHtml = ref('<strong>안녕하세요</strong>');

		const dynamicTitle = ref('안녕하세요!!!!');
		const isInputDisabled = ref(true);
		const attrs = ref({
			type: 'password',
			value: '12345678',
			disaled: false,
		});

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style></style>
