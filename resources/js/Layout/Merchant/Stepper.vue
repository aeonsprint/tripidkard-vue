<template>
    <div class="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-2xl mx-auto my-8 dark:bg-neutral-800">
        <div data-hs-stepper="">
            <!-- Stepper Navigation -->
            <ul class="relative flex flex-row gap-x-2 justify-center">
                <li v-for="step in steps" :key="step.index"
                    class="flex items-center gap-x-2 shrink basis-0 flex-1 group ">
                    <span class="min-w-7 min-h-7 flex items-center text-xs align-middle">
                        <span
                            class="size-7 flex justify-center items-center shrink-0 hover:bg-blue-600 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600"
                            :class="{ 'bg-blue-600 text-white': currentStep === step.index }">
                            {{ step.index }}
                        </span>
                        <span class="ms-2 text-sm font-medium text-gray-800 dark:text-white">{{ step.label }}</span>
                    </span>
                    <div v-if="step.index !== steps.length" class="w-full h-px flex-1 bg-gray-200 dark:bg-neutral-600">
                    </div>
                </li>
            </ul>

            <!-- Step Content -->
            <div class="mt-5 sm:mt-8">
                <div v-if="currentStep === 1"
                    class="p-6 bg-gray-50 border border-dashed border-gray-200 rounded-xl dark:bg-neutral-700 dark:border-neutral-600">
                    <h3 class="text-gray-500 dark:text-neutral-400 mb-6 text-center text-lg font-semibold">Merchant
                        Information</h3>
                    <div class="w-full max-w-lg mx-auto space-y-4">
                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">First Name</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2"> *</span>
                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Middle Name</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Optional" />
                            <span class="text-red-400 mx-3"></span>

                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Last Name</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2"> *</span>
                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Contact No</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2"> *</span>

                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Email Address</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2"> *</span>
                        </div>

                    </div>
                </div>

                <div v-if="currentStep === 2"
                    class="p-6 bg-gray-50 border border-dashed border-gray-200 rounded-xl dark:bg-neutral-700 dark:border-neutral-600">
                    <h3 class="text-gray-500 dark:text-neutral-400 mb-6 text-center text-lg font-semibold">Merchant
                        Location</h3>
                    <div class="w-full max-w-lg mx-auto space-y-4">
                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Street</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2"> *</span>
                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">City</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2">*</span>

                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Province</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2"> *</span>
                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Zip Code</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2"> *</span>

                        </div>


                    </div>
                </div>

                <div v-if="currentStep === 3"
                    class="p-6 bg-gray-50 border border-dashed border-gray-200 rounded-xl dark:bg-neutral-700 dark:border-neutral-600">
                    <h3 class="text-gray-500 dark:text-neutral-400 mb-6 text-center text-lg font-semibold">Business
                        Information</h3>
                    <div class="mx-5 my-5 bg-blue-100 border border-blue-200 text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white"
                        role="alert" tabindex="-1" aria-labelledby="hs-actions-label">
                        <div class="flex">
                            <div class="shrink-0">
                                <svg class="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                </svg>
                            </div>
                            <div class="ms-3">

                                <div class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                                    This information will be securely stored and used solely for its intended purpose,
                                    with access limited to authorized personnel in compliance with data protection
                                    regulations.
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="w-full max-w-lg mx-auto space-y-4">
                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Business Name/
                                <br>Trade Name</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2"> *</span>
                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Business
                                Category</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2">*</span>

                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Sub Business
                                Category</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <span class="text-red-400 mx-2">*</span>

                        </div>



                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Website URL</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Optional" />
                            <span class="text-red-400 mx-3"></span>
                        </div>

                        <div class="flex items-center justify-between">
                            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">Facebook URL</label>
                            <input type="text"
                                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Optional" />
                            <span class="text-red-400 mx-3"></span>

                        </div>


                    </div>
                </div>

                <div v-if="currentStep === 4"
                    class="p-6 bg-gray-50 border border-dashed border-gray-200 rounded-xl dark:bg-neutral-700 dark:border-neutral-600">
                    <h3 class="text-gray-500 dark:text-neutral-400 mb-6 text-center text-lg font-semibold">Discount
                        Offer</h3>
                    <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                        <h2 class="text-lg font-semibold mb-3">Select discount offer:</h2>
                        <div class="flex space-x-3">
                            <button v-for="discount in discounts" :key="discount" @click="selectDiscount(discount)"
                                :class="[
                                    'px-4 py-2 border rounded-md text-blue-600 border-blue-400 transition',
                                    selectedDiscount === discount ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
                                ]">
                                {{ discount }}%
                            </button>
                        </div>
                        <div class="mt-4 relative">
                            <input type="number" v-model="customDiscount"
                                class="w-full px-3 py-2 border rounded-md outline-none pr-10"
                                placeholder="Input custom discount" @input="selectCustomDiscount" />
                            <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="mt-5 flex justify-between items-center gap-x-2">
                <button @click="prevStep" :disabled="currentStep === 1"
                    class="py-2 px-3 border bg-white text-gray-800 rounded-lg">Back</button>
                <button @click="nextStep" v-if="currentStep < steps.length"
                    class="py-2 px-3 bg-blue-600 text-white rounded-lg">Next</button>
                <button v-if="currentStep === steps.length" @click="finish"
                    class="py-2 px-3 bg-blue-600 text-white rounded-lg">Finish</button>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            currentStep: 1,
            steps: [
                { index: 1, label: 'Merchant Information' },
                { index: 2, label: 'Merchant Location' },
                { index: 3, label: 'Business Information' },
                { index: 4, label: 'Discount Offer' }
            ],
            merchant: {
                firstName: '',
                street: '',
                businessName: ''
            },
            discounts: [5, 15, 25, 50],
            selectedDiscount: null,
            customDiscount: ''
        };
    },
    methods: {
        nextStep() {
            if (this.currentStep < this.steps.length) {
                this.currentStep++;
            }
        },
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        },
        selectDiscount(discount) {
            this.selectedDiscount = discount;
            this.customDiscount = ''; // Reset custom input when a preset is selected
        },
        selectCustomDiscount() {
            this.selectedDiscount = null; // Reset selected button if custom input is used
        },
        finish() {
            Swal.fire({
                title: "Registration Completed!",
                text: "Your merchant registration has been successfully submitted.",
                icon: "success",
                confirmButtonText: "OK"
            }).then(() => {
                this.currentStep = 1; // Reset to first step
            });
        }
    }
};
</script>
