import { createApp } from 'vue'
import App from './App.vue'


let initializationInterval = setInterval(() => {
    if (window.ysdk == null) {
        return
    }

    if (window.player == null) {
        return
    }

    clearInterval(initializationInterval)

    console.log("create vuejs app")
    const app = createApp(App);
    app.mount('#app')
    window.vue = app

}, 100)
