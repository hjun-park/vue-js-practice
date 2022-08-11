<template>
	<div>
		<!-- 09-03. v-memo: 괄호 안 데이터만 업데이트 될 경우에만 변경, 이외엔 v-once와 같음-->
		<div v-memo="[subscribers]">
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
		<button @click="subscribers++">Sub++</button>
		<button @click="views++">views++</button>
		<button @click="likes++">Likes++</button>
		<!-- v-for돌 때 1000개 넘게 돌 것 같으면 v-memo로 성능최적화 필요-->
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(4000);
		const likes = ref(20);
		return { subscribers, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
