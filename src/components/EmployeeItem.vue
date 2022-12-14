<template>
	<div class="employee">
		<div>
			<div><strong>Имя:</strong> {{ employee.userId }}</div>
			<div><strong>З/п:</strong> {{ employee.id }}</div>
			<div><strong>Возраст:</strong> {{ employee.title }}</div>
		</div>
		<div class="employee__btns">
			<my-button class="btn-del" @click="$emit('remove', employee)">Удалить</my-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		employee: {
			type: Object,
			required: true,
		}
	},
}
</script>

<style scoped>
.employee {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0px;
	padding: 10px;
	border: 1.5px solid rgb(24, 24, 24);
	color: rgb(24, 24, 24);
}
</style>

