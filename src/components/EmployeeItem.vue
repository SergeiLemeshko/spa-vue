<template>
	<div class="employee">
		<div>
			<div><strong>Имя:</strong> {{ employee.name }}</div>
			<div><strong>З/п:</strong> {{ employee.salary }}</div>
			<div><strong>Возраст:</strong> {{ employee.age }}</div>
		</div>
		<div class="employee__btns">
			<my-button @click="$emit('remove', post)">Удалить</my-button>
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
	}
}
</script>

<style scoped>
.employee {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0px;
	padding: 10px;
	border: 2px solid rgb(48, 93, 218);
}
</style>