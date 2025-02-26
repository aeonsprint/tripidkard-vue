<template>
    <!-- Hero Section -->
    <div class="overflow-hidden">
        <div class="max-w-[85rem] min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex items-center">
            <div class="relative mx-auto max-w-4xl grid space-y-6 sm:space-y-10 text-center">
                <!-- Title -->
                <div class="py-6 sm:py-10">
                    <h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-neutral-200 leading-tight"
                        v-html="title">
                    </h1>
                    <p class="mt-2 text-base sm:text-lg font-semibold text-gray-500 dark:text-neutral-400"
                        v-html="subtitle">
                    </p>
                </div>
                <!-- End Title -->

                <!-- Buttons Section -->
                <div class="mx-auto max-w-2xl flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                    <div v-for="(button, index) in buttons" :key="index">
                        <a :href="button.link"
                            class="py-3 px-5 flex justify-center items-center text-sm font-medium rounded-lg border transition-all duration-300"
                            :class="button.primary
                                ? 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600'
                                : 'border-blue-600 bg-white text-blue-600 hover:bg-blue-700 hover:text-white'">
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
