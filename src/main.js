import Vue from 'vue'
import App from './App.vue'
import router from './router'



















// 位置変えた
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch , faBookOpen, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch , faBookOpen , faFilm)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
