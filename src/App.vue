<template>
	<div class="app">
		<h1>Список сотрудников</h1>
		<my-button @click="fetchEmployees">Получить сотрудников</my-button>
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
import MyButton from "./components/UI/MyButton";
import axios from 'axios';

export default {
	components: {
		EmployeeList, EmployeeForm
	},
	data() {
		return {
			employees: [],
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
		},
		//получение списка сотрудников с сервера
		async fetchEmployees() {
			try {
				const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
				// console.log(response.data);
				this.employees = response.data;
			} catch (e) {
				alert('Ошибка')
			}
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