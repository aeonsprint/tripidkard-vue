<template>
    <div class="mt-4 relative max-w-[70rem] mx-auto flex flex-col items-start"> <!-- Change this to items-start -->
        <!-- Merchant Tagline -->
        <div class="max-w-[50rem] px-4 sm:px-6 mb-7 lg:px-8 w-full">
            <h1 class="block text-2xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white text-left"> <!-- Added text-left -->
                We’re offering up to <span class="text-blue-600">50%</span>  discounts. Hurry, big savings await!
            </h1>
        </div>

        <!-- Merchant Info Section (Inline format) -->
        <div class="w-full flex items-center space-x-4 mb-4 px-4">
            <div v-for="(value, key) in merchantInfo" :key="key" class="bg-[#f0f6ff] text-gray-700 text-sm font-medium px-3 py-1 rounded-lg">
                <p><strong>{{ key }}:</strong> {{ value }}</p>
            </div>
        </div>

        <!-- Header Section (Above Image) -->
        <div class="w-full flex justify-between items-center mb-2 px-4">
            <!-- Discount Badge (Left Side) -->
            <div class="bg-[#f0f6ff] text-blue-500 text-lg font-semibold px-3 py-1 rounded-lg border-2 border-dashed border-blue-500">
                25% Discount Off
            </div>

            <!-- Icons (Right Side) -->
            <div class="flex space-x-3">
                <button class="p-2 bg-[#f0f6ff] rounded-full shadow-md hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 12v8h16v-8"></path>
                        <path d="M16 6l-4-4-4 4"></path>
                        <path d="M12 2v12"></path>
                    </svg>
                </button>
                <button class="p-2 bg-[#f0f6ff] rounded-full shadow-md hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 21l-7-5-7 5V5a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4z"></path>
                    </svg>
                </button>
                <button class="p-2 bg-[#f0f6ff] rounded-full shadow-md hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4"></path>
                        <path d="M4 4h16"></path>
                        <path d="M8 2h8"></path>
                        <path d="M12 8v8"></path>
                        <path d="M8 12h8"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Image Section -->
        <div class="overflow-hidden pb-3 w-[70rem] h-[400px]">
            <div class="flex justify-center items-center w-full h-full">
                <img :src="images[currentIndex]" alt="Image" class="image-slider" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const merchantInfo = ref({
    "Address": "123 Sunflower St., Pangasinan, Philippines",
    "Email": "sunflowercafe@email.com",
    "Phone": "+63 912 345 6789"
});

const images = [
    '/storage/banner/Sunflower-Maze-750x400-1.webp',
    '/storage/banner/sual.jpg',
    '/storage/banner/Manaoag-Church-is-Famous.webp',
    '/storage/banner/10-Must-Visit-Places-in-Pangasinan-That-Are-Perfect-for-Kids-and-the-Whole-Family.webp',
];

const currentIndex = ref(0);

// Change image every 4 seconds
let interval;

const changeImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

onMounted(() => {
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
    object-fit: cover; /* Ensures the image maintains aspect ratio while covering */
    border-radius: 10px;
    transition: opacity 0.5s ease-in-out;
}
</style>
