<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'my-button'
}
</script>

<style scoped>
.btn {
	margin-top: 15px;
	padding: 10px 15px;
	background: none;
	color: rgb(48, 93, 218);
	border: 1px solid rgb(48, 93, 218);
}
</style>