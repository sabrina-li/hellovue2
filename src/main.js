import Vue from 'vue'
import App from './App.vue'
import * as FullStory from '@fullstory/browser';

FullStory.init({ 
  orgId: '56EM',
  host: "staging.fullstory.com"
});

Vue.config.productionTip = false
Vue.prototype.$FullStory = FullStory

new Vue({
  render: h => h(App),
}).$mount('#app')
