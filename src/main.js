import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
// import focus from "@/directives/focus.js";
// import globalComponents from "@/plugins/global-components.js";
// import globalDirectives from "@/plugins/global-directives.js";
import dayjs from "@/plugins/dayjs.js";

const app = createApp(App)
app.use(router)
// app.use(globalComponents)
// app.use(globalDirectives)
app.use(dayjs)
// app.directive('focus', focus)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'

// console.log(`MODE: ${import.meta.env.MODE}`)
// console.log(`BASE_URL: ${import.meta.env.BASE_URL}`)
// console.log(`PROD: ${import.meta.env.PROD}`)
// console.log(`DEV: ${import.meta.env.DEV}`)
// console.log(`VITE_APP_API_URL: ${import.meta.env.VITE_APP_API_URL}`)