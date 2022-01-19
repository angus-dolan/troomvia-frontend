<template>
  <AuthLayout>

    <!-- Page Title -->
    <template v-slot:title>Register</template>

    <!-- Link -->
    <template v-slot:link>
      Already have an account? <router-link :to="{ name: 'Login'}" class="text-blue-3">Login</router-link>
    </template>

    <!-- Form -->
        <!-- Form -->
    <template v-slot:form>
      <n-form :model="model" ref="formRef" :rules="rules" :label-width="80">

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
            Sign Up
          </n-button>
        </div>

        <!-- Legal -->
        <n-form-item>
          <div class="flex text-center text-xs lg:text-sm">
            <p>By proceeding, you agree to Troomvia's <router-link class="transition-300 hover:text-blue-3 font-medium" :to="{ name: 'Login'}">Terms of Use</router-link> & <router-link class="transition-300 hover:text-blue-3 font-medium" :to="{ name: 'Login'}">Privacy Policy</router-link>.</p>
          </div>
        </n-form-item>

      </n-form>
    </template>

  </AuthLayout>
</template>

<script>
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import AuthLayout from '@/views/auth/AuthLayout'

export default defineComponent({

  setup() {
    const store = useStore()
    const message = useMessage()
    const formRef = ref(null)
    const modelRef = ref({
      email: null,
      password: null,
    })

    const validateForm = (e) => {
      e.preventDefault()
      formRef.value.validate((errors) => {
        if (!errors) {
          // Form valid
          firebaseRegister()
        } else {
          // Form invalid
          message.error('Please provide a valid email and password')
        }
      })
    }
    
    const firebaseRegister = () => {
      const auth = getAuth()
      const email = modelRef.value.email
      const password = modelRef.value.password

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registered
        message.success('Welcome')
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') message.error('Email already in use')
        else message.error('A problem occurred, please try again')
      })
    }

    return {
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
            min: 6,
            message: 'Password must be atleast 6 characters'
          }
        ],
      }
    }
  },

  components: { 
    AuthLayout, 
    NForm, 
    NFormItem, 
    NInput, 
    NButton,
  }

})
</script>