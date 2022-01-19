<template>
  <div class="relative overflow-hidden h-full bg-white bg-opacity-50 rounded-xl border border-gray-5">

    <!-- Grid Pattern -->
    <div 
      class="grid-pattern absolute h-full w-full top-24"
      :style="{'background-image': 'url(' + require('../assets/svg/bg-grid-pattern.svg') + ')'}"
    ></div>

    <!-- Content -->
    <div class="flex flex-col justify-between absolute w-full h-full">
      <div>
        <div class="flex items-center px-8 h-24">
          <h1 class="font-bold text-xl">Portfolio Summary</h1>
        </div>

        <!-- Assets -->
        <div class="flex flex-col gap-y-6 p-8">
          <!-- -->
          <div class="flex gap-4 items-center font-bold text-green-1">
            <div class="border border-gray-5 bg-white w-12 h-12 rounded-full">
              <img class="object-contain p-3" src="@/assets/img/qnt.png" alt="">
            </div>
            <h5 class="flex-grow">QNT</h5>
            <h5 class="flex-initial">1.68x</h5>
          </div>
          <!-- -->
          <div class="flex gap-4 items-center font-bold text-red">
            <div class="border border-gray-5 bg-white w-12 h-12 rounded-full">
              <img class="object-contain p-3" src="@/assets/img/bat.png" alt="">
            </div>
            <h5 class="flex-grow">BAT</h5>
            <h5 class="flex-initial">0.41x</h5>
          </div>
        </div>
      </div>

      <!-- Metrics -->
      <div class="grid grid-cols-12 gap-x-4 gap-y-12 p-8">
        <!-- Initial Invesment -->
        <div class="col-span-6">
          <p class="text-gray-3 text-sm pb-2">Initial Investment</p>
          <h3 class="text-black font-bold text-xl inline-block">£947.56</h3>
          <span class="text-black font-bold text-sm inline-block pl-1">GBP</span>
        </div>
        <!-- Final Value -->
        <div class="col-span-6">
          <p class="text-gray-3 text-sm pb-2">Final Value</p>
          <h3 class="text-green-1 font-bold text-xl inline-block">£986.00</h3>
          <span class="text-green-1 font-bold text-sm inline-block pl-1">GBP</span>
        </div>
        <!-- Portfolio ROI -->
        <div class="col-span-6">
          <h1 class="text-green-1 font-bold text-3xl">1.04x</h1>
        </div>
        <!-- Portfolio Percentage Change -->
        <div class="col-span-6">
          <div class="bg-green-1 text-white font-semibold py-2 text-center text-sm rounded-full">+ 4.05%</div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.grid-pattern {
  -webkit-mask-image: linear-gradient(to bottom, rgba(255,255,255,.3), transparent);
  mask-image: linear-gradient(to bottom, rgba(255,255,255,.3), transparent);
  background-position: -10px 0;
}
</style>


