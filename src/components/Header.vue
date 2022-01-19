<template>
  <div class="h-full flex flex-wrap content-center justify-between">

    <!-- App Logo -->
    <svg width="140" height="38" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.78 22.12C47.78 25.02 49.4 26 51.72 26H53.46V23.1H52.24C51.48 23.1 51.2 22.82 51.2 22.16V17.68H53.44V14.84H51.2V12.12H47.78V14.84H46.42V17.68H47.78V22.12ZM58.385 20.82C58.385 18.9 59.325 18.34 60.945 18.34H61.885V14.72C60.385 14.72 59.165 15.52 58.385 16.7V14.84H54.965V26H58.385V20.82ZM74.0397 20.42C74.0397 16.88 71.5197 14.68 68.2397 14.68C64.9797 14.68 62.4397 16.88 62.4397 20.42C62.4397 23.96 64.9197 26.16 68.1997 26.16C71.4797 26.16 74.0397 23.96 74.0397 20.42ZM65.9197 20.42C65.9197 18.52 66.9997 17.64 68.2397 17.64C69.4397 17.64 70.5597 18.52 70.5597 20.42C70.5597 22.3 69.4197 23.2 68.1997 23.2C66.9597 23.2 65.9197 22.3 65.9197 20.42ZM86.3741 20.42C86.3741 16.88 83.8541 14.68 80.5741 14.68C77.3141 14.68 74.7741 16.88 74.7741 20.42C74.7741 23.96 77.2541 26.16 80.5341 26.16C83.8141 26.16 86.3741 23.96 86.3741 20.42ZM78.2541 20.42C78.2541 18.52 79.3341 17.64 80.5741 17.64C81.7741 17.64 82.8941 18.52 82.8941 20.42C82.8941 22.3 81.7541 23.2 80.5341 23.2C79.2941 23.2 78.2541 22.3 78.2541 20.42ZM103.168 26H106.568V19.48C106.568 16.48 104.788 14.72 102.028 14.72C100.408 14.72 99.0084 15.62 98.2684 16.8C97.5084 15.46 96.1484 14.72 94.4684 14.72C93.0084 14.72 91.8684 15.34 91.2084 16.24V14.84H87.7884V26H91.2084V19.94C91.2084 18.48 92.0484 17.68 93.3484 17.68C94.6484 17.68 95.4884 18.48 95.4884 19.94V26H98.8884V19.94C98.8884 18.48 99.7284 17.68 101.028 17.68C102.328 17.68 103.168 18.48 103.168 19.94V26ZM107.5 14.84L111.46 26H115.68L119.64 14.84H116L113.58 22.8L111.16 14.84H107.5ZM121.08 26H124.5V14.84H121.08V26ZM122.8 13.68C124 13.68 124.82 12.86 124.82 11.84C124.82 10.8 124 9.98 122.8 9.98C121.58 9.98 120.76 10.8 120.76 11.84C120.76 12.86 121.58 13.68 122.8 13.68ZM126.298 20.4C126.298 23.92 128.478 26.16 131.198 26.16C132.858 26.16 134.038 25.4 134.658 24.42V26H138.078V14.84H134.658V16.42C134.058 15.44 132.878 14.68 131.218 14.68C128.478 14.68 126.298 16.88 126.298 20.4ZM134.658 20.42C134.658 22.2 133.518 23.18 132.218 23.18C130.938 23.18 129.778 22.18 129.778 20.4C129.778 18.62 130.938 17.66 132.218 17.66C133.518 17.66 134.658 18.64 134.658 20.42Z" fill="#23262F"/>
      <circle cx="19" cy="19" r="19" fill="url(#paint0_radial_14_3354)"/>
      <path d="M13.627 24.1945V14.0729" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25.1943 24.1945V14.0729" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.4106 24.1945V19.8567" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <radialGradient id="paint0_radial_14_3354" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19 19) rotate(90) scale(19)">
      <stop/>
      <stop offset="1" stop-color="#454545"/>
      </radialGradient>
      </defs>
    </svg>

    <!-- Signed Out -->
    <div v-if="!user" class="flex items-center space-x-8 text-sm">
      <!-- Login -->
      <router-link :to="{ name: 'Login'}" class="btn btn-black rounded-full py-2 px-5">Login</router-link>
    </div>

    <!-- Signed In -->
    <div v-else class="flex items-center space-x-8 text-sm">
      <!-- Currency -->
      <p class="text-black font-semibold uppercase">gbp</p>
      <!-- Signout -->
      <button @click="signout" class="btn btn-black rounded-full py-2 px-5">Logout</button>
    </div>

  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const signout = () => {
      const auth = getAuth()
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.error(error)
      })
    }

    return {
      signout,
      user: computed(() => store.getters['user/getUser']),
    }
  },
})
</script>

