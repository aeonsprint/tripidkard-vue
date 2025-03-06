<template>
    <div class="mt-4 relative max-w-[68rem] mx-auto flex justify-center items-center">
        <div class="overflow-hidden pb-3 w-[70rem] h-[400px]">
            <!-- Fixed Width and Height -->
            <div class="flex justify-center items-center w-full h-full">
                <img
                    :src="images[currentIndex]"
                    alt="Image"
                    class="image-slider"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = [
    '/storage/banner/Sunflower-Maze-750x400-1.webp',
    '/storage/banner/sual.jpg',
    '/storage/banner/Manaoag-Church-is-Famous.webp',
    '/storage/banner/10-Must-Visit-Places-in-Pangasinan-That-Are-Perfect-for-Kids-and-the-Whole-Family.webp',
];

const currentIndex = ref(0);

// Change image every 3 seconds
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
