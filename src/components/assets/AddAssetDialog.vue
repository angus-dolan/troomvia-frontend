<template>
  <teleport to="body">
    <!-- Backdrop -->
    <div 
      class="flex items-center bg-tint h-screen w-screen top-0 left-0 absolute overflow-hidden"
      v-if="active" 
    >
      
      <!-- Dialog Content -->
      <div v-click-outside="onCloseDialog" class="flex-1 bg-white rounded-xl max-w-4xl mx-auto">

        <!-- Header -->
        <div class="p-10 pb-0">
          <div class="flex justify-between items-center">
            <!-- Dialog Title -->
            <div class="font-bold text-2xl">New Assets</div>
            <!-- Close Button -->
            <button @click="onCloseDialog">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3332 8.54666L23.4532 6.66666L15.9998 14.12L8.5465 6.66666L6.6665 8.54666L14.1198 16L6.6665 23.4533L8.5465 25.3333L15.9998 17.88L23.4532 25.3333L25.3332 23.4533L17.8798 16L25.3332 8.54666Z" fill="#181819" fill-opacity="0.9"/>
              </svg>
            </button>
          </div>
          <!-- Search Input -->
          <div class="py-8">
            <input 
              class="w-full text-sm focus:border-blue-4 transition-300 rounded-lg p-4 border-2 border-gray-6"
              placeholder="Search for coins"
              type="text"
            >
          </div>
        </div>

        <!-- Results -->
        <div class="results flex flex-col gap-y-4 p-10 overflow-y-scroll">
          
          <div 
            @click="onClickCoin(coin)"
            class="flex-1"
            v-for="coin in coins"
            :key="'coin-' + coin.id"
          >
            <div 
              class="cursor-pointer transition-300 bg-white shadow-sm flex items-center p-4 rounded-lg border border-gray-6 hover:border-blue-3 hover:bg-blue-10"
              :class="{'border-blue-3 hover:border-blue-3 bg-blue-10 hover:bg-opacity-30 bg-opacity-30 hover:border-opacity-25 border-opacity-25 hover:none' : isCoinSelected(coin)}"
            >
              <div class="flex items-center bg-white shadow-lg rounded-lg w-8 h-8 text-green-2">
                <transition name="slide-fade">
                  <svg v-if="isCoinSelected(coin)" xmlns="http://www.w3.org/2000/svg" class="mx-auto pointer-events-none h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </transition>
              </div>
              <img class="w-6 h-6 ml-6 mr-2" :src="getImgUrl(coin)" alt="">
              <div class="font-semibold text-black">{{coin.name}}</div>
              <div class="pl-4 text-gray-4">{{coin.ticker}}</div>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between p-10">

          <!-- Selected Coin Chips -->
          <div class="flex items-center -space-x-4 overflow-hidden">
            <div 
              v-for="coin in selectedCoins.slice(0, 3)"
              :key="'coin-chip-' + coin.id"
              class="flex items-center bg-white border-2 border-gray-6 h-16 w-16 rounded-full"
            >
              <img class="w-8 h-8 mx-auto" :src="getImgUrl(coin)" alt="">
            </div>
            <div v-if="selectedCoins.length > 3" class="text-gray-3 pl-8">+ {{selectedCoins.length - 3}} more</div>
          </div>
          
          <!-- Done Button -->
          <button class="btn btn-black flex items-center gap-4 px-8 h-16 rounded-full">
            Done
            <svg class="fill-current inline-block w-5 h-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.7498 12.1502L3.5998 9.0002L2.5498 10.0502L6.7498 14.2502L15.7498 5.2502L14.6998 4.2002L6.7498 12.1502Z"/>
            </svg>
          </button>

        </div>

      </div>

    </div>
  </teleport>
</template>

<script>
import vClickOutside from 'click-outside-vue3'

export default {
  name: 'AddAssetDialog',

  emits: ['close'],

  directives: {
    clickOutside: vClickOutside.directive
  },  

  props: {
    active: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      coins: [
        {id: 0, name: 'Bitcoin', ticker: 'BTC'},
        {id: 1, name: 'Quant', ticker: 'QNT'},
        {id: 2, name: 'Basic Attention Token', ticker: 'BAT'},
        {id: 3, name: 'Ethereum', ticker: 'ETH'},
        {id: 4, name: 'Neo', ticker: 'NEO'},
        {id: 5, name: 'Uniswap', ticker: 'UNI'},
        {id: 6, name: 'Algorand', ticker: 'ALGO'},
        {id: 7, name: 'Chainlink', ticker: 'LINK'},
        {id: 8, name: 'XRP', ticker: 'XRP'},
        {id: 9, name: 'Cardano', ticker: 'ADA'},
      ],
      selectedCoins: []
    }
  },

  methods: {
    onCloseDialog() {
      this.$emit('close')
    },
    getImgUrl(coin) {
      let images = require.context('@/assets/img/', false, /\.png$/)
      return images('./' + coin.ticker.toLowerCase() + ".png")
    },
    onClickCoin(coin) {
      if (this.isCoinSelected(coin) === false) this.selectedCoins.push(coin) // Add coin
      else this.selectedCoins.splice(this.selectedCoins.findIndex(c => c.id === coin.id), 1) // Remove coin
    },
    isCoinSelected(targetCoin) {
      return this.selectedCoins.some(coin => coin.ticker === targetCoin.ticker);
    },
  },

}
</script>

<style lang="scss" scoped>
.results {
  max-height: calc(100vh / 2);
  box-shadow: inset 0px 4px 20px rgba(215, 205, 205, 0.25);
  background: #FDFDFD;
}
</style>