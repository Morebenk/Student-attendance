import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import "@aws-amplify/ui-vue/styles.css"
import '@aws-amplify/ui-vue'

Amplify.configure(awsExports);

createApp(App).use(router).mount('#app')