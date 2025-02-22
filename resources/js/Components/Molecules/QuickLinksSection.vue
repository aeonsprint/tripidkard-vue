<template>
    <div class="text-center">
      <h4 class="text-sm font-bold text-gray-900 uppercase dark:text-neutral-100 font-inter">
        {{ title }}
      </h4>
      <div class="mt-3 space-y-2 text-sm">
        <p v-for="link in links" :key="link.text" class="font-onest">
          <a
            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
            :href="link.href"
          >
            {{ link.text }}
          </a>
        </p>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      links: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
