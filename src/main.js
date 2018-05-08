// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './tools/router';
import store from './tools/store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import errorHandle from './tools/errorHandle';
import filters from './tools/filters';

import api from './tools/api';

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'small' });
Vue.use(errorHandle);
Vue.use(filters);

Vue.prototype.$api = api;

Vue.prototype.instance = new Vue({
    el: '#app',
    router: router,
    store: store,
    template: '<App/>',
    components: { App }
});
