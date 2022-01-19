<template>
  <div>
    <div class="flex justify-between">
      <!-- Quantity Held -->
      <h3 class="text-2xl text-black font-bold">12 QNT</h3>
      <!-- Remove Asset -->
      <button class="btn text-sm bg-red text-white rounded-full px-5 py-2">Remove Asset</button>
    </div>

    <div class="my-8 grid grid-cols-12 gap-4">
      <!-- Current Price -->
      <div class="col-span-4 rounded-lg border border-gray-5 p-4">
        <p class="text-gray-3 text-sm pb-2">QNT Current Price</p>
        <h3 class="text-black font-bold text-xl inline-block">£221.25</h3>
        <span class="text-black font-bold text-sm inline-block pl-1">GBP</span>
      </div>
      <!-- Initial Investment -->
      <div class="col-span-4 rounded-lg border border-gray-5 p-4">
        <p class="text-gray-3 text-sm pb-2">Initial Investment</p>
        <h3 class="text-black font-bold text-xl inline-block">£471.56</h3>
        <span class="text-black font-bold text-sm inline-block pl-1">GBP</span>
      </div>
      <!-- Current Value -->
      <div class="col-span-4 rounded-lg border border-gray-5 p-4">
        <p class="text-gray-3 text-sm pb-2">Current Value</p>
        <h3 class="text-black font-bold text-xl inline-block">£2,655</h3>
        <span class="text-black font-bold text-sm inline-block pl-1">GBP</span>
      </div>
    </div>
 
    <!-- Overview History -->
    <History />
  </div>
</template>

<script>
import History from '@/components/overview/History'

export default {
  components: {
    History
  }
}
</script>