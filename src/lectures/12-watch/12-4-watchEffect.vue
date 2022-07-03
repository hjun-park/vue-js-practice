<template>
	<div>
		<!-- 버튼 눌렀을 때의 동작 -->
		<!-- 버튼 누르면 화면이 refresh되는데, .prevent로 이를 막음-->
		<form @submit.prevent>
			<!-- @submit.prevent="save(title, contents)">
			-->
			<!-- lazy를 사용하면 입력할 땐 실행 안 되고 벗어나면 실행-->
			<input v-model.lazy="title" type="text" placeholder="title" />
			<br />
			<textarea v-model="contents" placeholder="Contents"></textarea>
			<hr />
			<button @click="save(title, contents)">저장</button>
		</form>
	</div>
</template>

<script>
// watch vs watchEffect
/*
	[watch]
	1. immediate를 붙여야만 최초 1회 실행 가능
	2. 감시할 대상을 직접 정함 (명시적)

	[watchEffect]
	1. 기본이 최초 1회 실행
	2. callback 함수 안에서 사용할 반응형 api가 감시 대상

	-> watchEffect가 편하고 더 간결하지만 덜 명시적이라는 점

*/

import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log('저장되었습니다. title: ${title}, content: ${contents}');
		};
		// 01. 자동으로 저장되게 하기 위해 watchEffect 사용
		//   -> watchEffect는 watch와 다르게 최초 1회 실행
		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});

		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
