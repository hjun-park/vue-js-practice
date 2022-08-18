<!-- 03-10. Post List에 보여질 네모난 카드목록들 -->
<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ content }}
			</p>
			<p class="text-muted">{{ createdAt }}</p>
		</div>
	</div>
</template>

<script setup>
// 03-11. setup 함수에서 props 선언 -> defineProps
defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	// 타입 여러 개 지정
	createdAt: {
		type: [String, Date, Number],
	},
});
</script>
<style lang="scss" scoped></style>
