<template>
	<div>
		<!-- 03-09. 게시글 등록 화면 구성-->
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<!-- 07-10. 저장 버튼을 클릭했을 때 save 메소드가 수행 -->
		<form @submit.prevent="save">
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<!-- 07-07. v-model에 form 이라는 객체를 바인드 -->
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">내용</label>
				<!-- 07-07. v-model에 form 이라는 객체를 바인드 -->
				<textarea
					v-model="form.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
			</div>
			<div class="pt-4">
				<!-- 03-26. 목록도 마찬가지로 클릭 시 리스트로 -->
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button class="btn btn-primary">저장</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { createPost } from '@/api/posts';

const route = useRoute();
const router = useRouter();
// 07-06. 등록할 객체
const form = ref({
	title: null,
	content: null,
});

// 07-08. 저장할 수 있게 등록 API 호출
const save = () => {
	try {
		createPost({
			...form.value,
			createdAt: Date.now(), // 등록일
		});
		// 07-09. 저장 이후 리스트로 이동
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};
const goListPage = () => {
	router.push({ name: 'PostList' });
};
</script>

<style lang="scss" scoped></style>
