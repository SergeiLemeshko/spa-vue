<template>
	<input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
	name: 'my-input',
	props: {
		modelValue: [String, Number]
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>

<style scooped>
.input {
	width: 100%;
	border: 2px solid rgb(11, 102, 75);
	padding: 10px 15px;
	margin-top: 10px;
}

h4 {
	color: rgb(0, 0, 0);
}
</style>

