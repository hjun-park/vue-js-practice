<template>
	<div>
		<!-- 05-04. fetchPost를 통해 가져온 객체 정보를 여기에 뿌려줌 -->
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
		<!-- 03-04. 동적 라우트에 매핑된 값을 확인하는 방법 -->
		<!-- <p>params : {{ $route.params }}</p> -->

		<!-- 03-05. 이외에도 query parameter, hash 로 받을 수 있다. -->
		<!-- query parameter : /posts?serach=love -->
		<!-- 						hash : /posts/alice#profile -->
		<!-- <p>query : {{ $route.query }}</p>
		<p>hash : {{ $route.hash }}</p> -->

		<!-- 03-22. Grid system으로 버튼 몇 개 넣기 -->
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전 글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음 글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<!-- 07-19. 클릭 시 삭제되도록 -->
				<button class="btn btn-outline-danger" @click="remove">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// 05-02. 지정한 함수를 여기서 사용
import { getPostById } from '@/api/posts';
import { ref } from 'vue';
import { deletePost } from '@/api/posts';

// 05-09. route에 props 전달
const props = defineProps({
	// id: Number,

	// 09-07. 문자열로 넘어가도록 변경
	id: [String, Number],
});

// 03-23. 버튼들에 대해 route 지정
// const route = useRoute(); // Url 구조
const router = useRouter(); // 이동정보

// 05-03. 여기서 출력 (반응형 데이터)
// const id = route.params.id;
// 05-05.
/**
 * ref - primitive (String, Number) 타입 반응형에 사용
 * 장점) spread 이용해서 객체 복사하듯이 한 번에 가능
 * 단점) .value 를 붙여야 한다. (form.value.)
 *
 * reactive - array 같은 배열에 사용
 * 장점) 직점 form.title, form.content 직접 접근 가능
 * 단점) 객체 할당 불가능 (spread 하듯이 하면 반응형으로 선언이 되지 않는다.)
 *  *  따라서 spread 사둉하는 것이 아닌 아래와 같이 사용해야 해서 불편
 *    form.title = data.title;
 *    form.content = data.content;
 */
const post = ref({});
const fetchPost = async () => {
	// 07-11. 예전 방법
	// const data = getPostById(props.id); // 객체를 가져와서
	// form.value = { ...data }; // spread를 이용해서 객체 복사 (...이 없으면 얕은 복사가 된다)

	// 07-12. 이 방식으로 해보기
	try {
		const { data } = await getPostById(props.id);
		// 어떤 데이터가 넘어올 지 모르니 setPost를 만듦
		setPost(data);
	} catch (error) {
		console.error(error);
	}
};

// 07-13. 구조분해 이용해서 setter 만들기
// const setPost = { title, content, createdAt };
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

fetchPost();

// 07-18. 삭제 부분 구현
/*
	1) const 함수를 담을 변수명 선언
	2) try.. catch... 감싸기
	3) posts.js에서 정의한 API 여기에 정의
	4) 본문에 api 함수 사용
	5) async, await 처리 (promise 사용 X)
*/
const remove = async () => {
	try {
		// 07-21. 삭제 확인 구문 넣기 (depth가 깊어지지 않도록 안티패턴 사용)
		// ! 사용보다는 === false 사용 (!는 잘 안 보임)
		if (confirm('삭제 하시겠습니까?') === false) {
			return;
		}
		await deletePost(props.id);
		router.push({ name: 'PostList' });

		// 07-20. 삭제되면 리스트로 이동
	} catch (error) {
		console.error(error);
	}
};
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
