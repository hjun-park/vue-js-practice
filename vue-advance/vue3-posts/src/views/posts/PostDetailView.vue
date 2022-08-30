<template>
	<div>
		<!-- 05-04. fetchPost를 통해 가져온 객체 정보를 여기에 뿌려줌 -->
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
		<p class="text-muted">{{ form.createdAt }}</p>
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
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// 05-02. 지정한 함수를 여기서 사용
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

// 05-09. route에 props 전달
const props = defineProps({
	id: Number,
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
const form = ref({});
const fetchPost = () => {
	const data = getPostById(props.id); // 객체를 가져와서
	form.value = { ...data }; // spread를 이용해서 객체 복사 (...이 없으면 얕은 복사가 된다)
};

fetchPost();
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
