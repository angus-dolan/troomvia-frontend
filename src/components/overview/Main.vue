<template>
  <div class="flex flex-col h-full">

    <!-- Tabs -->
    <div class="text-black flex text-sm gap-12 justify-center align-items-center items-center h-24">
      <button 
        v-for="tab in tabs"
        :key="tab"
        @click="currentTab = tab" 
        class="transition-300 capitalize rounded-full px-6 py-3"
        :class="[
          // active
          { 'btn btn-black hover:opacity-100': currentTab == tab },
          // inactive
          'font-semibold hover:opacity-80'
        ]" 
      >
        {{ tab }}
      </button>
    </div>

    <!-- Panel -->
    <div class="h-full bg-white rounded-xl border border-gray-5 p-12">
      
      <!-- Asset Overview -->
      <transition name="content-fade">
        <div v-if="currentTab == 'overview'">
          <Overview />
        </div>
      </transition>

      <!-- New Transaction -->
      <transition name="content-fade">
        <div v-if="currentTab == 'new transaction'">
          <NewTransaction />
        </div>
      </transition>

    </div>

  </div>
</template>

<script>
import Overview from '@/components/overview/Overview'
import NewTransaction from '@/components/overview/NewTransaction'

export default {
  data(){
    return {
      tabs: ['overview', 'new transaction'],
      currentTab: 'overview' // 'overview' || 'new transaction'
    }
  },
  components: {
    Overview,
    NewTransaction
  }
}
</script>