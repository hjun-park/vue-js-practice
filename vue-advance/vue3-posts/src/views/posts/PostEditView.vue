<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="edit"
		>
			<!-- 10-09. 마찬가지로 slot 생성 (슬롯이란 템플릿)-->
			<template #actions>
				<!-- 03-24. 취소버튼 클릭하면 상세페이지로 가도록 설정 -->
				<button
					type="button"
					class="btn btn-outline-danger"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</template>
		</PostForm>
		<!-- 11-01. alert 보이도록 구성 -->
		<AppAlert :show="showAlert" :message="alertMessage" :type="alertType" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
//10-08. 여기도 컴포넌트 적용
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
		// router.push({ name: 'PostDetail', params: { id } });
		vAlert('수정이 완료되었습니다.', 'success');
	} catch (error) {
		console.error(error);
		vAlert('네트워크 오류!', 'error');
	}
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });

// 11-03. alert
const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref('');
const vAlert = (message, type = 'error') => {
	showAlert.value = true;
	alertMessage.value = message;
	alertType.value = type;

	setTimeout(() => {
		showAlert.value = false;
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
