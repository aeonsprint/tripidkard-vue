<template>
    <div class="w-full max-w-4xl p-6 sm:p-8 bg-white rounded-2xl shadow-2xl mx-auto my-8 dark:bg-neutral-800">
        <div data-hs-stepper="">

            <!-- Stepper Navigation -->
            <ul class="relative flex flex-wrap gap-x-2 gap-y-3 justify-center sm:flex-nowrap">
                <li v-for="step in steps" :key="step.index"
                    class="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <span class="min-w-7 min-h-7 flex items-center text-xs align-middle">
                        <span
                            class="size-6 sm:size-8 flex justify-center items-center shrink-0 hover:bg-blue-600 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600"
                            :class="{ 'bg-blue-600 text-white': currentStep === step.index }">
                            {{ step.index }}
                        </span>
                        <span class="ms-2 text-xs sm:text-sm font-medium text-gray-800 dark:text-white">{{ step.label }}</span>
                    </span>
                    <div v-if="step.index !== steps.length" class="w-full h-px flex-1 bg-gray-200 dark:bg-neutral-600">
                    </div>
                </li>
            </ul>

            <!-- Step Content Slot -->
            <div class="mt-4 sm:mt-8">
                <slot :currentStep="currentStep"></slot>
            </div>

            <!-- Navigation Buttons -->
            <div class="mt-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-x-2">
                <button @click="prevStep" :disabled="currentStep === 1"
                    class="w-full sm:w-auto py-2 px-3 border bg-white text-gray-800 rounded-lg">Back</button>
                <button @click="nextStep" v-if="currentStep < steps.length"
                    class="w-full sm:w-auto py-2 px-3 bg-blue-600 text-white rounded-lg">Next</button>
                <button v-if="currentStep === steps.length" @click="$emit('finish')"
                    class="w-full sm:w-auto py-2 px-3 bg-blue-600 text-white rounded-lg">Finish</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        steps: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentStep: 1
        };
    },
    methods: {
        nextStep() {
            if (this.currentStep < this.steps.length) {
                this.currentStep++;
                this.$emit('next', this.currentStep);
            }
        },
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
                this.$emit('prev', this.currentStep);
            }
        }
    }
};
</script>
