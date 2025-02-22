<template>
    <!-- Header Section -->
    <header class="flex justify-center items-center p-4 border-b border-gray-200 bg-white">
        <div class="flex items-center space-x-6 w-full max-w-3xl">
            <!-- Logo -->
            <router-link to="/">
                <Logo class="w-20 h-13" />
            </router-link>

             <!-- Button to Open Modal -->
            <BaseButton @click="openModal" name="location">
                <span>Places</span>
                <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </BaseButton>

            <!-- Search Bar -->
            <input type="text" placeholder="Search for deals and discounts"
                class="px-4 py-2 rounded-full bg-gray-100 text-gray-600 flex-1 max-w-lg">

            <!-- Login Button -->
            <BaseButton name="blue" to="/login">Login</BaseButton>
        </div>
    </header>

    <!-- Reusable Modal -->
    <LocationModal :isOpen="isModalOpen" size="md" modalClasses="bg-white border border-gray-300" @close="closeModal" />
</template>

<script>
import Logo from '@/Components/Atoms/Logo.vue';
import BaseButton from '@/Components/Atoms/Button.vue';
import LocationModal from '@/Components/Molecules/LocationModal.vue';

export default {
    components: {
        Logo,
        BaseButton,
        LocationModal,
    },
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
