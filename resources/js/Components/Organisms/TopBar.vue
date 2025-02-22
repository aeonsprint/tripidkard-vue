<template>
    <!-- Header Section -->
    <header class="flex justify-center items-center p-4 border-b border-gray-200 bg-white">
        <div class="flex items-center space-x-6 w-full max-w-3xl">
            <!-- Logo -->
            <img src="/storage/img/logo.jpg" alt="Logo" class="w-20 h-13">

            <!-- Button to Open Modal -->
            <button @click="openModal" class="flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600">
                <span>Places</span>
                <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <!-- Search Bar -->
            <input type="text" placeholder="Search for deals and discounts"
                class="px-4 py-2 rounded-full bg-gray-100 text-gray-600 flex-1 max-w-lg">

            <!-- Login Button -->
            <router-link to="/login" type="button"
                class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Login
            </router-link>
        </div>
    </header>
    <!-- Location Selection Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        @click.self="closeModal">
        <div class="bg-white w-96 p-6 rounded-lg shadow-lg relative" @click.stop>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Search location</h3>

            <!-- Search Input -->
            <div class="relative mb-4">
                <input type="text" placeholder="Search location"
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span class="absolute left-3 top-3 text-blue-500">
                </span>
            </div>

            <!-- Buttons -->
            <div class="flex space-x-2 mb-4">
                <button class="flex-1 px-4 py-2 border rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
                    🚀 Nearby
                </button>
                <button class="flex-1 px-4 py-2 border rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
                    🌍 Change City
                </button>
            </div>

            <!-- Suggested Locations -->
            <div>
                <h4 class="text-gray-600 font-medium mb-2">Suggested location</h4>
                <ul class="space-y-2">
                    <li class="cursor-pointer flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100">
                        📌 Dagupan City
                    </li>
                    <li class="cursor-pointer flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100">
                        📌 Calasiao
                    </li>
                    <li class="cursor-pointer flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100">
                        📌 Lingayen
                    </li>
                </ul>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isModalOpen: false
        };
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    }
};
</script>
