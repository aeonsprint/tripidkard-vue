<template>
    <!-- Hero -->
    <div class="relative bg-gradient-to-bl bg-[#FAFBFC] from-[#FAFBFC] via-transparent dark:from-blue-950 dark:via-transparent">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Grid -->
            <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
                <!-- Image Centered with Title Above -->
                <div class="flex flex-col items-center text-center mb-10">
                    <h1 class="text-4xl text-center font-bold text-gray-800 dark:text-white mb-6">
                        Broaden Your Influence and Captivate More Customers
                    </h1>
                    <img src="/storage/img/signup.png" alt="SignUp Image" class="max-w-full h-auto">
                </div>

                <!-- Form Section -->
                <div>
                    <form>
                        <div class="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                            <!-- Card -->
                            <div class="p-6 sm:p-7 bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                                <div class="text-center mb-5">
                                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Create account</h2>
                                </div>

                                <!-- Full Name Input -->
                                <div class="mb-4">
                                    <label for="fullName" class="block text-sm font-medium text-gray-700 dark:text-white">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" required
                                        class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                                </div>

                                <!-- Email Input -->
                                <div class="mb-4">
                                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white">Email address</label>
                                    <input type="email" id="email" name="email" required
                                        class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                                </div>

                                <!-- Password Input -->
                                <div class="mb-6">
                                    <label for="password" class="block text-sm font-medium text-gray-700 dark:text-white">Password</label>
                                    <input type="password" id="password" name="password" required
                                        class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                                </div>

                                <!-- Login Button -->
                                <div class="mb-4">
                                    <button type="submit"
                                        class="w-full py-3 px-4 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                                        Log In
                                    </button>
                                </div>

                                <!-- Sign-in Options -->
                                <div class="flex gap-4">
                                    <button type="button"
                                        class="w-full py-3 px-4 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                        Sign up with Google
                                    </button>
                                    <button type="button"
                                        class="w-full py-3 px-4 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                        Sign up with Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- End Grid -->
        </div>
    </div>
    <!-- End Hero -->
</template>
