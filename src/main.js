import Vue from 'vue'
import App from './App'
Vue.use(require('vue-resource'))

/* eslint-disable no-new */
new Vue({
  el: 'body',
  ready: function () {
    this.$http.get('book.json', function (data) {
      this.$set('books', data)
    }).error(function (data, status, request) {
      console.log('fail' + status + ',' + request)
    })
  },
  components: { App }
})
