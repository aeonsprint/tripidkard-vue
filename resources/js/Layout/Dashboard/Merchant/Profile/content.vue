<template>
    <div class="flex space-x-4 border-b pb-2">
        <a href="#" class="px-4 py-2 border-b-2 rounded-md transition" :class="activeTab === 'profile'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'text-gray-700 border-transparent hover:bg-gray-200'" @click.prevent="activeTab = 'profile'">
            Merchant Information
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
            Security
        </a>

        <a href="#" class="px-4 py-2 border-b-2 rounded-md transition" :class="activeTab === 'logo'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'text-gray-700 border-transparent hover:bg-gray-200'" @click.prevent="activeTab = 'logo'">
            Logo
        </a>

        <a href="#" class="px-4 py-2 border-b-2 rounded-md transition" :class="activeTab === 'images'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'text-gray-700 border-transparent hover:bg-gray-200'" @click.prevent="activeTab = 'images'">
            Images
        </a>
    </div>

    <div class="container mx-auto grid lg:grid-cols-1 gap-1 sm:gap-6 bg-white p-6 rounded-lg shadow-md">
        <!-- Profile Form -->
        <div v-if="activeTab === 'profile'">
            <h2 class="text-2xl font-bold text-gray-800">Business Profile Page</h2>
            <p class="text-gray-500 text-sm mb-6">Setup your Business Page</p>
            <div class="max-w-2xl mx-auto">

                <!-- Display Name -->
                <div class="flex justify-between items-center bg-blue-100 p-4 rounded-lg mt-4">
                    <span class="text-3xl font-bold text-blue-600">{{ userData.fname }} {{ userData.mname }} {{
                        userData.lname }}</span>
                </div>

                <form @submit.prevent="updateProfile">
                    <input type="text" v-model="userData.fname"
                        class="w-full border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="First Name" />

                    <input type="text" v-model="userData.mname"
                        class="w-full border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Middle Name" />

                    <input type="text" v-model="userData.lname"
                        class="w-full border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Last Name" />

                    <input type="text" v-model="userData.email"
                        class="w-full border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Email Address" />

                    <input type="text" v-model="userData.contact"
                        class="w-full border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Contact Number" />

                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                        Update
                    </button>
                </form>
            </div>
        </div>
        <!-- End Profile Form -->

        <!-- Discount Form -->
        <div v-if="activeTab === 'discount'">
            <h2 class="text-2xl font-bold text-gray-800 ">Discount Management</h2>
            <p class="text-gray-500 text-sm mb-6">Manage your store-wide discount and promotions</p>

            <div class="max-w-2xl mx-auto ">

                <!-- Discount Percentage -->
                <div class="flex justify-between items-center bg-blue-100 p-4 rounded-lg mt-4">
                    <span class="text-3xl font-bold text-blue-600">{{ userData.discount }}%</span>
                    <span class="flex items-center text-green-600 font-medium">
                        <span class="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Active
                    </span>
                </div>
                <form @submit.prevent="updateDiscount">

                    <!-- Title Input -->
                    <label class="block mt-4 text-gray-700 font-medium">Discount Details</label>
                    <input type="text"
                        class="w-full border-gray-300 rounded-lg p-3 mt-1 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Discount" v-model="userData.discount" />

                    <!-- Description -->
                    <label class="block mt-4 text-gray-700 font-medium">Pages Description</label>
                    <textarea
                        class="w-full border-gray-300 rounded-lg p-3 mt-1 focus:border-blue-500 focus:ring-blue-500"
                        rows="3"
                        placeholder="Enjoy 25% off on all our services! Valid for both walk-in and appointments."
                        v-model="userData.description">
                    </textarea>


                    <!-- Edit Button -->
                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                        Update
                    </button>
                </form>

            </div>
        </div>
        <!-- End Discount Form -->

        <!-- Address Form -->
        <div v-if="activeTab === 'address'">
            <h2 class="text-2xl font-bold text-gray-800 ">Merchant Address</h2>
            <p class="text-gray-500 text-sm mb-6"> your address efficiently </p>

            <div class="max-w-2xl mx-auto ">

                <!-- Discount Percentage -->
                <div class="flex justify-between items-center bg-blue-100 p-4 rounded-lg mt-4">
                    <span class="text-3xl font-bold text-blue-600">{{ userData.business_name }}</span>
                    <span class="flex items-center text-green-600 font-medium">
                    </span>
                </div>
                <form @submit.prevent="updateAddress">

                    <!--  Input -->
                    <input type="text" v-model="userData.business_name"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Business Name" />

                    <!--  Input -->
                    <input type="text" v-model="userData.street"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Sreet" />


                    <!--  Input -->
                    <input type="text"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="City" v-model="userData.city" />



                    <!--  Input -->
                    <input type="text"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Province" v-model="userData.province" />


                    <!--  Input -->
                    <input type="text"
                        class="w-full  border-gray-300 rounded-lg p-3 mt-5 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Zip Code" v-model="userData.zip" />


                    <!-- Edit Button -->
                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                        Update
                    </button>
                </form>


            </div>
        </div>
        <!-- End Address Form -->


        <!-- Address Form -->
        <div v-if="activeTab === 'password'">
            <h2 class="text-2xl font-bold text-gray-800 ">Password Management</h2>
            <p class="text-gray-500 text-sm mb-6">Manage your Password</p>

            <div class="max-w-2xl mx-auto ">

                <!-- Discount Percentage -->

                <form @submit.prevent="updatePassword">

                    <!-- Title Input -->
                    <label class="block mt-4 text-gray-700 font-medium">Old Password</label>
                    <input type="password"
                        class="w-full border-gray-300 rounded-lg p-3 mt-1 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Password" v-model="userData.currentPassword" />

                    <!-- Title Input -->
                    <label class="block mt-4 text-gray-700 font-medium">Confirm Password</label>
                    <input type="password"
                        class="w-full border-gray-300 rounded-lg p-3 mt-1 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Password" v-model="userData.password_confirmation" />

                    <!-- Title Input -->
                    <label class="block mt-4 text-gray-700 font-medium">New Password</label>
                    <input type="password"
                        class="w-full border-gray-300 rounded-lg p-3 mt-1 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Password" v-model="userData.password" />




                    <!-- Edit Button -->
                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                        Update
                    </button>
                </form>

            </div>
        </div>
        <!-- End Address Form -->


        <!-- Logo Form -->
        <div v-if="activeTab === 'logo'">
            <h2 class="text-2xl font-bold text-gray-800">Logo Management</h2>
            <p class="text-gray-500 text-sm mb-6">Upload and manage your Logo images</p>

            <div class="max-w-2xl mx-auto">
                <form @submit.prevent="uploadLogo">
                    <FileUpload :maxFiles="1" :maxSize="2 * 1024 * 1024" accept="image/png, image/jpeg"
                        @files-selected="handleFiles" v-model="userData.logo" />

                    <!-- Logo Preview -->
                    <div v-if="imagePreview" class="mt-4">
                        <p class="text-gray-600 text-sm">Preview:</p>
                        <img :src="imagePreview" alt="Logo Preview" class="w-32 h-32 object-cover rounded-md">
                    </div>

                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                        Upload
                    </button>
                </form>
            </div>
        </div>
        <!-- End Logo Form -->

        <!-- Images Form -->
        <div v-if="activeTab === 'images'">
            <h2 class="text-2xl font-bold text-gray-800">Image Management</h2>
            <p class="text-gray-500 text-sm mb-6">Upload and manage your business images</p>

            <div class="max-w-2xl mx-auto">
                <!-- Image Preview -->
                <form @submit.prevent="uploadImages">
                    <div v-for="(label, key) in imageLabels" :key="key">
                        <FileUpload accept="image/png, image/jpeg"
                            @files-selected="(files) => handleImages(files, key)" />
                        <div v-if="imagePreviews[key]" class="mt-2">
                            <img :src="imagePreviews[key]" :alt="`${label} Preview`"
                                class="w-32 h-32 object-cover rounded-md">
                        </div>
                    </div>

                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">
                        Upload
                    </button>
                </form>
            </div>
        </div>

        <!-- End Images Form -->
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import Swal from "sweetalert2";
import FileUpload from "@/Components/Molecules/FileUpload.vue";

