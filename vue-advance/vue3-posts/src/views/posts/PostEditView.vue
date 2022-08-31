<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<!-- 07-16. 클릭 시에 edit 함수 실행-->
		<form @submit.prevent="edit">
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<!-- 07-15. 수정 부분에 대한 v-model 바인딩 -->
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">내용</label>
				<textarea
					v-model="form.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
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
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';

// 03-25. route로부터 얻은 id 이용하여 상세페이지로 이동
const route = useRoute();
const router = useRouter();
const id = route.params.id;

// 07-14. 수정 부분 만들기
const form = ref({
	title: null,
	content: null,
});
const fetchPost = async () => {
	const { data } = await getPostById(id);
	setForm(data);
};
const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};

fetchPost();

const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		//  07-17. 수정 후에는 상세 페이지로 이동
		router.push({ name: 'PostDetail', params: { id } });
	} catch (error) {
		console.log(error);
	}
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
