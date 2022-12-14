<template>
	<form @submit.prevent>
		<h4>Добавление сотрудника</h4>
		<my-input v-model="employee.userId" type="text" placeholder="Имя" />
		<my-input v-model="employee.id" type="text" placeholder="З/п" />
		<my-input v-model="employee.title" type="text" placeholder="Возраст" />
		<my-button style="align-self: flex-end" @click="createEmployee">Создать</my-button>
	</form>
</template>
 
<script>

export default {
	data() {
		return {
			employee: {
				userId: '',
				id: '',
				title: '',
			}
		}
	},
	methods: {
		createEmployee() {
			this.employee.id = Date.now();
			this.$emit('create', this.employee)
			this.employee = {
				userId: '',
				id: '',
				title: '',
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