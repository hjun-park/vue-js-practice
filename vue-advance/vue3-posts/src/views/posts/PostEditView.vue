<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<form @submit.prevent>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input type="text" class="form-control" id="title" />
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">내용</label>
				<textarea class="form-control" id="content" rows="3"></textarea>
			</div>
			<div class="pt-4">
				<!-- 03-24. 취소버튼 클릭하면 상세페이지로 가도록 설정 -->
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

// 03-25. route로부터 얻은 id 이용하여 상세페이지로 이동
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
