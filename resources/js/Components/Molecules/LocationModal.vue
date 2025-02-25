<template>
    <BaseModal :isOpen="isOpen" title="Search location" size="md" modalClasses="bg-gray-100" @close="close">
        <!-- Search Input -->
        <div class="relative mb-4">
            <input v-model="searchQuery"
                @input="filterResults"
                type="text"
                :placeholder="isCitySearch ? 'Search city' : 'Search province'"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <!-- City & Province Toggle Buttons -->
        <div class="flex space-x-2 mb-4">
            <BaseButton name="gray" @click="setSearchType(true)">🏙 City</BaseButton>
            <BaseButton name="gray" @click="setSearchType(false)">🌍 Province</BaseButton>
        </div>

        <!-- Suggested Locations -->
        <div v-if="filteredResults.length">
            <h4 class="text-gray-600 font-medium mb-2">Suggested {{ isCitySearch ? 'Cities' : 'Provinces' }}</h4>
            <ul class="space-y-2">
                <li v-for="location in filteredResults" :key="location"
                    @click="selectLocation(location)"
                    class="cursor-pointer flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100">
                    📌 {{ location }}
                </li>
            </ul>
        </div>
    </BaseModal>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import BaseModal from "@/Components/Molecules/BaseModal.vue";
import BaseButton from "@/Components/Atoms/Button.vue";
import { useRouter } from "vue-router";

export default {
    components: { BaseModal, BaseButton },
    props: {
        isOpen: Boolean
    },
    setup(props, { emit }) {
        const searchQuery = ref("");
        const isCitySearch = ref(true);
        const cities = ref([]);
        const provinces = ref([]);
        const filteredResults = ref([]);
        const router = useRouter();

        // Fetch cities and provinces from API
        const fetchLocations = async () => {
            try {
                const response = await axios.get("/api/merchants/locations");
                cities.value = response.data.cities || [];
                provinces.value = response.data.provinces || [];
                filteredResults.value = cities.value; // Default list is cities
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        // Toggle search type
        const setSearchType = (citySearch) => {
            isCitySearch.value = citySearch;
            searchQuery.value = "";
            filteredResults.value = citySearch ? cities.value : provinces.value;
        };

        // Filter results based on search input
        const filterResults = () => {
            const list = isCitySearch.value ? cities.value : provinces.value;
            filteredResults.value = list.filter(item =>
                item.toLowerCase().includes(searchQuery.value.toLowerCase())
            );
        };

        // Handle city/province selection
        const selectLocation = (location) => {
            const queryParam = isCitySearch.value ? { city: location } : { province: location };
            router.push({ path: "/merchant/list", query: queryParam });
            emit("close"); // Close modal
        };

        onMounted(fetchLocations);

        return {
            searchQuery,
            isCitySearch,
            filteredResults,
            setSearchType,
            filterResults,
            selectLocation
        };
    }
};
</script>
