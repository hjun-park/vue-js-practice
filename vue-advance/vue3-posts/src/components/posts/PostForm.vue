<template>
	<!-- 10-01. PostCreateView에서 입력하는 박스가 여러 개 일때는 컴포넌트 분리하는 것이 좋다. -->
	<form>
		<div class="mb-3">
			<label for="title" class="form-label">제목</label>
			<!-- 10-05. props 값을 여기에 집어넣음-->
			<input
				:value="title"
				@input="$emit('update:title', $event.target.value)"
				type="text"
				class="form-control"
				id="title"
			/>
		</div>
		<div class="mb-3">
			<label for="exampleFormControlTextarea1" class="form-label">내용</label>
			<!-- 10-05. props 값을 여기에 집어넣음-->
			<textarea
				:value="content"
				@input="$emit('update:content', $event.target.value)"
				class="form-control"
				id="content"
				rows="3"
			></textarea>
		</div>
		<!-- 10-02. slot 선언, 부모 컴포넌트에서 다른 태그를 전달할 수 있도록 한다. -->
		<div class="d-flex gap-2 mt-4"><slot name="actions"> </slot></div>
	</form>
</template>

<script setup>
// 10-03. 받아야 할 데이터 title, content에 대한 Props 정의
defineProps({
	title: String,
	content: String,
});

// 10-04. 다중 v-model 구현 위해서는 defineEmits 필요
defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
