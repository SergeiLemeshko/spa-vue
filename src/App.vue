<template>
	<div class="app">
		<h1 class="app__title">Отдел компании А:</h1>
		<my-button @click="showDialog" style="margin: 15px 0;">Добавить сотрудника</my-button>
		<my-dialog v-model:show="dialogVisible">
			<employee-form @create="createEmployee" />
		</my-dialog>
		<employee-list @dblclick="dblShowDialog" :employees="employees" @remove="removeEmployee"
			v-if="!isEmployeesLoading" />
		<div v-else>Идёт загрузка...</div>
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
			isEmployeesLoading: false,
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
			this.$emit('show', this.dialogVisible);
		},
		//функция показа окна созд. сотрудника при двойном клике
		dblShowDialog() {
			this.dialogVisible = true;
			this.$emit('show', this.dialogVisible);
		},

		//получение списка сотрудников с сервера
		async fetchEmployees() {
			try {
				this.isEmployeesLoading = true;
				const response = await axios.get('https://jsonplaceholder.typicode.com/albums?_limit=10');
				// console.log(response.data);
				this.employees = response.data;
			} catch (e) {
				alert('Ошибка')
			} finally {
				this.isEmployeesLoading = false;
			}
		}
	},
	//динамическая подгрузка сотрудников
	mounted() {
		this.fetchEmployees();
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
	background-image: url('img/canva.jpg');
	background-position: 0 0;
	background-repeat: no-repeat;
	background-size: cover;
	max-width: 1920px;
	min-height: 1100px;
	padding: 15px;
}

.app__title {
	color: rgb(196, 15, 15);
}
</style>