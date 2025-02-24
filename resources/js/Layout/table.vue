<template>
    <div class="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="min-w-full inline-block align-middle">
            <!-- Search Box -->
            <div class="py-3">
              <div class="relative max-w-xs">
                <label for="hs-table-input-search" class="sr-only">Search</label>
                <input
                  type="text"
                  v-model="searchQuery"
                  id="hs-table-input-search"
                  class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Search for items"
                />
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Table -->
            <div :class="['overflow-hidden', filteredData.length ? 'border border-gray-200 shadow-sm rounded-lg' : '']">
              <table class="min-w-full">
                <thead class="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th v-for="(col, index) in columns" :key="index" class="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                      {{ col.label }}
                    </th>
                  </tr>
                </thead>
                <tbody v-if="filteredData.length" class="divide-y divide-gray-200">
                  <tr v-for="(item, index) in filteredData" :key="index">
                    <td v-for="(col, colIndex) in columns" :key="colIndex" class="py-3 px-4 text-sm text-gray-800">
                      <slot v-if="col.key === 'actions'" name="actions" :row="item"></slot>
                      <span v-else>{{ item[col.key] }}</span>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td :colspan="columns.length" class="py-3 px-4 text-sm text-gray-500 text-center">No data found</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            searchQuery: ''
        };
    },
    computed: {
        filteredData() {
            return this.tableData.filter(item =>
                Object.values(item).some(value =>
                    String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
                )
            );
        }
    }
};
</script>
