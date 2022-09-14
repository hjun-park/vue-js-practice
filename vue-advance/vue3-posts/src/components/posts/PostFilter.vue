<!-- 10-22. 3개, 6개, 9개 보기에 대한 필터를 컴포넌트로 분리 -->
<template>
	<form @submit.prevent>
		<div class="row g-3">
			<div class="col">
				<!-- 08-09. watchEffect가 반응형 데이터 변경 시 함수가 재실행 되므로 필터 구현 가능  -->
				<!-- <input v-model="title_like" type="text" class="form-control" /> -->
				<input
					:value="title"
					@input="$emit('update:title', $event.target.value)"
					type="text"
					class="form-control"
					placeholder="제목으로 검색해주세요."
				/>
			</div>
			<div class="col-3">
				<select
					:value="limit"
					@input="$emit('update:limit', $event.target.value)"
					class="form-select"
				>
					<option value="3">3개씩 보기</option>
					<option value="6">6개씩 보기</option>
					<option value="9">9개씩 보기</option>
				</select>
			</div>
		</div>
	</form>
</template>

<script setup>
defineProps({
	title: String,
	limit: Number,
});

// 10-23. 다중 v-model이기 때문에 emit도 생성
defineEmits(['update:title', 'update:limit']);
</script>

<style lang="scss" scoped></style>
