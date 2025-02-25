<template>
    <div class="p-4  max-w-[75rem] mx-auto">
      <!-- Title -->
      <h2 class="text-2xl font-bold">Merchants Deals and Discounts</h2>
      <p class="text-gray-500">5,000 merchants</p>

      <!-- Search Filter -->
      <div class="mt-4">
        <span class="text-gray-700 font-medium"><i class="fas fa-filter"></i> Search Filter</span>
        <div class="mt-2 flex gap-2">
          <button
            v-for="(filter, index) in filters"
            :key="index"
            @click="selectFilter(filter)"
            :class="{
              'bg-blue-500 text-white border-blue-500': selectedFilter === filter,
              'bg-gray-200 text-gray-700': selectedFilter !== filter
            }"
            class="px-4 py-2 rounded-md border transition-all"
          >
            {{ filter }}
          </button>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        filters: ["Top merchant", "Most likes", "Newest", "Most visited"],
        selectedFilter: "Top merchant",
      };
    },
    methods: {
      selectFilter(filter) {
        this.selectedFilter = filter;
      },
    },
  };
  </script>

  <style scoped>
  button {
    outline: none;
  }
  </style>
