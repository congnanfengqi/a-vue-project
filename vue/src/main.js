import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css'
import './assets/base.css'
// import './assets/bootstrap-5.3.0-alpha1-dist/js/bootstrap.min.js'
// import HYRequest from './network/service'
const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(store)


