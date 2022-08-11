<template>
	<!-- 02. main 코드 작성 -->
	<!-- File name rule : 파스칼 형식을 따르며 
  하나의 컴포넌트만 가진 경우라면 The로 시작한다.-->
	<main>
		<div class="container text-center py-4">
			<!-- 자식으로부터 v-bind 받음 -->
			<!-- @이벤트명="메소드명"-->
			<PostCreate @create-post="createPost"></PostCreate>

			<hr class="my-4" />

			<div class="row g-3">
				<!-- card 사이 간격 부여 (gx, gy) -->
				<!-- v-bind로 props 동적인 데이터 전달 방법 -->
				<!-- 부모에서 전달 시에는 kebab-case를 사용할 것-->
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:is-like="post.isLike"
					></AppCard>
				</div>

				<!-- 정의한 props에 정적인 데이터 전달 방법 (부모 -> 자식)-->
				<!-- <AppCard title="제목 1" contents="내용 1"></AppCard></div> -->
			</div>

			<!-- v-model 만들기 -->
			<hr class="my-4" />
			<label>
				이름
				<input v-model="username" type="text" />

				<!-- v-model을 풀어쓰면 아래와 같다. -->
				<!-- 내부적으로 v:value라는 props로 자식에게 값을 전달-->
				<!-- @input 이벤트로 자식의 이벤트를 전달받음 -->
				<input
					:value="username"
					@input="event => (username = event.target.value)"
					type="text"
				/>
			</label>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive, ref } from 'vue';
import PostCreate from '@/components/PostCreate.vue';
export default {
	components: { AppCard, PostCreate },
	setup() {
		// 정의한 props에 동적인 데이터 전달 방법 (객체 정의 및 return)
		const post = reactive({
			title: '제목 2',
			contents: '내용 2',
		});

		// loop를 돌면서 반응형 객체 순회
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
			{ id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: false,
				type: 'notice',
			},
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: false,
				type: 'notice',
			},
		]);

		// 자식은 PostCreate에서 emit으로 이벤트 전달하면서 동시에 인자를 전달했다.
		// 부모인 TheView에서는 이 인자를 받아준다.
		// const createPost = (a, b, c, d) => {
		// 	console.log('createPost', a, b, c, d);
		// };

		const createPost = newPost => {
			console.log('newPost: ', newPost);
			posts.push(newPost);
		};

		const username = ref('');

		return { post, posts, createPost, username };
	},
};
</script>

<style lang="scss" scoped></style>
