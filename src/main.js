import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from './plugins/element-plus';
import './assets/style/global.scss';
import './assets/font/iconfont';
import 'element-plus/dist/index.css';

createApp(App)
  .use(store)
  .use(ElementPlus)
  .use(router)
  .mount('#app');
