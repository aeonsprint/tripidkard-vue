<template>
    <div class="relative bg-gradient-to-bl bg-[#FAFBFC] from-[#FAFBFC] via-transparent dark:from-blue-950 dark:via-transparent">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
                <img src="/storage/img/login.png" alt="Registration Image" class="w-100 h-13">

                <!-- Form -->
                <div>
                    <form @submit.prevent="handleSubmit">
                        <div class="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                            <div class="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                                <div class="text-center">
                                    <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                                        Register for an Account
                                    </h1>
                                </div>

                                <!-- Step 1 -->
                                <div v-if="step === 1">
                                    <div class="mt-5">
                                        <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-white">First Name</label>
                                        <input type="text" id="firstName" v-model="form.firstName" required
                                            class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>
                                    <div class="mt-5">
                                        <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-white">Last Name</label>
                                        <input type="text" id="lastName" v-model="form.lastName" required
                                            class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>
                                    <div class="mt-5">
                                        <button type="button" @click="nextStep" class="w-full py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none rounded-lg">
                                            Next
                                        </button>
                                    </div>
                                </div>

                                <!-- Step 2 -->
                                <div v-if="step === 2">
                                    <div class="mt-5">
                                        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white">Email Address</label>
                                        <input type="email" id="email" v-model="form.email" required
                                            class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>
                                    <div class="mt-5">
                                        <label for="password" class="block text-sm font-medium text-gray-700 dark:text-white">Password</label>
                                        <input type="password" id="password" v-model="form.password" required
                                            class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>
                                    <div class="mt-5">
                                        <button type="button" @click="nextStep" class="w-full py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none rounded-lg">
                                            Next
                                        </button>
                                    </div>
                                </div>

                                <!-- Step 3 -->
                                <div v-if="step === 3">
                                    <div class="mt-5">
                                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-white">Confirm Password</label>
                                        <input type="password" id="confirmPassword" v-model="form.confirmPassword" required
                                            class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>
                                    <div class="mt-5">
                                        <button type="button" @click="nextStep" class="w-full py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none rounded-lg">
                                            Next
                                        </button>
                                    </div>
                                </div>

                                <!-- Step 4 -->
                                <div v-if="step === 4">
                                    <div class="mt-5">
                                        <label for="terms" class="block text-sm font-medium text-gray-700 dark:text-white">
                                            <input type="checkbox" id="terms" v-model="form.terms" required
                                                class="mr-2">
                                            I agree to the terms and conditions
                                        </label>
                                    </div>
                                    <div class="mt-5">
                                        <button type="submit" class="w-full py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none rounded-lg">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1, // Initial step is 1
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
      }
    };
  },
  methods: {
    nextStep() {
      if (this.step < 4) {
        this.step += 1;
      }
    },
    handleSubmit() {
      // Handle form submission
      console.log('Form submitted:', this.form);
      alert('Registration successful!');
    }
  }
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
