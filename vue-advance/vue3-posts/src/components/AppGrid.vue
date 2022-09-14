<!-- 10-19. 리스트를 받아서 뿌려주는 컴포넌트 -->
<template>
	<div class="row g-3">
		<!-- 10-21. 클래스는 여기서 사용 -->
		<div v-for="(item, index) in items" :key="index" :class="colClass">
			<!-- 10-20. 부모 컴포넌트로부터 item을 받아서 처리할 수 있도록 설정 -->
			<slot :item="item" :index="index"></slot>
		</div>
	</div>
</template>

<script setup>
defineProps({
	items: {
		type: Array,
		required: true,
	},
	// 10-21. 클래스 지정도 가능
	colClass: {
		type: String,
		default: 'col-4',
	},
});
</script>

<style lang="scss" scoped></style>
