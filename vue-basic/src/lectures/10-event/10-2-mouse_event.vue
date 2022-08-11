<template>
	<div>
		<!-- 이벤트 버블링 : div -> p -> span -> p -> div -->
		<div id="modifiers">
			<div @click="clickDiv">
				DIV 영역
				<p @click.self="clickP">
					P 영역
					<!-- <span @click.stop="clickSpan"> SPAN 영역 </span> -->
					<span @click="clickSpan"> SPAN 영역 </span>
					<!-- prevent default 대신에 @click.prevent.stop -->
					<!-- prevent: div태그에 연결된 기본기능을 막고 -->
					<!-- stop: 이벤트 전파도 막아라 -> naver.com으로 리다이렉트 되지 않음 -->
					<a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	/*	[이벤트 수식어] 
		메소드 안에서 event.preventDefault(), event.stopPropogation() 메소드 호출로
		이벤트를 조작할 수 있다. 하지만 메소드 안에서 사용하는 것은 비효율적

		따라서 v-on 이벤트에 위와 같은 '이벤트 수식어'를 사용할 수 있다.

		1. .stop = e.stopPropagation()
			-> div 태그 내의 p 태그에서 click이벤트를 발생시킬 지라도
			-> 전파되어 div태그의 이벤트는 실행하지 않도록 설정
		2. .prevent = e.preventDefault()
		3. .capture = 캡처 모드를 사용할 때 이벤트 리스너를 사용 가능
		4. .self = 오로지 자기 자신만 호출할 수 있다.
		5. .once = 한 번만 실행된다.
		6. .passive = 일반적으로 모바일 장치의 성능을 개선 하기 위해 터치 이벤트 리스너와 함께 사용
	*/

	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
			// alert('좋아요');
		};
		const clickA = e => {
			// 기본 기능을 막는 preventDefault
			// e.preventDefault();
			alert('어떤기능~');
		};
		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>
