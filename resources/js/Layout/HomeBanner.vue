<template>
    <!-- Banner section -->
    <div class="relative w-full h-screen overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
        :style="{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '90vh',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.2) 90%)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.2) 90%)',
        }"
      ></div>
    </div>
    <CarosuelLogo />


    <section class="bg-white dark:bg-gray-900">
    <div class="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 classfont-inter="font-inter mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Story</h2>
            <p class="mb-4 font-onest">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p class="font-onest">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-8">
            <img class="w-full h-96   rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
        </div>
    </div>
</section>


<section class="bg-white dark:bg-gray-900 py-10">
  <h2 class="font-inter text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center py-8">
    Trusted by (30 Merchants)
  </h2>

  <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-1 lg:px-6">
    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <p class="mb-2 font-inter tracking-tight text-[#1c54e3] dark:text-white">Our Story</p>
      <h2 class="font-inter mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Our Clients' Success Stories
      </h2>
      <button type="submit" class="  w-34 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
        Add to Bag
      </button>
    </div>

    <div class="grid grid-cols-1 gap-2 mt-8 bg-[#f0f6ff]">
      <div class="w-full h-96 flex flex-col items-center justify-center gap-8">
        <h1 class="text-2xl text-gray-600 leading-relaxed text-center font-onest w-4/5">
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        </h1>
        <div class="flex items-center gap-4">
          <div class="rounded-full w-12 h-12 bg-black overflow-hidden">
            <img src="https://rairaksa.github.io/assets/img/rai.jpg" />
          </div>
          <div class="flex flex-col tracking-wider">
            <label class="text-gray-600 font-bold text-base font-onest">Rai Raksa Muhamad</label>
            <label class="text-gray-400 font-normal text-sm font-onest">Fullstack PHP Developer</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  </template>

  <script>
import CarosuelLogo from '@/Components/Organisms/CarosuelLogo.vue';

  export default {
    components: {
            CarosuelLogo
        },

    data() {

      return {
        image: "/storage/banner/tripidkard.png",
      };
    },
  };
  </script>
