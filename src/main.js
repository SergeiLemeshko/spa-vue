import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';

const app = createApp(App)


// регистрация UI-компонентов из index.js
components.forEach(component => {
	app.component(component.name, component)
})


app.mount('#app');
