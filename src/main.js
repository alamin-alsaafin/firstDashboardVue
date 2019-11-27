import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Moment from 'vue-moment'
Vue.use(Moment);

import './assets/js/jquery-ui-1.10.3.min.js'
import './assets/js/bootstrap.min.js'
import './assets/js/plugins/morris/morris.min.js'
import './assets/js/plugins/sparkline/jquery.sparkline.min.js'
import './assets/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'
import './assets/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'
import './assets/js/plugins/fullcalendar/fullcalendar.min.js'
import './assets/js/plugins/jqueryKnob/jquery.knob.js'
// import './assets/js/plugins/daterangepicker/daterangepicker.js'
// import './assets/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'
import './assets/js/plugins/iCheck/icheck.min.js'
// import './assets/js/AdminLTE/app.js'
import './assets/js/AdminLTE/dashboard.js'



new Vue({
  /*el: '#app',
  components: {
    App
  }*/
  render: h => h(App)
}).$mount('#app')
