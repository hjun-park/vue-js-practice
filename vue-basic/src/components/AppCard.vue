<template>
	<div>
		<!-- 3개씩 배치-->
		<div class="card">
			<div class="card-body">
				<!-- type : news, notice -->
				<span class="badge bg-secondary">{{
					type === 'news' ? '뉴스' : '공지사항'
				}}</span>
				<!-- script에서 정의한 props는 여기서 사용, 머스태치로 감싼다.-->
				<h5 class="card-title red mt-2">{{ title }}</h5>
				<p class="card-text">{{ contents }}</p>
				<a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>
				<a v-else href="#" class="btn btn-outline-danger">좋아요</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// props: ['title', 'contents'],
	/*
    props: 컴포넌트에 등록할 수 있는 사용자 정의 속성
      => 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달 가능
  */
	// 반응형 prop 데이터 생성
	/*
    type: 자료형
    default: 기본값
    required: 속성값 필수여부
    validator: 속성값의 유효성 검사
  */
	props: {
		type: {
			type: String,
			default: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			// required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		obj: {
			type: Object,
			// 기본값을 함수 형태로도 반환할 수 있다.
			default: () => {},
		},
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
