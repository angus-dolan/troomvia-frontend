<template>
  <div>
    
    <n-config-provider :theme-overrides="themeOverrides">
      <n-message-provider>
        <router-view />
      </n-message-provider>
    </n-config-provider>

  </div>
</template>

<script>
import { defineComponent, onBeforeMount, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStore } from 'vuex'

// Naive UI
import { NConfigProvider, NMessageProvider } from 'naive-ui'
import { themeOverrides } from './naive-ui-config'

export default defineComponent({
  
  components: { NConfigProvider, NMessageProvider },

  setup () {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const auth = getAuth()

    const storedUser = computed(() => {
      return store.getters['user/getUser']
    })
    const currentRoute = computed(() => {
      return useRoute().name
    })

    onBeforeMount(() => {

      onAuthStateChanged(auth, (user) => {
        // Reset user state on reload
        if (user && !storedUser.value) {
          store.dispatch('user/setUser', user)
        }

        if (!user && route.path === '/register') {
          // Allow logged out users to register
          router.replace('/register')
        } else if (!user && route.path === '/forgot-password') {
          // Allow logged out users to change password
          router.replace('/forgot-password')
        } else if (!user) {
          // Allow logged out users to login
          router.replace('/login')
        } else if (route.path == '/login' || route.path == '/register') {
          // Block logged in users from login and register
          router.replace('/app')
        }
      })

    })

    return {
      currentRoute,
      themeOverrides
    }

  }
  
})
</script>