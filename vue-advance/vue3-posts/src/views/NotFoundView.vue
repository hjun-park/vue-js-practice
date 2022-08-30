<template>
	<div class="text-center py-5">
		<h1>Oops!</h1>
		<h2>404 Not Found</h2>
		<div class="text-muted">요청한 페이지를 찾을 수 없습니다.</div>
		<div class="mt-4">
			<!-- 04-02. 버튼 클릭 시 home으로 돌아가도록 route 설정 -->
			<!-- RouterLink는 내장된 컴포넌트 -->
			<RouterLink to="/">
				<button class="btn btn-primary">HOME</button>
			</RouterLink>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
