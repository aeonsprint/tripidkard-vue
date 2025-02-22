<template>
    <div class="mt-4 relative max-w-[90rem] flex justify-center items-center">
      <div class="overflow-hidden pb-3">
        <!-- Animated Image Section -->
        <div class="animate-scroll flex space-x-5 px-4">
          <!-- Loop through images here -->
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            alt="Animated Image"
            class="w-1/4 h-auto flex-shrink-0 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </template>

  <script setup>
  const images = [
    '/storage/img/logo.jpg',
    '/storage/photos/noimage.png',
    '/storage/img/logo.jpg',
    '/storage/photos/noimage.png',
    '/storage/img/logo.jpg',
    '/storage/photos/noimage.png',
    // Add more images as needed
  ];
  </script>

  <style scoped>
  /* Keyframes for horizontal scroll animation */
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  /* Apply animation to the image container */
  .animate-scroll {
    display: flex;
    animation: scroll 40s linear infinite;
  }
  </style>
