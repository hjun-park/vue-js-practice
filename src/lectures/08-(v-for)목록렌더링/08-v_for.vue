<template>
	<div>
		<ul>
			<!-- 08-00. 실무에서 자주 사용하는 JS API -->
			<!-- https://www.youtube.com/watch?v=WdSQK72G7tw -->

			<!-- 08-01. v-for -->
			<li v-for="(item, index) in items" :key="item.id">
				인덱스: {{ index }}, {{ item.mesage }}
			</li>
		</ul>

		<hr />
		<ul>
			<!-- 08-02. v-for + v-if (짝수만 가져오기) -->
			<!-- template를 사용한다 -->
			<template v-for="(item, index) in items" :key="item.id">
				<li if v-if="item.id % 2 === 0">
					인덱스: {{ index }}, {{ item.mesage }}
				</li>
			</template>
		</ul>

		<hr />
		<ul>
			<!-- 08-03. computed를 사용한 효율적인 방법 -->
			<template v-for="(item, index) in eventItems" :key="item.id">
				<li>ID: {{ item.id }} 인덱스: {{ index }}, {{ item.message }}</li>
			</template>
		</ul>

		<!-- 08-04. v-for을 사용하여 객체 속성 반복도 가능-->
		<hr />
		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }}-{{ key }}-{{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		// 일반적인 v-for 이용
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavaScript' },
		]);

		// computed를 사용한 효율적인 v-for & v-if
		const eventItems = computed(() => items.filter(item => item.id % 2 === 0));

		// v-for 객체 iterate
		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publishAt: '2016-01-01',
		});
		return { items, eventItems, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