const authStore = useAuthStore();
const activeTab = ref("profile");
const imageFile = ref(null);
const imagePreview = ref(null);
const imagePreviews = ref({ photo1: null, photo2: null, photo3: null });
// Reactive copy of user data

const userData = ref({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    contact: "",
    discount: "",
    description: "",
    business_name: "",
    street: "",
    city: "",
    province: "",
    zip: "",
    currentPassword: "",
    password_confirmation: "",
    password: "",
    logo: "",
    photo1: null, photo2: null, photo3: null

});

const imageLabels = ref({
        photo1: "Photo 1",
        photo2: "Photo 2",
        photo3: "Photo 3",
      });
// Load user data on mount
onMounted(() => {
    if (authStore.authUser) {
        userData.value = { ...authStore.authUser };
    } else if (authStore.authUser?.avatar) {
        imagePreview.value = authStore.authUser.avatar; // Load existing logo
    }
});

const handleFiles = (files) => {
    if (files.length > 0) {
        userData.value.logo = files[0];
        imagePreview.value = URL.createObjectURL(files[0]); // Preview
    }
};

const handleImages = (files, key) => {
        if (files.length > 0) {
          userData.value[key] = files[0];
          imagePreviews.value[key] = URL.createObjectURL(files[0]); // Preview
        }
      };


      const uploadImages = async () => {
        let formData = new FormData();
        let hasFiles = false;

        Object.keys(userData.value).forEach((key) => {
          if (userData.value[key]) {
            formData.append(key, userData.value[key]);
            hasFiles = true;
          }
        });

        if (!hasFiles) {
          Swal.fire("Error!", "Please select at least one image to upload.", "error");
          return;
        }

        try {
          const response = await axios.post("/api/user/upload-background", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          });

          // Fix: Update image previews based on `paths` response
          Object.keys(response.data.paths).forEach((key) => {
            authStore.authUser[key] = response.data.paths[key];
            imagePreviews.value[key] = `/storage/${response.data.paths[key]}`;
          });

          Swal.fire("Success!", "Images uploaded successfully.", "success");
        } catch (error) {
          Swal.fire("Error!", error.response?.data?.message || "Something went wrong.", "error");
        }
      };


