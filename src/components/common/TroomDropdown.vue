<template>
  <div v-click-outside="onClickOutside" class="w-full relative inline-block text-left">
    <div @click.stop="toggleDropdown">
      <button class="p-3 inline-flex justify-between w-full rounded-lg border-2 border-gray-5 shadow-sm bg-white text-sm focus:outline-none" aria-expanded="true" aria-haspopup="true">
        <span class="capitalize">{{items[activeItemID].label}}</span>
        <!-- Heroicon name: solid/chevron-down -->
        <svg :class="{'transform rotate-180' : isExpanded}" class="transition-300 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <!-- Items -->
    <transition name="content-fade">
      <div v-if="isExpanded" class="z-50 origin-top-left absolute left-0 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="p-1" role="none">
          <a 
            @click="selectItem(item)"
            v-for="item in items"
            :key="'item-' + item.id"
            class="flex items-center cursor-pointer text-gray-700 block px-4 py-3 text-sm hover:bg-gray-6 rounded-lg"
            :class="{'font-semibold' : activeItemID == item.id}"
          >
            <div v-if="activeItemID == item.id" class="inline-block mr-2 w-1 h-1 rounded-full bg-blue-3"></div>
            {{item.label}}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'

export default {
  name: 'TroomDropdown',
  emits: ["onSelectItem"],
  props: {
    items: {
      type: Array,
      required: true,
      minLength: 1,
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },  
  data() {
    return {
      activeItemID: 0,
      isExpanded: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.isExpanded = !this.isExpanded
    },
    selectItem(item) {
      this.activeItemID = item.id
      this.isExpanded = false

      // Send to parent
      this.$emit("onSelectItem", this.items[this.activeItemID]);
    },
    onClickOutside () {
      this.isExpanded = false
    }
  },
}
</script>