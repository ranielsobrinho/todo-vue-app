import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi'
  },
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

createApp(App).use(vuetify).use(createPinia()).mount('#app')
