<template>
	<div>
		<!-- 01. 아래와 같이 입력값이 결과에 동적으로 출력되는 것이 양방향 바인딩-->
		<!-- <h2>input value</h2>
		<input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/>
		<div>{{ inputValue }}</div> -->

		<!-- 02. v-model을 이용하면 단순화 가능 -->
		<!-- <h2>input value</h2>
		<input type="text" v-model="inputValue" />
		<div>{{ inputValue }}</div> -->

		<!-- 03. v-model: text Area Value -->
		<h2>textarea value</h2>
		<textarea v-model="textAreaValue"></textarea>
		<div>{{ textAreaValue }}</div>

		<!-- 04. v-model: check box value -->
		<h2>textarea value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input type="checkbox" id="checkbox" v-model="checkboxValue" />

		<!-- 05. v-model: radio button -->
		<h2>radio value</h2>
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />O형
			<input type="radio" name="type" value="A" v-model="radioValue" />A형
		</label>
		<div>
			{{ radioValue }}
		</div>

		<!-- 06. v-model: select value -->
		<h2>Select Value</h2>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>

		<!-- 07. v-model: checkbox value-->
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />CSS
		</label>
		<label>
			<input
				type="checkbox"
				value="javascript"
				v-model="checkboxValues"
			/>JavaScript
		</label>

		<div>
			{{ checkboxValues }}
		</div>

		<!-- 08. v-model 수식어-->
		<h2>input value</h2>
		<!-- (1) (LAZY) 입력할 때마다 동기화가 아닌 focus가 떨어졌을 때 동기화 됨 -->
		<!-- <input type="text" v-model.lazy="inputValue" /> -->
		<!-- (2) (number) 알아서 숫자로 형 변환-->
		<!-- <input type="text" v-model.number="inputValue" /> -->
		<!-- (3) (trim) 앞뒤로 공백제거 -->
		<input type="text" v-model.trim="inputValue" />
		<div>{{ inputValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref(null);
		const textAreaValue = ref(null);
		const checkboxValue = ref(null);
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');

		return {
			inputValue,
			textAreaValue,
			checkboxValue,
			checkboxValues,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
