<template>
  <AuthLayout>
    
    <!-- Page Title -->
    <template v-slot:title>Login</template>

    <!-- Link -->
    <template v-slot:link>
      Don't have an account? <router-link :to="{ name: 'Register'}" class="text-blue-3">Sign up for free</router-link>
    </template>

    <!-- Form -->
    <template v-slot:form>
      <n-form :model="model" ref="formRef" :rules="rules" :label-width="80">
        <div class="flex flex-col gap-y-1">
          <!-- Email -->
          <n-form-item path="email" label="Email">
            <n-input
              v-model:value="model.email"
              @keydown.enter.prevent
              size="large"
              type="text"
              placeholder="Email"
            />
          </n-form-item>
          <!-- Password -->
          <n-form-item path="password" label="Password">
            <n-input
              v-model:value="model.password"
              @keydown.enter.prevent
              size="large"
              type="password"
              show-password-on="mousedown"
              placeholder="Password"
            />
          </n-form-item>
          <!-- Button -->
          <div class="mt-2">
            <n-button 
              @click="validateForm"
              size="large" 
              round 
              block
              type="primary"
            >
              Login
            </n-button>
          </div>
          <!-- Forgot Password -->
          <div class="flex text-center pt-6">
            <router-link class="font-medium w-full text-center" :to="{ name: 'Forgot Password'}">Forgot password?</router-link>
          </div>
        </div>
      </n-form>
    </template>

  </AuthLayout>
</template>

<script>
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import AuthLayout from '@/views/auth/AuthLayout'

export default defineComponent({

  components: {
    AuthLayout,
    NInput,
    NButton,
    NForm,
    NFormItem
  },

  setup () {
    const store = useStore()
    const message = useMessage()
    const formRef = ref(null)
    const modelRef = ref({
      email: null,
      password: null
    })

    // Validate form
    const validateForm = (e) => {
      e.preventDefault()
      formRef.value.validate((errors) => {
        if (!errors) {
          // Form valid
          firebaseLogin()
        } else {
          // Form invalid
          message.error('Please provide a valid email and password')
        }
      })
    }

    // Firebase login
    const firebaseLogin = () => {
      const auth = getAuth()
      const email = modelRef.value.email
      const password = modelRef.value.password

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        message.success('Login successful')
      })
      .catch((error) => {
        // Error
        message.error("Email or password not found")
      })
    }

    return {
      firebaseLogin,
      validateForm,
      formRef,
      model: modelRef,
      rules: {
        email: [
          {
            required: true,
            message: 'Email is required'
          }
        ],
        password: [
          {
            required: true,
            message: 'Password is required'
          }
        ],
      }
    }

  }

})
</script>