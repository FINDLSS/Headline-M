import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入vant核心组件库：
import Vant from 'vant'
import 'vant/lib/index.css'
//加载全局样式表：
import './style/index.less'

//注册组件库：
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')