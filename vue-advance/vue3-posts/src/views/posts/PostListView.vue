<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<form @submit.prevent>
			<div class="row g-3">
				<div class="col">
					<!-- 08-09. watchEffect가 반응형 데이터 변경 시 함수가 재실행 되므로 필터 구현 가능  -->
					<input v-model="title_like" type="text" class="form-control" />
				</div>
				<div class="col-3">
					<select v-model="params._limit" class="form-select">
						<option value="3">3개씩 보기</option>
						<option value="6">6개씩 보기</option>
						<option value="9">9개씩 보기</option>
					</select>
				</div>
			</div>
		</form>
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
		<!-- 10-17.-->
		<AppPagination
			:current-page="params._page"
			:page-count="pageCount"
			@page="page => (params._page = page)"
		/>

		<template v-if="posts && posts.length > 0">
			<hr class="my-5" />
			<!-- 05-07. PostDetailView에 있는 id가 route에 의존하는 상태기 떄문에 당연히 되지 않음 --->
			<!-- 그래서 router 속성에 props를 사용한다. -->
			<AppCard>
				<PostDetailView :id="posts[0].id"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
// 03-12. template에 사용하기 위해 PostItem import
import PostItem from '@/components/posts/PostItem.vue';
// 05-06. 게시판 미리보기 컴포넌트 만들기
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
// 03-17. api/posts.js 에서 작성한 메소드 import
import { getPosts } from '@/api/posts';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
// 10-16. 페이징 컴포넌트를 사용
import AppPagination from '@/components/AppPagination.vue';

// 03-16. posts라는 반응형 데이터 생성
const posts = ref([]);
// 07-06.  asnync를 사용하면 await도 같이 사용

// 08-02. 파라미터 객체 선언
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1, // 08-07. 페이지 처리에 따라 조회
	_limit: 3,
	title_like: '',
});
// 08-04. 페이징 처리
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const fetchPosts = async () => {
	// 07-03. 어떤 걸 반환하는지 결과값 출력
	// const response = getPosts();
	// console.log('response: ', response); // promise 객체를 반환
	//
	//
	//
	/* 07-04. promise
		- js에서 비동기를 처리할 떄 사용하는 객체
		- 해당 객체에 .then 을 사용한다.
	*/
	// getPosts()
	// 	.then(response => {
	// 		console.log('response: ', response);
	// 	})
	// 	.catch(err => {
	// 		console.log('error: ', err);
	// 	});
	//
	//

	/* 
		07-05. promise 대신 사용하는 async/await
	*/
	try {
		// const response = await getPosts();
		const { data, headers } = await getPosts(params.value); // 08-03. 파라미터 대입
		posts.value = data;
		// console.dir(response); // 객체를 편하게 보는 방법
		// ({ data: posts.value } = await getPosts()); // 또 다른 구조분해 할당 방법

		// 08-05. 헤더에서 x-total-count 가져옴
		totalCount.value = headers['x-total-count'];
	} catch (error) {
		console.error(error);
	}

	// posts.value = getPosts();
};

// fetchPosts();
// 08-08. watchEffect에 콜백함수를 넣으면 fetchPosts 함수에서 사용하고 있는
// 반응형 상태가 변경이 되었을 때 해당 콜백함수를 다시 실행할 수 있다.
// 즉, 페이징 넘버를 클릭하면 다시 함수를 호출할 수 있다.
watchEffect(fetchPosts);

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
