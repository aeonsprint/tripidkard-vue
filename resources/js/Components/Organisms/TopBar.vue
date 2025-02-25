<template>
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

            <!-- Search Bar (Triggers Search on Enter) -->
            <input v-model="searchQuery"
                @keyup.enter="searchDiscount"
                type="text"
                placeholder="Search for deals and discounts"
                class="px-4 py-2 rounded-full bg-gray-100 text-gray-600 flex-1 max-w-lg">

            <!-- Login Button -->
            <BaseButton name="blue" to="/login">Login</BaseButton>
        </div>
    </header>

    <!-- Reusable Modal -->
    <LocationModal :isOpen="isModalOpen" size="md" modalClasses="bg-white border border-gray-300" @close="closeModal" />
</template>

<script>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Logo from '@/Components/Atoms/Logo.vue';
import BaseButton from '@/Components/Atoms/Button.vue';
import LocationModal from '@/Components/Molecules/LocationModal.vue';

export default {
    components: {
        Logo,
        BaseButton,
        LocationModal,
    },
    setup() {
        const searchQuery = ref('');
        const router = useRouter();
        const route = useRoute();
        const isModalOpen = ref(false);

        const openModal = () => { isModalOpen.value = true; };
        const closeModal = () => { isModalOpen.value = false; };

        // Redirect to merchant list with discount query when Enter is pressed and force reload
        const searchDiscount = () => {
            if (searchQuery.value.trim() !== '') {
                router.push({ path: "/merchant/list", query: { discount: searchQuery.value } }).then(() => {
                    window.location.reload(); // Force reload to apply query changes
                });
            }
        };

        // Auto-fill input if there's an existing discount query
        watch(() => route.query.discount, (newDiscount) => {
            searchQuery.value = newDiscount || '';
        }, { immediate: true });

        return {
            isModalOpen,
            openModal,
            closeModal,
            searchQuery,
            searchDiscount
        };
    }
};
</script>
