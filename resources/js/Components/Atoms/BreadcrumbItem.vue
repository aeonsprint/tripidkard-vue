<template>
    <li class="inline-flex items-center">
        <a v-if="!isLast" class="text-sm text-gray-500 hover:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500" :href="href">
            {{ label }}
        </a>
        <span v-else class="text-sm font-semibold text-gray-800 dark:text-neutral-200">
            {{ label }}
        </span>
        <slot v-if="!isLast"></slot>
    </li>
</template>

<script>
export default {
    props: { label: String, href: String, isLast: Boolean }
};
</script>
