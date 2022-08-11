<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>

		<div class="col col-8">
			<input v-model="title" type="text" class="form-control" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>

		<!-- emit을 이용하여 자식으로부터 부모에게 이벤트를 발생시킬 수 있음 -->
		<!-- 추가적으로 파라미터도 전달할 수 있다.-->
		<!-- 부모: TheView, 자식: PostCreate -->
		<!-- @click="$emit(이벤트명)"-->
		<!-- 이렇게 하면 TheView.vue에서 createPost 인자로 받을 수 있다. -->
		<!-- <button
			class="btn btn-primary"
			@click="$emit('createPost', 1, 2, 3, '김길동')"
		>
			button
		</button> -->
		<!-- setup 함수에서도 emit 처리할 수 있다.-->
	</div>
</template>

<script>
import { ref } from 'vue';

/*
  기존의 Props는 부모 -> 자식에게 값을 전달하는 방법
  Events는 자식 -> 부모 이벤트 전달 + 값 전달 
*/
export default {
	// 위 template에서 emit을 이용하여 자식 -> 부모로 이벤트 전달 했었다.
	// setup()에서도 자식 -> 부모로 이벤트 전달 가능
	emits: {
		// emit에서 validation 체크
		createPost: newPost => {
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
	},
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);

			// type과 title을 초기화 시킬수도 있다
			type.value = 'news';
			title.value = '';
		};

		// props는 부모 -> 자식
		// context는 자식 -> 부모
		// context.emit
		// context 대신에 { emit } 대체 가능
		// [자식] setup 함수에서 emit으로 부모에게 이벤트 전달
		// const createPost = () => {
		// emit('createPost', 1, 2, 3, '김길동');
		// };

		return { createPost, type, title };
	},
};
</script>

<style lang="scss" scoped></style>
