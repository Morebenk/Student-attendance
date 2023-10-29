import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StudentManagement from '../views/StudentManagement.vue'
import Attendance from '../views/Attendance.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/attendance',
			name: 'Attendance',
			component: Attendance
		},
		{
			path: '/management',
			name: 'StudentManagement',
			component: StudentManagement
		},
		{
			path: '/reports',
			name: 'Reports'
		}
	],
})

export default router