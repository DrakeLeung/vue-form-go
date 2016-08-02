import Vue from 'vue'
import vueFormGo from '../src/main.js'

Vue.use(vueFormGo)

new Vue({
  el: '#demo',
  data: {
    model: {
      email: '',
    },
  },
})
