<template>
    <a class="inline-block" :href="href" target="_blank">
      <slot></slot>
    </a>
  </template>

  <script>
  export default {
    props: {
      href: {
        type: String,
        required: true,
      },
    },
  };
  </script>
