<template>
	<div>
		<!-- 07-01. v-if ... else 예제-->
		<h2 v-if="visiable">Hello Vue3!</h2>
		<h2 v-else>false 입니다.</h2>
		<button v-on:click="visiable = !visiable">toggle</button>

		<!-- 07-02. v-else-if 예제 -->
		<hr />
		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>A, B, C가 아닙니다.</h2>

		<!-- 07-03. 하나의 조건으로 여러 개 렌더링 ( template 이용 ) -->
		<hr />
		<template v-if="visiable">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>

		<!-- 07-04. 조건부로 표시하는 또 다른 옵션 v-show-->
		<hr />
		<h1 v-show="ok">Title입니다.</h1>
		<button v-on:click="ok = !ok">show toggle</button>

		<!-- 07-05. v-if는 전환비용이 높음, v-show는 초기 렌더링 비용이 높다. -->
		<!-- 그래서 런타임 상에서 조건이 변경되지 않는다면 v-if를 사용할 것 -->
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visiable = ref(true);
		const type = ref('A');
		const ok = ref(true);

		return { visiable, type, ok };
	},
};
</script>

<style lang="scss" scoped></style>
