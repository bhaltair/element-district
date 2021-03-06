import Vue from 'vue'
import { Cascader } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Cascader);

new Vue({
  render: h => h(App)
}).$mount('#app')
