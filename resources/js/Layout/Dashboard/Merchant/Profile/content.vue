<template>
    <div class="flex space-x-4 border-b pb-2">
        <a href="#" class="px-4 py-2 border-b-2 rounded-md transition" :class="activeTab === 'profile'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'text-gray-700 border-transparent hover:bg-gray-200'" @click.prevent="activeTab = 'profile'">
            Business Information
        </a>

        <a href="#" class="px-4 py-2 border-b-2 rounded-md transition" :class="activeTab === 'discount'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'text-gray-700 border-transparent hover:bg-gray-200'" @click.prevent="activeTab = 'discount'">
            Discount
        </a>

        <a href="#" class="px-4 py-2 border-b-2 rounded-md transition" :class="activeTab === 'address'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'text-gray-700 border-transparent hover:bg-gray-200'" @click.prevent="activeTab = 'address'">
            Business Address
        </a>

        <a href="#" class="px-4 py-2 border-b-2 rounded-md transition" :class="activeTab === 'images'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'text-gray-700 border-transparent hover:bg-gray-200'" @click.prevent="activeTab = 'images'">
            Images
        </a>
    </div>

    <div class="container mx-auto grid lg:grid-cols-1 gap-1 sm:gap-6 bg-white p-6 rounded-lg shadow-md">
        <!-- Tabs -->


        <!-- End Tabs -->

        <!-- Profile Form -->
        <div v-if="activeTab === 'profile'">
            <h2 class="text-2xl font-bold text-gray-800 ">Business Profile Page</h2>
            <p class="text-gray-500 text-sm mb-6">Setup you Business Page</p>

            <form class="space-y-2">
                <div class="flex space-x-2">
                    <!-- Merchant Information -->
                    <div class="p-4 md:p-5 flex flex-col w-1/2">
                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="First Name" readonly="">
                        </div>

                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Middle Name" readonly="">
                        </div>

                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Last Name" readonly="">
                        </div>

                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Email Address" readonly="">
                        </div>

                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Contact Address q" readonly="">
                        </div>


                    </div>
                    <!-- End Merchant Information -->

                    <!-- Business Information -->
                    <div class="p-4 md:p-5 flex flex-col w-1/2">
                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Business Name" readonly="">
                        </div>

                        <div class="space-y-3 my-3">
                            <select
                                class="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
                                <option selected="">Business Category</option>
                                <option>3</option>
                            </select>
                        </div>

                        <div class="space-y-3 my-3">
                            <select
                                class="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
                                <option selected="">Business Sub-Category</option>
                                <option>3</option>
                            </select>
                        </div>

                    </div>
                    <!-- End Business Information -->
                </div>

                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Profile</button>
            </form>

        </div>

        <!-- End Profile Form -->


        <div v-if="activeTab === 'discount'">
            <!-- Title -->
            <h2 class="text-2xl font-bold text-gray-800 ">Discount Management</h2>
            <p class="text-gray-500 text-sm mb-6">Manage your store-wide discount and promotions</p>

            <div class="max-w-2xl mx-auto ">

                <!-- Discount Percentage -->
                <div class="flex justify-between items-center bg-blue-100 p-4 rounded-lg mt-4">
                    <span class="text-3xl font-bold text-blue-600">25%</span>
                    <span class="flex items-center text-green-600 font-medium">
                        <span class="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Active
                    </span>
                </div>

                <!-- Title Input -->
                <label class="block mt-4 text-gray-700 font-medium">Discount Details</label>
                <input type="text"
                    class="w-full border-gray-300 rounded-lg p-3 mt-1 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Summer Promo Discount" value="25%" />

                <!-- Description -->
                <label class="block mt-4 text-gray-700 font-medium">Pages Description</label>
                <textarea class="w-full border-gray-300 rounded-lg p-3 mt-1 focus:border-blue-500 focus:ring-blue-500"
                    rows="3"
                    placeholder="Enjoy 25% off on all our services! Valid for both walk-in and appointments."></textarea>



                <!-- Edit Button -->
                <button
                    class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                    Update
                </button>
            </div>

        </div>


        <!-- Security Settings -->
        <div v-if="activeTab === 'address'" class="mt-4">
            <form class="space-y-4">
                <div class="flex space-x-2">
                    <!-- Merchant Information -->
                    <div class="p-4 md:p-5 flex flex-col w-1/2">
                        <h3 class="text-2xl text-gray-600 my-3">Merchant Address</h3>

                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Zip Code" readonly="">
                        </div>

                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Street" readonly="">
                        </div>

                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="City" readonly="">
                        </div>

                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Province" readonly="">
                        </div>




                    </div>
                    <!-- End Merchant Information -->

                    <!-- Business Information -->
                    <div class="p-4 md:p-5 flex flex-col w-1/2">
                        <h3 class="text-2xl text-gray-600 my-3">Business Information</h3>

                        <div class="space-y-3 my-3">
                            <input type="text"
                                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Business Name" readonly="">
                        </div>

                        <div class="space-y-3 my-3">
                            <select
                                class="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
                                <option selected="">Business Category</option>
                                <option>3</option>
                            </select>
                        </div>

                        <div class="space-y-3 my-3">
                            <select
                                class="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
                                <option selected="">Business Sub-Category</option>
                                <option>3</option>
                            </select>
                        </div>

                    </div>
                    <!-- End Business Information -->
                </div>

                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Profile</button>
            </form>

        </div>

        <!-- End Seurity Setting -->

        <!-- Images Upload -->
        <div v-if="activeTab === 'images'" class="mt-4">
            <form class="space-y-4">
                <div>
                    <!-- Image Upload -->
                    <label class="block mt-4 text-gray-700 font-medium">Promotion Images</label>
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 mt-2">
                        <span class="text-gray-400 text-sm">Drag and drop images or click to upload</span>
                        <p class="text-xs text-gray-400">Maximum 5 images, PNG or JPG (Max 2MB each)</p>
                    </div>

                    <label class="block text-gray-700">Upload Profile Image</label>
                    <input type="file" class="w-full p-2 border rounded-md">
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Image</button>
            </form>
        </div>

        <!-- End Images Upload  -->

    </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive state for active tab
const activeTab = ref('profile');
</script>
