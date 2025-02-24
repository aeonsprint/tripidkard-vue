<template>
    <div class="container max-w-[75rem] mx-auto">
        <div id="merchantCarousel" class="carousel relative">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="border rounded p-3 mb-3 search-merchant">
                        <div class="flex justify-between">
                            <div class="mb-2 flex text-gray-600 title-affiliate">
                                <h1 class="text-lg font-bold text-gray-900 dark:text-neutral-100 font-inter">
                                    Merchants Deals and Discounts
                                </h1>
                            </div>
                            <div class="font-onest font-sm text-gray-900 dark:text-neutral-100">
                                See More
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-4 md:grid-cols-4 gap-3">
                        <div v-if="filteredMerchants.length === 0" class="col-span-4 text-center">
                            <div class="max-w-sm mx-auto shadow-lg">
                                <img src="/storage/img/not-found.png" class="w-full h-64 object-cover" alt="No Results" />
                                <div class="p-4">
                                    <h5 class="font-bold">Hmmm, we didn’t find any merchants in your search.</h5>
                                </div>
                            </div>
                        </div>

                        <div v-for="merchant in paginatedMerchants" :key="merchant.id" class="flex flex-col h-full">
                            <div class="relative bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
                                <router-link :to="`/merchants/${merchant.merchant_id}/${merchant.business_name}`">
                                    <div class="relative">
                                        <img :src="merchant.avatar ? `/storage/${merchant.avatar}` : '/storage/img/logo.jpg'"
                                             class="w-full h-56 object-cover"
                                             alt="Merchant Avatar" />

                                        <span v-if="merchant.discount" class="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                                            -{{ merchant.discount }}%
                                        </span>

                                        <!-- Bookmark Button -->
                                        <button @click="toggleBookmark(merchant)" class="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                                            <i class="fa fa-bookmark" :class="merchant.isBookmarked ? 'text-blue-600' : 'text-gray-500'"></i>
                                        </button>
                                    </div>
                                </router-link>

                                <div class="p-4 flex flex-col flex-grow">
                                    <router-link :to="`/merchants/${merchant.merchant_id}/${merchant.business_name}`" class="text-black">
                                        <h5 class="font-bold text-gray-900">{{ merchant.business_name || 'Unknown Merchant' }}</h5>
                                    </router-link>

                                    <p class="text-sm text-gray-600 flex items-center mt-1 min-h-[40px]">
                                        <i class="fa fa-map-marker text-gray-400 mr-1"></i>
                                        {{ merchant.city || 'Unknown City' }}, {{ merchant.province || 'Unknown Province' }}
                                    </p>

                                    <div class="flex justify-between items-center border-t pt-2 text-dark mt-2 flex-grow">
                                        <span class="text-sm text-gray-500">
                                            {{ merchant.business_category || 'No Category' }} > {{ merchant.business_sub_category || 'No Subcategory' }}
                                        </span>
                                        <div class="flex items-center space-x-2">
                                            <i class="fa fa-heart" :class="merchant.isHearted ? 'text-red-500' : 'text-gray-500'"
                                               @click="toggleHeart(merchant)"
                                               style="font-size: 15px; cursor: pointer;"></i>
                                            <span class="text-sm text-gray-600">2.8k</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end items-center mt-4 bg-white p-2 rounded-lg">
                        <button :disabled="currentPage === 1" @click="currentPage--" class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white disabled:bg-gray-300 disabled:text-gray-500">
                            Previous
                        </button>
                        <div class="flex justify-center items-center mx-4">
                            <span v-for="page in totalPages" :key="page" :class="{'bg-blue-500 text-white': currentPage === page, 'bg-white text-blue-500': currentPage !== page}" @click="currentPage = page" class="cursor-pointer px-4 py-2 mx-1 rounded-lg">
                                {{ page }}
                            </span>
                        </div>
                        <button :disabled="currentPage === totalPages" @click="currentPage++" class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white disabled:bg-gray-300 disabled:text-gray-500">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { debounce } from "lodash";

const route = useRoute();
const merchants = ref([]);
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 20;

// Fetch merchants from API
const getMerchants = async () => {
    try {
        const response = await axios.get("/api/merchants", {
            params: {
                category: route.query.category,
                province: route.query.province,
                city: route.query.city,
                query: searchQuery.value,
            },
        });
        merchants.value = response.data;
    } catch (error) {
        console.error("Error fetching merchants:", error);
    }
};

// Watch search query and fetch results
watch(searchQuery, debounce(() => {
    getMerchants();
}, 300));

// Fetch merchants on component mount
onMounted(() => {
    getMerchants();
});

// Filter merchants based on search
const filteredMerchants = computed(() => {
    return merchants.value.filter(merchant =>
        merchant.business_name?.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

// Pagination logic
const totalPages = computed(() => {
    return Math.ceil(filteredMerchants.value.length / itemsPerPage);
});

const paginatedMerchants = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredMerchants.value.slice(start, start + itemsPerPage);
});

// Toggle heart
const toggleHeart = (merchant) => {
    merchant.isHearted = !merchant.isHearted;
};

// Toggle bookmark
const toggleBookmark = (merchant) => {
    merchant.isBookmarked = !merchant.isBookmarked;
};
</script>
