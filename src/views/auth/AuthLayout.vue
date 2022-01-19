<template>
  <div class="flex flex-col lg:flex-row">
    
    <!-- Info Panel -->
    <div class="flex items-center place-content-center w-full order-2 lg:order-1 lg:h-screen" style="background: #F8F8FA;">
      <div class="container-sm p-12">
        <img class="w-80 mx-auto" src="@/assets/img/app-screenshot-1.png" alt="">
        <h1 class="py-10 text-center font-semibold text-3xl">Track your crypto portfolio</h1>

        <div class="flex flex-col gap-y-4">
          <div class="flex gap-4">
            <div class="flex-initial">
              <svg class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00002 16.2L4.80002 12L3.40002 13.4L9.00002 19L21 7L19.6 5.6L9.00002 16.2Z" fill="#4CAF50"/>
              </svg>
            </div>
            <div class="flex-initial">
              <h5 class="text-base font-semibold">Always Free</h5>
              <p class="text-base text-gray-3">Serving the community is our focus</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-initial">
              <svg class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00002 16.2L4.80002 12L3.40002 13.4L9.00002 19L21 7L19.6 5.6L9.00002 16.2Z" fill="#4CAF50"/>
              </svg>
            </div>
            <div class="">
              <h5 class="text-base font-semibold">Constant development</h5>
              <p class="text-base text-gray-3">Make feature requests and more to shape the platform's advancement</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Form Panel -->
    <div class="w-full order-1 lg:order-2 lg:h-screen p-10 sm:p-20 lg:p-0">
      <div class="flex lg:h-screen items-center">
        <div class="w-96 m-auto">
          <div class="text-center">
            <h3 class="font-bold text-4xl"><slot name="title"></slot></h3>
            <p class="font-medium text-gray-2 py-6"><slot name="link"></slot></p>
           </div>
          <n-divider />
          <slot name="form"></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { NDivider } from 'naive-ui'
 
export default {
  components: { NDivider }
}
</script>