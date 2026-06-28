
import { h, Fragment } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import BackgroundToggle from './components/BackgroundToggle.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(Fragment, [h(BackgroundToggle)]),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('BackgroundToggle', BackgroundToggle)
  }
}
