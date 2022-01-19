<template>
  <div>

    <div class="flex justify-between items-center border-b border-gray-5 h-16">
      <div class="flex h-16 gap-x-20">
        <h5 class="flex items-center text-lg font-semibold text-black pb-1">History</h5>
        <!-- Tabs -->
        <div class="flex gap-x-10">
          <button 
            v-for="tab in tabs"
            :key="tab"
            @click="currentTab = tab" 
            class="transition-300 capitalize"
            :class="[
              // active
              { 'text-opacity-100 font-semibold text-blue-3 border-b-2 border-blue-3': currentTab == tab },
              // inactive
              'text-black text-opacity-50'
            ]" 
          >
            {{ tab }}
          </button>
        </div>
      </div>
      <!-- Pagination -->
      <span class="text-black text-sm">
        1 of 1
      </span>
    </div>

    <!-- Tabs -->
    <transition name="content-fade" v-for="tab in tabs" :key="tab + '-tab'">
      <div v-if="currentTab == tab" class="flex pt-8">
        <div class="flex-1 notification-section">
          <div class="notification-grid items-center">

            <div 
              class="flex items-center avatar relative  rounded-full w-12 h-12"
              :class="
              {
                'bg-green-1' : tab == 'buy', 
                'bg-red' : tab == 'sell', 
                'bg-blue-1' : tab == 'transfers'
              }"
            >
              <!-- Buy Icon -->
              <svg class="mx-auto w-6 h-6" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75005 12.15L3.60005 9L2.55005 10.05L6.75005 14.25L15.75 5.25L14.7 4.2L6.75005 12.15Z" fill="white"/>
              </svg>
              <!-- Sell Icon -->
              <!-- <svg class="text-white mx-auto w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
              </svg> -->
              <!-- Transfer Icon -->
              <!-- <svg class="text-white mx-auto w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 8.25V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 13C16.5 13.2761 16.2761 13.5 16 13.5C15.7239 13.5 15.5 13.2761 15.5 13C15.5 12.7239 15.7239 12.5 16 12.5C16.2761 12.5 16.5 12.7239 16.5 13Z"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 8.25H6.5C5.5335 8.25 4.75 7.4665 4.75 6.5C4.75 5.5335 5.5335 4.75 6.5 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V8.25ZM17.25 8.25H19.25"></path>
              </svg> -->
            </div>
            <div class="notification-card hover:bg-gray-6 p-2 rounded-lg transition duration-300 ease-in-out">
              <div class="flex">
                <div class="flex-grow flex-row">
                  <div class="text-black font-semibold flex-1">15 December 2021</div>
                  <div class="text-gray-4">Bought 4 QNT @ £221.56 QNT/GBP</div>
                </div>
                <div class="flex items-center cursor-pointer text-red text-sm">Remove</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </transition>
      
  </div>
</template>

<script>
export default {

  data(){
    return {
      tabs: ['buy', 'sell', 'transfers'],
      currentTab: 'buy'
    }
  },

}
</script>

<style>
:root {
  --subdued-color: #E0E0E0;
  --avatar-size: 48px;
  --grid-gap: 1rem;
}

.notification-section {
  margin-bottom: 2rem;
}

.notification-section:last-child {
  margin-bottom: 0;
}

.notification-grid {
  display: grid;
  grid-template-columns: var(--avatar-size) 1fr;
  grid-auto-rows: auto;
  gap: var(--grid-gap);
  width: 100%;
}

.avatar::after {
  content: "";
  position: absolute;
  background-color: var(--subdued-color);
  width: 2px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: var(--avatar-size);
  bottom: calc(var(--grid-gap) * -2);
}

.avatar:first-child::before {
  content: "";
  position: absolute;
  background-color: var(--subdued-color);
  width: 1px;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 100%;
}

.avatar:nth-last-child(2)::after {
  display: none;
}
</style>