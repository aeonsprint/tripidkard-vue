<template>
    <!-- Hero Section -->
    <div class="overflow-hidden">
        <div class="max-w-[85rem] h-screen mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
                <!-- Title -->
                <div class="text-center py-10">
                    <h1 class="title text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200"
                        v-html="title">
                    </h1>
                    <p  class="text-s mt-2 font-semibold text-gray-500 tracking-wide dark:text-neutral-200"  v-html="subtitle">
                    </p>
                </div>
                <!-- End Title -->

                <!-- Buttons Section -->
                <div class="mx-auto max-w-2xl sm:flex sm:space-x-3   dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                    <div v-for="(button, index) in buttons" :key="index" class="whitespace-nowrap pt-2 sm:pt-0 grid sm:block">
                        <a :href="button.link"
                            class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border"
                            :class="button.primary ? 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600' : 'border-blue-600 bg-white text-blue-600 hover:bg-blue-700 hover:text-white'">
                            {{ button.text }}
                        </a>
                    </div>
                </div>
                <!-- End Buttons Section -->
            </div>
        </div>
    </div>
    <!-- End Hero Section -->
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            default: ''
        },
        buttons: {
            type: Array,
            default: () => []
        }
    }
};
</script>
