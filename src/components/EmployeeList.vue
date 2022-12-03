<template>
	<div>
		<h3>Список сотрудников:</h3>
		<employee-item v-for="employee in employees" :employee="employee" :key="employee.id"
			@remove="$emit('remove', employee)" />
	</div>
</template>

<script>
import EmployeeItem from "@/components/EmployeeItem.vue";

export default {
	components: { EmployeeItem },
	props: {
		employees: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>

</style>
