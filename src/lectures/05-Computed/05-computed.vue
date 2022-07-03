<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>

		<!-- 05-02. 아래 템플릿 문구는 읽기 힘들다. -->
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음 😀' : '없음 🤣' }}</p> -->

		<!-- 05-04. 훨신 더 깔끔한 코드-->
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture }}</p>

		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		// 05-01. 템플릿 문법 {{ }}는 간단히 사용하면 좋지만 길어지면 가독성 저해
		// 따라서 computed 사용하여 안에 콜백함수 정의함으로써 return 된 값을 readonly로 사용 가능
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'Javascript', 'Vue3'],
		});

		// 05-03. 따라서 중복을 줄이고 편히 쓸 수 있게 computed를 정의한다.
		const hasLecture = computed(() =>
			teacher.lectures.length > 0 ? '있음 😀' : '없음 🤣',
		);

		// 05-04. computed를 사용하지 않아도 결과는 같지만
		// computed는 캐시화 시키기 때문에 속도도 좋고 cost도 적게 든다.
		const existLecture = () =>
			teacher.lectures.length > 0 ? '있음 😀' : '없음 🤣';

		// 05-05. computed는 setter를 열여주면 수정도 가능
		const firstName = ref('홍');
		const lastName = ref('길동');
		const fullName = computed(() => firstName.value + ' ' + lastName.value);
		console.log('Console 출력: ', fullName.value);
		fullName.value = '짐 코딩'; // 수정 불가

		const setfullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				[firstName.value, lastName.value] = value.split(' '); //split 쪼개서 setter
			},
		});

		return { teacher, hasLecture, existLecture, fullName, setfullName };
	},
};
</script>

<style lang="scss" scoped></style>
