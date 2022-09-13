<template>
	<!-- 10-10. 다른 페이지에서도 페이징 할 수 있도록 컴포넌트 분리 -->
	<!-- 이때 부모로부터 props를 _page(현재 페이지 수), pageCount(총 페이지 수) 를 받아야 한다. -->
	<nav class="mt-5" aria-label="Page navigation example">
		<ul class="pagination justify-content-center">
			<!-- 10-12. class 바인딩 변수는 computed로 뺴기 -->
			<!-- 10-13. 자식 내에 있는 @click.prevent에서 props 변수 수정은 불가능 -->
			<!-- 10-13. 따라서 event를 올려줘서 부모컴포넌트 자체를 변경해야 한다. (emit 사용)-->
			<li class="page-item" :class="isPrevPage">
				<!-- 10-15. emit 이벤트로 값을 변경함 -->
				<a
					class="page-link"
					href="#"
					aria-label="Previous"
					@click.prevent="$emit('page', currentPage - 1)"
				>
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			<!-- 08-06. 페이징 처리 -->
			<li
				v-for="page in pageCount"
				:key="page"
				class="page-item"
				:class="{ active: currentPage === page }"
			>
				<a class="page-link" href="#" @click.prevent="$emit('page', page)">{{
					page
				}}</a>
			</li>
			<li class="page-item" :class="isNextPage">
				<a
					class="page-link"
					href="#"
					aria-label="Next"
					@click.prevent="$emit('page', currentPage + 1)"
				>
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { computed } from 'vue';

//10-11. props로 페이지 정보를 받음
const props = defineProps({
	currentPage: {
		type: Number,
		required: true,
	},
	pageCount: {
		type: Number,
		required: true,
	},
});

// 10-14. 자식에서 props 값을 변경하지 않고 emit 이용하여 부모에서 수정
defineEmits(['page']);

// 10-12.
const isPrevPage = computed(() => ({ disabled: !(props.currentPage > 1) }));
const isNextPage = computed(() => ({
	disabled: !(props.currentPage < props.pageCount),
}));
</script>

<style lang="scss" scoped></style>
