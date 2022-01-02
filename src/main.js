import Vue from 'vue'
import App from './App.vue'
import router from './router';
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
console.log(router);
Vue.config.productionTip = false
Sentry.init({
  Vue,
  dsn: "https://936c35f92e18454bb628d2644168c8fa@o1104065.ingest.sentry.io/6130699",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  logErrors: true,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
