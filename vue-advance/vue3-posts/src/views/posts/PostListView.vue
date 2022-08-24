<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />

		<!-- 03-14. Grid System 이용해서 목록에 뿌려보기 -->
		<!-- Grid System 은 간격조정을 통해 레이아웃 설정이 가능하다 -->
		<!-- [참고영상 1] https://www.youtube.com/watch?v=V30z8k8kTfE -->
		<!-- [참고영상 2] https://www.youtube.com/watch?v=InuKrcuByWI -->
		<div class="row g-3">
			<!-- 03-18. for문을 돌면서 개수만큼 화면 출력 -->
			<div v-for="post in posts" :key="post.id" class="col-4">
				<!-- 03-13. 자식에서 선언한 props에게 부모가 데이터 전달 -->
				<!-- 부모: PostListView.vue / 자식: PostItem.vue -->
				<!-- 03-18. for 통해서 받는 데이터를 v-model 에 담아둔다. (props) -->
				<!-- 클릭 시에는 id 값을 받아서 이동 -->
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
// 03-12. template에 사용하기 위해 PostItem import
import PostItem from '@/components/posts/PostItem.vue';

// 03-17. api/posts.js 에서 작성한 메소드 import
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 03-16. posts라는 반응형 데이터 생성
const posts = ref([]);
const fetchPosts = () => {
	posts.value = getPosts();
};

fetchPosts();

// 03-19. 이동하는 goPage 메소드 정의 (push)
const router = useRouter();
// const goPage = id => {
// router.push('/posts/' + id);
// router.push(`/posts/${id}`); // 백쿼트 사용 가능
// 03-20. 문제점은 push에 하드코딩 한다는 점이다. 이를 해결해본다. (index.js)
// name을 지정하면 된다. (객체 파라미터 사용)
// 만들어지는 URI : https://localhost:3000/posts/2?searchText=hello#world!
// router.push({
// 	name: 'PostDetail', // 이름으로 지정하면 하드코딩 X
// 	params: {
// 		// 인자 전달
// 		id,
// 	},
// 	// Query Parameter
// 	query: {
// 		searchText: 'hello',
// 	},
// 	hash: '#world!',
// });
// };

const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
</script>
<style lang="scss" scoped></style>
