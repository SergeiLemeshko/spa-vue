<template>
	<form @submit.prevent>
		<h4>Добавление сотрудника</h4>
		<my-input v-model="employee.name" type="text" placeholder="Имя" />
		<my-input v-model="employee.salary" type="text" placeholder="З/п" />
		<my-input v-model="employee.age" type="text" placeholder="Возраст" />
		<my-button style="align-self: flex-end" @click="createEmployee">Создать</my-button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			employee: {
				name: '',
				salary: '',
				age: '',
			}
		}
	},
	methods: {
		createEmployee() {
			this.employee.id = Date.now();
			this.$emit('create', this.employee)
			this.employee = {
				name: '',
				salary: '',
				age: '',
			}
		}
	}
}
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
}
</style>
