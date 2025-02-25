<template>
    <ol class="max-w-[70rem]  flex items-center w-full mx-auto my-7">
        <breadcrumb-item v-for="(item, index) in items" :key="index" :label="item.label" :href="item.href" :isLast="index === items.length - 1">
            <svg class="mx-2 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"></path>
            </svg>
        </breadcrumb-item>
    </ol>
</template>

<script>
import BreadcrumbItem from '@/Components/Atoms/BreadcrumbItem.vue';

export default {
    components: { BreadcrumbItem },
    computed: {
        items() {
            return (this.$route.meta.breadcrumb || '').split('/').map((label, index, arr) => ({
                label,
                href: index !== arr.length - 1 ? '#' : null
            }));
        }
    }
};
</script>
