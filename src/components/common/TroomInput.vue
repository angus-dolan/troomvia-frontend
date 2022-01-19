<template>
  <div>

    <!-- Label -->
    <TroomInputLabel v-if="label">{{label}}</TroomInputLabel>

    <!-- Input -->
    <div class="flex relative items-center">
      <input 
        class="w-full transition-300 flex items-center rounded-lg border-2 p-3 text-sm"
        :class="[errorActive ? 'border-red bg-red bg-opacity-10 border-opacity-50' : 'border-gray-5']"
        :value="value"
        :placeholder="placeholder"
        :type="type"
      >
      <!-- Input Badge -->
      <span class="pointer-events-none text-gray-3 text-sm absolute right-0 mr-3">
        <slot name="badge"></slot>
      </span>
    </div>

    <!-- Error Messages -->
    <div v-if="errorActive" class="text-red text-sm pt-1">{{errorMessage}}</div>

  </div>
</template>

<script>
import TroomInputLabel from '@/components/common/TroomInputLabel'

export default {
  
  props: {
    label: String,

    // Input
    placeholder: String,
    value: String,
    type: String,

    // Error Handling
    errorActive: {
      default: false,
      Type: Boolean,
    },
    errorMessage: String,
  },
  
  computed: {

  },

  components: {
    TroomInputLabel
  }

}
</script>