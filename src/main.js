import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'

// Assuming you are using webpack, require the CSS file
require('../node_modules/vuetify/dist/vuetify.min.css')
Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    secondary: '#11151d'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
