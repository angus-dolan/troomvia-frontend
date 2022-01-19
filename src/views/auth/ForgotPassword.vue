<template>
  <AuthLayout>

    <!-- Page Title -->
    <template v-slot:title>Forgot Password</template>

    <!-- Link -->
    <template v-slot:link>
      Remembered it? <router-link :to="{ name: 'Login'}" class="text-blue-3">Login</router-link>
    </template>

    <!-- Form -->
    <template v-slot:form>
      <n-form :model="model" ref="formRef" :rules="rules" :label-width="80">
        <!-- Success Alert -->
        <transition name="content-fade">
          <n-alert v-if="successAlert" class="mb-4" title="Email sent!" type="success">
            If an account exists with the email provided a reset password link will be arrive in your inbox.
          </n-alert>
        </transition>

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
        
        <!-- Button -->
        <div class="mt-2">
          <n-button 
            @click="validateForm"
            size="large" 
            round 
            block
            type="primary"
          >
            Send email
          </n-button>
        </div>

      </n-form>
    </template>

  </AuthLayout>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { NAlert, NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import AuthLayout from '@/views/auth/AuthLayout'
import { defineComponent, ref } from 'vue'

export default defineComponent({

  setup() {
    const successAlert = ref(false)
    const message = useMessage()
    const formRef = ref(null)
    const modelRef = ref({
      email: null,
    })

    const validateForm = (e) => {
      successAlert.value = false 
      e.preventDefault()
      formRef.value.validate((errors) => {
        if (!errors) {
          // Form valid
          firebaseSendPassReset()
        } else {
          // Form invalid
          message.error('Please check email provided is correct')
        }
      })
    }

    const firebaseSendPassReset = () => {
      const auth = getAuth()
      const email = modelRef.value.email

      sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent
      })

      // Always show success alert
      successAlert.value = true 
    }

    return {
      successAlert,
      firebaseSendPassReset,
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
      }
    }
  },

  components: { NAlert, AuthLayout, NForm, NFormItem, NInput, NButton }
})
</script>