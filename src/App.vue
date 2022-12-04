<template>
	<div class="app">
		<h1>Список сотрудников</h1>
		<my-button @click="showDialog" style="margin: 15px 0;">Добавить сотрудника</my-button>
		<my-dialog v-model:show="dialogVisible">
			<employee-form @create="createEmployee" />
		</my-dialog>
		<employee-list :employees="employees" @remove="removeEmployee" />
	</div>
</template>

<script>
import EmployeeForm from "@/components/EmployeeForm";
import EmployeeList from "@/components/EmployeeList";

export default {
	components: {
		EmployeeList, EmployeeForm
	},
	data() {
		return {
			employees: [
				{ id: '1', name: 'Иван', salary: '500', age: '4' },
				{ id: '2', name: 'Cергей', salary: '600', age: '31' },
				{ id: '3', name: 'Анна', salary: '700', age: '28' },
			],
			//для закрытия окна создания сотрудника
			dialogVisible: false,
		}
	},
	methods: {
		createEmployee(employee) {
			this.employees.push(employee);
			this.dialogVisible = false;
		},
		removeEmployee(employee) {
			this.employees = this.employees.filter(p => p.id !== employee.id)
		},
		//функция показа окна созд. сотрудника
		showDialog() {
			this.dialogVisible = true;
		}
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 15px;
}
</style>