<template>
	<div>
		<!-- 03-09. 게시글 등록 화면 구성-->
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<!-- 10-07. 여기에 PostForm 사용-->
		<!-- 이렇게 되면 submit event는 PostForm의 root element인 <form>에 상속이 된다. -->
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="save"
		>
			<template #actions>
				<!-- 03-26. 목록도 마찬가지로 클릭 시 리스트로 -->
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button class="btn btn-primary">저장</button>
			</template>
		</PostForm>
		<!-- 07-10. 저장 버튼을 클릭했을 때 save 메소드가 수행 -->
		<!-- <form @submit.prevent="save"> -->
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
// 10-06. PostForm 가져오기
import PostForm from '@/components/posts/PostForm.vue';

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
