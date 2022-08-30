<!-- 05-12. 조회 미리보기가 예쁘지 않아서 만드는 AppCard -->
<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header"></slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot></slot>
		</div>
		<div v-if="$slots.footer" class="card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
