import Vue from 'vue'
import App from './App'
// import Vuetify from 'vuetify'
import {
  Vuetify,
  VApp,
  VBtn,
  VCheckbox,
  VGrid,
  transitions
} from 'vuetify'
import {
  Ripple
} from 'vuetify/es5/directives'

// Assuming you are using webpack, require the CSS file
require('../node_modules/vuetify/dist/vuetify.min.css')
require('vuetify/src/stylus/app.styl')
Vue.config.productionTip = false

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCheckbox,
    VGrid,
    transitions
  },
  theme: {
    secondary: '#11151d'
  },
  directives: {
    Ripple
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
