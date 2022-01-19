<template>
  <div class="flex flex-col h-full justify-between">
    
    <!-- Add Asset -->
    <AddAssetDialog
      :active="addAssetActive"
      @close="addAssetActive = false"
    />

    <!-- Assets -->
    <div class="flex flex-col gap-2">
      <!-- Quant -->
      <div class="cursor-pointer flex gap-4 items-center bg-gray-7 rounded-xl p-3 hover:bg-gray-7 transition duration-200 ease-in-out">
        <div class="flex items-center shadow-sm bg-white w-14 h-14 rounded-full">
          <img class="w-7 h-7 mx-auto" src="@/assets/img/qnt.png" alt="">
        </div>
        <div>
          <h5 class="font-semibold text-black">Quant</h5>
          <p class="text-gray-3 text-sm">QNT</p>
        </div>
      </div>
      <!-- BAT -->
      <div class="cursor-pointer flex gap-4 items-center rounded-xl p-3 hover:bg-gray-7 transition duration-200 ease-in-out">
        <div class="flex items-center shadow-sm bg-white w-14 h-14 rounded-full">
          <img class="w-7 h-7 mx-auto" src="@/assets/img/bat.png" alt="">
        </div>
        <div>
          <h5 class="font-semibold text-black">Basic Attention Token</h5>
          <p class="text-gray-3 text-sm">BAT</p>
        </div>
      </div>
    </div>
    
    <!-- Add Asset -->
    <button @click="addAssetActive = true" class="btn btn-black rounded-full w-full py-4">
      <svg class="inline-block pb-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.75V18.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.25 12H5.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      New Asset
    </button>

  </div>
</template>

<script>
import AddAssetDialog from '@/components/assets/AddAssetDialog'

export default {

  data() {
    return {
      addAssetActive: false,
    }
  },

  components: {
    AddAssetDialog
  }

}
</script>