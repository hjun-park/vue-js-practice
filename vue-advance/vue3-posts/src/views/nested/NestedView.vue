<!-- 04-03. 중첩 라우터 설정 -->
<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<!-- 04-10. 중첩 라우터를 위한 RouterLink 설정 -->
				<!-- 04-12. 그래서 to에 중첩된 경로를 입력한다. -->

				<!-- 04-15. router.push가 아닌 history를 저장하지 않는 router.replace 사용-->
				<!-- history를 저장하지 않기 떄문에 뒤로가기를 해도 이전 페이지 컴포넌트로 돌아가지 않는다. -->
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedOne', replace: true }"
					>Nested One</RouterLink
				>
			</li>
			<li class="nav-item">
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedTwo', replace: true }"
					>Nested Two</RouterLink
				>
			</li>
		</ul>
		<!-- 04-07. 중첩 라우터를 사용하는 방법 -->
		<hr class="my-4" />
		<RouterView></RouterView>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
