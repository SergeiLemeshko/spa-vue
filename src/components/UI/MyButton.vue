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
	color: rgb(219, 62, 62);
	border: 1px solid rgb(196, 15, 15);
	border-radius: 8px;
	cursor: pointer;
}

.btn-del {
	color: rgb(182, 182, 182);
	font-weight: 700;
	border: 1.5px solid rgb(182, 182, 182);
}
</style>