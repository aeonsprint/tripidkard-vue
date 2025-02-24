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

        <a href="#" class="px-4 py-2 border-b-2 rounded-md transition" :class="activeTab === 'password'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'text-gray-700 border-transparent hover:bg-gray-200'" @click.prevent="activeTab = 'password'">
            Security </a>


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
            <div class="max-w-2xl mx-auto ">

                <!-- Discount Percentage -->
                <div class="flex justify-between items-center bg-blue-100 p-4 rounded-lg mt-4">
                    <span class="text-3xl font-bold text-blue-600">{{ authUser.fname }} {{ authUser.mname }} {{
                        authUser.lname }} </span>
                    <span class="flex items-center text-green-600 font-medium">
                    </span>
                </div>

                <form @submit.prevent="updateAddress">

                    <!--  Input -->
                    <input type="text" :value="authUser.fname"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="First Name" />

                    <!--  Input -->
                    <input type="text" :value="authUser.mname"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Middle Name" />


                    <!--  Input -->
                    <input type="text"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Last Name" :value="authUser.lname" />



                    <!--  Input -->
                    <input type="text"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Email Address" :value="authUser.email" />


                    <!--  Input -->
                    <input type="text"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Contact Number" :value="authUser.contact" />


                    <!-- Edit Button -->
                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                        Update
                    </button>
                </form>


            </div>
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
                <form @submit.prevent="updateDiscount">

                    <!-- Title Input -->
                    <label class="block mt-4 text-gray-700 font-medium">Discount Details</label>
                    <input type="text"
                        class="w-full border-gray-300 rounded-lg p-3 mt-1 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Discount" :value="authUser.discount" />

                    <!-- Description -->
                    <label class="block mt-4 text-gray-700 font-medium">Pages Description</label>
                    <textarea
                        class="w-full border-gray-300 rounded-lg p-3 mt-1 focus:border-blue-500 focus:ring-blue-500"
                        rows="3"
                        placeholder="Enjoy 25% off on all our services! Valid for both walk-in and appointments."></textarea>



                    <!-- Edit Button -->
                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                        Update
                    </button>
                </form>

            </div>

        </div>


        <!-- Security Settings -->
        <div v-if="activeTab === 'address'" class="mt-4">
            <!-- Title -->
            <h2 class="text-2xl font-bold text-gray-800 ">Merchant Address</h2>
            <p class="text-gray-500 text-sm mb-6"> your address efficiently </p>

            <div class="max-w-2xl mx-auto ">

                <!-- Discount Percentage -->
                <div class="flex justify-between items-center bg-blue-100 p-4 rounded-lg mt-4">
                    <span class="text-3xl font-bold text-blue-600">{{ authUser.business_name }}</span>
                    <span class="flex items-center text-green-600 font-medium">
                    </span>
                </div>
                <form @submit.prevent="updateAddress">

                    <!--  Input -->
                    <input type="text" :value="authUser.business_name"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Sreet" />

                    <!--  Input -->
                    <input type="text" :value="authUser.street"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Sreet" />


                    <!--  Input -->
                    <input type="text"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="City" :value="authUser.city" />



                    <!--  Input -->
                    <input type="text"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Province" :value="authUser.province" />


                    <!--  Input -->
                    <input type="text"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Zip Code" :value="authUser.zip" />


                    <!-- Edit Button -->
                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                        Update
                    </button>
                </form>


            </div>
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
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useAuthStore } from "@/stores/auth"; // Ensure correct path
import Swal from "sweetalert2";

const authStore = useAuthStore();
const activeTab = ref("profile");

// Computed property para sa user data
const authUser = computed(() => authStore.authUser || {});

// Fetch user data on mount
onMounted(() => {
    authStore.getUser();
});

// Function to update profile
const updateProfile = async () => {
    try {
        const response = await axios.put("/api/user/update-profile", {
            fname: authUser.value.fname,
            mname: authUser.value.mname,
            lname: authUser.value.lname,
            email: authUser.value.email,
            contact: authUser.value.contact,
            business_name: authUser.value.business_name,
            business_category: authUser.value.business_category,
            business_sub_category: authUser.value.business_sub_category
        });

        Swal.fire("Success!", response.data.message || "Profile updated successfully.", "success");
    } catch (error) {
        Swal.fire("Error!", error.response?.data?.message || "Something went wrong.", "error");
    }
};

// Function to update discount
const updateDiscount = async () => {
    try {
        const response = await axios.put("/api/user/update-discount", {
            discount: authUser.value.discount,
            discount_description: authUser.value.discount_description
        });

        Swal.fire("Success!", response.data.message || "Discount updated successfully.", "success");
    } catch (error) {
        Swal.fire("Error!", error.response?.data?.message || "Something went wrong.", "error");
    }
};

// Function to update address
const updateAddress = async () => {
    try {
        const response = await axios.put("/api/user/update-address", {
            street: authUser.value.street,
            city: authUser.value.city,
            province: authUser.value.province,
            zip: authUser.value.zip
        });

        Swal.fire("Success!", response.data.message || "Address updated successfully.", "success");
    } catch (error) {
        Swal.fire("Error!", error.response?.data?.message || "Something went wrong.", "error");
    }
};
</script>

<style scoped>
.input-field {
    @apply py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500;
}

.btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded-md mt-4;
}
</style>
