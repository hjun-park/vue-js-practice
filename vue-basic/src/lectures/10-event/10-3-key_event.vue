<template>
	<div>
		<!-- 01-1. 엔터를 친 경우에 추가 -->
		<input type="text" @keyup="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>

		<!-- 02-1. Ctrl + Enter-->
		<input type="text" @keyup.ctrl.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
/*
	[여러 사용하는 수식어]
	키 수식어, 시스템 키 수식어 (Ctrl + Enter과 같은 것이 시스템 키 수식어)
	https://www.gymcoding.co/4f1190043f28407686cd11c1f9e464c9 -> 참고
*/

import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);

		const addTodo = event => {
			console.log('event.key', event.key);

			// 01. 엔터를 칠 때에만 추가하도록
			if (event.key == 'Enter') {
				todos.push(event.target.value);

				// 02. 입력 후에는 입력 창을 비워준다,
				event.target.value = '';
				event.target.focus();
			}
		};

		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
