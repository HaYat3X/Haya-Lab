import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import { Bootstrap } from 'bootstrap';

createApp(App).use(Bootstrap);
createApp(App).use(router).mount('#app');