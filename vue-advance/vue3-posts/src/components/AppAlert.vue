<template>
	<!-- 13-01. 애니메이션을 적용하기 위해 사용하는 Transition -->
	<!-- <Transition name="slide">
		<div v-if="show" class="app-alert alert" :class="typeStyle" role="alert">
			{{ message }}
		</div>
	</Transition> -->

	<!-- 13-03. Transition 그룹 컴포넌트 -->

	<div class="app-alert">
		<TransitionGroup name="slide">
			<div
				v-for="({ message, type }, index) in items"
				:key="index"
				class="alert"
				:class="typeStyle(type)"
				role="alert"
			>
				{{ message }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>
// 13-04. 여러 개의 건수를 받기 위해서 items 배열 정의
defineProps({
	items: Array,
});

// 13-05. Style은 computed로 연산할 수 없음
const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-primary');

// import { computed } from 'vue';

// const props = defineProps({
// 	show: {
// 		type: Boolean,
// 		default: false,
// 	},
// 	message: {
// 		type: String,
// 		required: true,
// 	},
// 	type: {
// 		type: String,
// 		default: '',
// 		validator: value => ['success', 'error'].includes(value),
// 	},
// });
// const typeStyle = computed(() =>
// 	props.type === 'error' ? 'alert-danger' : 'alert-success',
// );
</script>

<style scoped>
/* 11-02. 클래스에 사용할 app-alert 규칙 만들기 */
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}

/* 13-02. Transition 애니메이션 효과 지정 */
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}

/* 여기서 transition 효과를 줌 */
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
</style>
