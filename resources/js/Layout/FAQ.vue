<template>
    <!-- FAQ -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
            <p class="mt-1 text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
        </div>
        <!-- End Title -->

        <div class="max-w-2xl mx-auto">
            <!-- Accordion -->
            <div class="hs-accordion-group">
                <!-- First Accordion Item -->
                <div class="hs-accordion hs-accordion-active:bg-[#f0f6ff] rounded-xl p-3 dark:hs-accordion-active:bg-white/10">
                    <button
                        class="hs-accordion-toggle group bg-[#f0f6ff] p-5 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        @click="toggle(0)">
                        Can I cancel at anytime?
                        <span class="material-icons transition-transform">
                            {{ isOpen[0] ? 'close' : 'expand_more' }}
                        </span>
                    </button>
                    <div v-show="isOpen[0]" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                        <p class="text-gray-800 dark:text-neutral-200">
                            Yes, you can cancel anytime no questions are asked while you cancel but we would highly
                            appreciate if you will give us some feedback.
                        </p>
                    </div>
                </div>

                <!-- Second Accordion Item -->
                <div class="hs-accordion hs-accordion-active:bg-[#f0f6ff] rounded-xl p-3 dark:hs-accordion-active:bg-white/10">
                    <button
                        class="hs-accordion-toggle group bg-[#f0f6ff] p-5 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        @click="toggle(1)">
                        How do I get access to a theme I purchased?
                        <span class="material-icons transition-transform">
                            {{ isOpen[1] ? 'close' : 'expand_more' }}
                        </span>
                    </button>
                    <div v-show="isOpen[1]" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                        <p class="text-gray-800 dark:text-neutral-200">
                            If you lose the link for a theme you purchased, don't panic! We've got you covered. You can
                            login to your account, tap your avatar in the upper right corner, and tap Purchases. If you
                            didn't create a login or can't remember the information, you can use our handy Redownload
                            page, just remember to use the same email you originally made your purchases with.
                        </p>
                    </div>
                </div>

                  <!-- First Accordion Item -->
                  <div class="hs-accordion hs-accordion-active:bg-[#f0f6ff] rounded-xl p-3 dark:hs-accordion-active:bg-white/10">
                    <button
                        class="hs-accordion-toggle group bg-[#f0f6ff] p-5 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        @click="toggle(2)">
                        Can I cancel at anytime?
                        <span class="material-icons transition-transform">
                            {{ isOpen[2] ? 'close' : 'expand_more' }}
                        </span>
                    </button>
                    <div v-show="isOpen[2]" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                        <p class="text-gray-800 dark:text-neutral-200">
                            Yes, you can cancel anytime no questions are asked while you cancel but we would highly
                            appreciate if you will give us some feedback.
                        </p>
                    </div>
                </div>

                <!-- Second Accordion Item -->
                <div class="hs-accordion hs-accordion-active:bg-[#f0f6ff] rounded-xl p-3 dark:hs-accordion-active:bg-white/10">
                    <button
                        class="hs-accordion-toggle group bg-[#f0f6ff] p-5 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                        @click="toggle(3)">
                        How do I get access to a theme I purchased?
                        <span class="material-icons transition-transform">
                            {{ isOpen[3] ? 'close' : 'expand_more' }}
                        </span>
                    </button>
                    <div v-show="isOpen[3]" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                        <p class="text-gray-800 dark:text-neutral-200">
                            If you lose the link for a theme you purchased, don't panic! We've got you covered. You can
                            login to your account, tap your avatar in the upper right corner, and tap Purchases. If you
                            didn't create a login or can't remember the information, you can use our handy Redownload
                            page, just remember to use the same email you originally made your purchases with.
                        </p>
                    </div>
                </div>


            </div>
            <!-- End Accordion -->
        </div>
    </div>
    <!-- End FAQ -->
</template>

<script>
export default {
    data() {
        return {
            isOpen: [false, false], // State para sa accordion items
        };
    },
    methods: {
        toggle(index) {
            this.isOpen[index] = !this.isOpen[index];
        },
    },
};
</script>

<style scoped>
/* Transition effect for rotating the icon */
.transition-transform {
    transition: transform 0.3s ease-in-out;
}
</style>
