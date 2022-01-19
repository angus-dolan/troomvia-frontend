<template>
  <div class="max-w-lg mx-auto">
    
    <!-- Form -->
    <div class="grid grid-cols-12 gap-4">

      <!-- Transaction Type -->
      <div class="col-span-12">
        <div class="flex bg-gray-6 rounded-lg p-1 text-sm gap-x-4">
          <button 
            v-for="type in transactionTypes"
            :key="type"
            @click="form.type = type" 
            class="capitalize rounded-lg w-1/3 py-2 font-medium"
            :class="[
              // active
              { 'bg-white': form.type === type },
              // inactive
              ''
            ]" 
          >
            {{ type }}
          </button>
        </div>
      </div>

      <!-- Asset Name -->
      <div class="col-span-12 flex items-center gap-x-4 rounded-lg border-2 border-gray-6 p-4 text-sm">
        <img class="w-5" src="@/assets/img/qnt.png" alt="">
        <h5 class="font-semibold">Quant</h5>
        <p class="text-gray-3">QNT</p>
      </div>

      <!-- Date-->
      <div class="col-span-6">
        <TroomInputLabel>Date</TroomInputLabel>
        <Datepicker 
          v-model="form.date" 
          :inputFormat="'do MMMM y'"
          :upperLimit="dateLimit"
          :typeable="true"
        />
      </div>
      <div class="col-span-6">
        <TroomInputLabel>Time</TroomInputLabel>
        <Datepicker 
          v-model="form.time" 
          :inputFormat="'HH:mm'"
          :startingView="'time'"
          :minimumView="'time'"
          :upperLimit="dateLimit"
        />
      </div>

      <!-- Transfer In/Out -->
      <div v-if="form.type == 'transfer'" class="col-span-12">
        <!-- Label -->
        <TroomInputLabel>Transfer</TroomInputLabel>
        <!-- Dropdown -->
        <TroomDropdown 
          @onSelectItem="onSelectTransferType"
          :items="[
            {id: 0, label: 'Transfer In'},
            {id: 1, label: 'Transfer Out'}
          ]"
        />
      </div>

      <!-- Quantity -->
      <div class="col-span-6">
        <!-- Label -->
        <div class="form-label text-sm font-medium mb-3">Quantity</div>
        <!-- Input -->
        <div class="flex relative items-center">
          <input 
            class="w-full transition-300 flex items-center rounded-lg border-2 p-3 text-sm"
            :class="[v$.form.quantity.$error ? 'border-red bg-red bg-opacity-10 border-opacity-50' : 'border-gray-5']"
            v-model="form.quantity"
            type="number"
          >
          <span class="text-gray-3 text-sm absolute right-0 mr-3">QNT</span>
        </div>
        <!-- Error Messages -->
        <div v-if="v$.form.quantity.$error" class="text-red text-sm pt-1">{{v$.form.quantity.$errors[0].$message}}</div>
      </div>

      <!-- Price Per Coin -->
      <div class="col-span-6">
        <!-- Label -->
        <div class="form-label text-sm font-medium mb-3">Price Per Coin</div>
        <!-- Input -->
        <div class="flex relative items-center">
          <input 
            class="w-full transition-300 flex items-center rounded-lg border-2 p-3 text-sm"
            :class="[v$.form.pricePerCoin.$error ? 'border-red bg-red bg-opacity-10 border-opacity-50' : 'border-gray-5']"
            v-model="form.pricePerCoin"
            type="number"
          >
          <span class="text-gray-3 text-sm absolute right-0 mr-3">GBP</span>
        </div>
        <!-- Error Messages -->
        <div v-if="v$.form.pricePerCoin.$error" class="text-red text-sm pt-1">{{v$.form.pricePerCoin.$errors[0].$message}}</div>
      </div>
        
      <!-- Fee -->
      <div class="col-span-12">
        <div class="form-label text-sm font-medium mb-3">Fee</div>
        <div class="flex relative items-center">
          <input 
            class="w-full transition-300 flex items-center rounded-lg border-2 p-3 text-sm"
            :class="[v$.form.fee.$error ? 'border-red bg-red bg-opacity-10 border-opacity-50' : 'border-gray-5 bg-gray-6']"
            v-model="form.fee"
            type="number"
          >
          <span class="text-gray-3 text-sm absolute right-0 mr-3">GBP</span>
        </div>
        <div v-if="v$.form.fee.$error" class="text-red text-sm pt-1">{{v$.form.fee.$errors[0].$message}}</div>
      </div>

      <!-- Amount -->
      <div v-if="form.type == 'buy' || form.type == 'sell'" class="col-span-12">
        <div class="form-label text-sm font-medium mb-3 capitalize">{{amountLabel}}</div>
        <div class="flex justify-center pt-8 text-black">
          <div class="flex-initial text-2xl font-semibold mr-1">£</div>
          <h2 class="flex-initial text-7xl font-semibold">150.00</h2>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="col-span-12 pt-8">
        <button 
          class="w-1/2 block mx-auto rounded-full py-3 transition-300 text-white bg-blue-3 hover:bg-blue-2"
          @click="submit"
        >
          Continue
        </button>
      </div>

    </div>

  </div>
</template>

<script>
import TroomDropdown from '@/components/common/TroomDropdown'
import TroomInputLabel from '@/components/common/TroomInputLabel'
import Datepicker from 'vue3-datepicker'

// Validation packages
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

// Custom validators
const greaterThanZero = (value) => value > 0;
const notLessThanZero = (value) => value >= 0;

export default {

  components: {
    TroomDropdown,
    TroomInputLabel,
    Datepicker
  },

  setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      transactionTypes: ['buy', 'sell', 'transfer'],
      transferTypes: ['transfer in', 'transfer out'],
      dateLimit: new Date(), // date picker limit
      form: {
        type: 'buy', // 'buy' || 'sell' || 'transfer'
        transfer: 0, // position in transferTypes[]
        quantity: 0.00,
        pricePerCoin: 221.25,
        date: new Date(),
        time: new Date(),
        fee: 0,
        notes: '',
      }
    }
  },

  validations () {
    return {
      form: {
        quantity: { 
          required: helpers.withMessage('Quantity cannot be empty', required),
          greaterThanZero: helpers.withMessage('Quantity must be greater than zero', greaterThanZero)
        },
        pricePerCoin: { 
          required: helpers.withMessage('Price cannot be empty', required),
          greaterThanZero: helpers.withMessage('Price must be greater than zero', greaterThanZero)
        },
        fee: { 
          notLessThanZero: helpers.withMessage('Fee must be zero or more', notLessThanZero)
        }
      }
    }
  },

  methods: {
    onSelectTransferType(value) {
      this.form.transfer = value.id
    },
    async submit () {
      const result = await this.v$.$validate()
      if (!result) {
        // notify user form is invalid
        return
      }
      // perform async actions
    }
  },

  computed: {
    amountLabel: function() {
      if (this.form.type == 'buy') return 'Total Spent'
      if (this.form.type == 'sell') return 'Total Received'
      return ''
    },
    dateTimeSelected: function() {
      return [this.form.date, this.form.time].join()
    }
  },

  watch: {
    'dateTimeSelected': function() {
      let now = new Date()
      if (this.form.date > now) this.form.date = now
      if (this.form.time > now) this.form.time = now
    }
  }

}
</script>