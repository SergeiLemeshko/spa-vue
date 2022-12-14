<template>
	<div class="app">
		<h1 class="app__title">Сотрудники компании:</h1>
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
		},
		//добавление сотрудника
		async createEmployee(employee) {
			axios.post('https://jsonplaceholder.typicode.com/albums', employee)
				.then((response) => {
					// console.log(response.data);
					this.employees = [...this.employees, response.data]
				})
				.catch((error) => console.log(error));
			this.dialogVisible = false;
		},
		//удаление сотрудника
		removeEmployee(employee) {
			axios.delete(`https://jsonplaceholder.typicode.com/albums/${employee}`)
				.then(() => {
					this.employees = this.employees.filter(p => p.id !== employee.id);
					console.log(employee.id);
				})
				.catch(error => console.log(error));
		},
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
	background: linear-gradient(-15deg, #54bed8, #3df1bb);
	min-height: 100vh;
	padding: 15px;
}

.app__title {
	color: rgb(0, 0, 0);
}
</style>