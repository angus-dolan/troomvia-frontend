import '@/assets/css/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router/index.js'
import { initializeApp } from "firebase/app";
import { store } from './store'
import '@/globalComponents'

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbX52kDPgCaJu2_nMQqXSEG2yiYJYPiHc",
  authDomain: "troomvia.firebaseapp.com",
  projectId: "troomvia",
  storageBucket: "troomvia.appspot.com",
  messagingSenderId: "1059970157127",
  appId: "1:1059970157127:web:faf9596e95de6b12c3bf62",
  measurementId: "G-Y1E1B5Q65T"
}
initializeApp(firebaseConfig)

// Create App
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')