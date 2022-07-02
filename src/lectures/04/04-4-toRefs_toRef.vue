<template>
	<div>
		<p>author: {{ author }}</p>
		<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef } from 'vue';

export default {
	setup() {
		// 04-12. 반응형 상태 구조 분해하기
		// 반응형 객체를 구조 분해하게 되면 그 속성은 반응형을 잃는다.
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});

		// 구조분해 진행 (book을 쪼갬)
		// const { author, title } = book;

		// 04-13. toRefs를 이용하면 반응형으로 바꾸어 줌
		// const { author, title } = toRefs(book);

		// 한 개는 toRef 사용
		const author = toRef(book, 'author');
		const title = toRef(title, 'title');

		return {
			// book은 수정이 가능하지만 나머지는 preemptive 재할당되어서 수정 X
			author,
			title,
			book,
		};
	},
};
</script>

<style lang="scss" scoped></style>