// Function to update profile
const updateProfile = async () => {
    try {
        const response = await axios.put("/api/user/update-profile", {
            fname: userData.value.fname,
            mname: userData.value.mname,
            lname: userData.value.lname,
            email: userData.value.email,
            contact: userData.value.contact,
        });

        // Update the authStore after successful update
        authStore.authUser = { ...authStore.authUser, ...response.data.user };

        Swal.fire("Success!", response.data.message || "Profile updated successfully.", "success");
    } catch (error) {
        Swal.fire("Error!", error.response?.data?.message || "Something went wrong.", "error");
    }
};

// Function to update profile
const updateDiscount = async () => {
    try {
        const response = await axios.put("/api/user/update-discount", {
            discount: userData.value.discount,
            description: userData.value.description,
        });

        // Update the authStore after successful update
        authStore.authUser = { ...authStore.authUser, ...response.data.user };

        Swal.fire("Success!", response.data.message || "Discount updated successfully.", "success");
    } catch (error) {
        Swal.fire("Error!", error.response?.data?.message || "Something went wrong.", "error");
    }
};

// Function to update profile
const updateAddress = async () => {
    try {
        const response = await axios.put("/api/user/update-address", {
            business_name: userData.value.business_name,
            street: userData.value.street,
            city: userData.value.city,
            province: userData.value.province,
            zip: userData.value.zip,
        });

        // Update the authStore after successful update
        authStore.authUser = { ...authStore.authUser, ...response.data.user };

        Swal.fire("Success!", response.data.message || "Address updated successfully.", "success");
    } catch (error) {
        Swal.fire("Error!", error.response?.data?.message || "Something went wrong.", "error");
    }
};

const updatePassword = async () => {
    try {
        const response = await axios.put("/api/user/update-password", {
            currentPassword: userData.value.currentPassword,
            password: userData.value.password,
            password_confirmation: userData.value.password_confirmation,
        });

        // Update the authStore after successful update
        authStore.authUser = { ...authStore.authUser, ...response.data.user };

        Swal.fire("Success!", response.data.message || "Password updated successfully.", "success");

        // Clear password fields after successful update
        userData.value.currentPassword = "";
        userData.value.password = "";
        userData.value.password_confirmation = "";
    } catch (error) {
        Swal.fire("Error!", error.response?.data?.message || "Something went wrong.", "error");
    }
};


const uploadLogo = async () => {
    if (!userData.value.logo) {
        Swal.fire("Error!", "Please select a logo to upload.", "error");
        return;
    }

    try {
        let formData = new FormData();
        formData.append("logo", userData.value.logo);

        const response = await axios.post("/api/user/upload-logo", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        // Update user logo in auth store
        authStore.authUser.avatar = response.data.avatar;
        imagePreview.value = response.data.avatar; // Update preview

        Swal.fire("Success!", response.data.message || "Logo uploaded successfully.", "success");
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
