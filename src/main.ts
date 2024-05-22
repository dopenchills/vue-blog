import './assets/style/main.scss'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { router } from './routes'

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages: {
    en: {
      blog: {
        content: {
          placeholder: 'Type something here...'
        }
      }
    },
    ja: {
      blog: {
        content: {
          placeholder: '書き始めましょう...'
        }
      }
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
