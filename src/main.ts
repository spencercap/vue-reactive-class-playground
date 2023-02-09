// app
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

// css
import './style.css';

// state
import { state } from './state';
app.config.globalProperties.$state = state;

// extend vue's "this" type
declare module 'vue' {
	interface ComponentCustomProperties {
		$state: typeof state;
	}
}

// always mount last
app.mount('#app');