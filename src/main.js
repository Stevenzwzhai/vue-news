import Vue from 'vue'
import App from './App'
import iScroll from './assets/js/iscroll'
import startScroll from './assets/js/test'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
console.log(startScroll);
window.iScroll = iScroll.iScroll;
console.log(iScroll);
startScroll.startScroll();
