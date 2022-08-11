<template>
	<div>
		<!-- 09-01. v-text 표기법-->
		<p>{{ msg }}</p>
		<p v-text="msg"></p>

		<!-- html이 아닌 그냥 String으로 인식, v-html 사용-->
		<p v-text="htmlStr"></p>
		<p v-html="htmlStr"></p>

		<!-- 09-02. v-once: 렌더링은 한번만 하기 때문에 업데이트 성능 최적화 가능 -->
		<p v-once>{{ msg }} !!!!</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<strong>안녕!!!</strong>');

		return { msg, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
