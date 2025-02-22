<template>
    <ol class="flex items-center w-full max-w-[68rem] mx-auto whitespace-nowrap my-7">
        <li v-for="(item, index) in breadcrumbItems" :key="index" class="inline-flex items-center">
            <a v-if="index !== breadcrumbItems.length - 1"
                class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                href="#">
                {{ item }}
            </a>
            <span v-else class="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                aria-current="page">
                {{ item }}
            </span>
            <svg v-if="index !== breadcrumbItems.length - 1"
                class="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"></path>
            </svg>
        </li>
    </ol>
</template>

<script>
export default {
    computed: {
        breadcrumbItems() {
            return this.$route.meta.breadcrumb ? this.$route.meta.breadcrumb.split('/') : [];
        }
    }
};
</script>
