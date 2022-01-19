<template>
  <div id="app" class="flex gradient-bg h-screen w-screen">
    <div class="container-fluid w-full mx-10">
      <div style="height: 10vh">
        <Header/>
      </div>
      <div class="flex gap-8 pb-6" style="height: 90vh">
        <div class="flex-none w-1/5 h-full">
          <Assets/>
        </div>
        <div class="flex-grow h-full">
          <AssetOverview/>
        </div>
        <div class="flex-none w-1/4">
          <PortfolioSummary/>
        </div>
     </div>
    </div>
    
  </div>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import Header from '@/components/Header'
import Assets from '@/components/assets/Assets'
import AssetOverview from '@/components/overview/Main'
import PortfolioSummary from '@/components/PortfolioSummary'

export default defineComponent({

  components: {
    Header,
    Assets,
    AssetOverview,
    PortfolioSummary
  }

})
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(248.66deg, #DEE9FF 0%, #F2F3F5 44.79%, #F3F4F6 100%);
}
</style>


