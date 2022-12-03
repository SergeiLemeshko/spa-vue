<template>
	<div class="app">
		<employee-form @create="createEmployee" />
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
		}
	},
	methods: {
		createEmployee(employee) {
			this.employees.push(employee);
		},
		removeEmployee(employee) {
			this.employees = this.employees.filter(p => p.id !== employee.id)
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