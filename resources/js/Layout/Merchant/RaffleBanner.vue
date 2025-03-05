<template>
    <div class="mt-4 relative max-w-[70rem] mx-auto flex flex-col items-start">
        <!-- Merchant Tagline -->
        <div class="max-w-[50rem] px-4 sm:px-6 mb-7 lg:px-8 w-full">
            <h1
                class="block text-2xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white text-left">
                We’re offering up to <span class="text-blue-600">{{ merchant.discount || 0 }}%</span> discounts. Hurry,
                big savings await!
            </h1>
        </div>

        <!-- Merchant Info Section -->
        <div class="w-full flex items-center space-x-4 mb-4 px-4">
            <div v-for="(value, key) in merchantInfo" :key="key"
                class="bg-[#f0f6ff] text-gray-700 text-sm font-medium px-3 py-1 rounded-lg">
                <p><strong>{{ key }}:</strong> {{ value }}</p>
            </div>
        </div>

        <!-- Header Section -->
        <div class="w-full flex justify-between items-center mb-2 px-4">
            <div
                class="bg-[#f0f6ff] text-blue-500 text-lg font-semibold px-3 py-1 rounded-lg border-2 border-dashed border-blue-500">
                {{ merchant.discount || 0 }}% Discount Off
            </div>

            <!-- Share Icon -->
            <div class="relative">
                <button @click="toggleSharePopup"
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900 transition duration-200 shadow-md">
                    <i class="fa-solid fa-share"></i>
                </button>

                <!-- Share Popup -->
                <div v-if="showSharePopup" class="absolute right-0 mt-2 bg-white shadow-md rounded-md p-3 w-64">
                    <p class="text-sm text-gray-600">Share this link:</p>

                    <!-- Copy Link -->
                    <div class="flex items-center space-x-2 mt-2">
                        <input type="text" :value="currentURL" class="w-full px-2 py-1 text-sm border rounded" readonly>
                        <button @click="copyLink"
                            class="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
                            {{ copyText }}
                        </button>
                    </div>

                    <!-- Social Media Buttons -->
                    <div class="flex justify-around mt-3">
                        <a :href="facebookShare" target="_blank" class="text-blue-600 hover:text-blue-800">
                            <i class="fa-brands fa-facebook fa-lg"></i>
                        </a>
                        <a :href="twitterShare" target="_blank" class="text-blue-400 hover:text-blue-600">
                            <i class="fa-brands fa-twitter fa-lg"></i>
                        </a>
                        <a :href="whatsappShare" target="_blank" class="text-green-500 hover:text-green-700">
                            <i class="fa-brands fa-whatsapp fa-lg"></i>
                        </a>
                        <a :href="telegramShare" target="_blank" class="text-blue-500 hover:text-blue-700">
                            <i class="fa-brands fa-telegram fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image Section -->
        <div class="overflow-hidden pb-3">
            <div class="flex justify-center items-center w-full h-full">
                <img :src="currentImage" alt="Merchant Banner" class="image-slider" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const merchant = ref({});
const currentIndex = ref(0);
let interval;
const showSharePopup = ref(false);
const copyText = ref("Copy");

// Default images if the merchant has no banners
const defaultImages = [
    '/storage/banner/Sunflower-Maze-750x400-1.webp',
    '/storage/banner/sual.jpg',
    '/storage/banner/Manaoag-Church-is-Famous.webp'
];

// Fetch merchant data based on the clicked merchant
const fetchMerchant = async () => {
    try {
        const response = await axios.get(`/api/merchants/${route.params.merchant_id}/edit`);
        merchant.value = response.data;
    } catch (error) {
        console.error("Error fetching merchant data:", error);
    }
};

// Computed property for merchant info
const merchantInfo = computed(() => ({
    "Address": merchant.value.street
        ? `${merchant.value.street || 'No street'},
           ${merchant.value.city || 'No city'},
           ${merchant.value.province || 'No province'},
           ${merchant.value.zip || 'No zip'}`.trim()
        : "No address provided",
    "Email": merchant.value.user?.email || "No email provided",
    "Phone": merchant.value.user?.contact || "No phone number provided"
}));

// Computed property for images (handling photos dynamically)
const images = computed(() => {
    const photos = [
        merchant.value.photo1 ? `/storage/${merchant.value.photo1}` : null,
        merchant.value.photo2 ? `/storage/${merchant.value.photo2}` : null,
        merchant.value.photo3 ? `/storage/${merchant.value.photo3}` : null
    ].filter(img => img !== null); // Remove null values

    return photos.length ? photos : defaultImages;
});

// Current image based on currentIndex
const currentImage = computed(() => images.value[currentIndex.value]);

// Get current URL for sharing
const currentURL = computed(() => window.location.href);

// Generate Social Media Share Links
const facebookShare = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL.value)}`);
const twitterShare = computed(() => `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL.value)}&text=Check this out!`);
const whatsappShare = computed(() => `https://api.whatsapp.com/send?text=${encodeURIComponent(currentURL.value)}`);
const telegramShare = computed(() => `https://t.me/share/url?url=${encodeURIComponent(currentURL.value)}`);

// Change image for slider
const changeImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Toggle share popup
const toggleSharePopup = () => {
    showSharePopup.value = !showSharePopup.value;
};

// Copy link to clipboard
const copyLink = async () => {
    try {
        await navigator.clipboard.writeText(currentURL.value);
        copyText.value = "Copied!";
        setTimeout(() => {
            copyText.value = "Copy"; // Reset after 2 seconds
        }, 2000);
    } catch (err) {
        console.error("Failed to copy:", err);
    }
};

onMounted(async () => {
    await fetchMerchant(); // Load merchant info
    interval = setInterval(changeImage, 4000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.image-slider {
    width: 70rem;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    transition: opacity 0.5s ease-in-out;
}
</style>
