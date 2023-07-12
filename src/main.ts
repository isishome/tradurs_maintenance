import { createApp } from 'vue'
import { Quasar, Cookies } from 'quasar'
import App from './App.vue'
import { i18n } from './i18n'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

createApp(App).use(Quasar, {
  plugins: { Cookies }, // import Quasar plugins and add here
}).use(i18n).mount('#app')