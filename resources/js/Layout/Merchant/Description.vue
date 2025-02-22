<template>
    <!-- Features -->
    <div class="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-1 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div class="lg:col-span-7">
                <!-- Grid -->
                <div class="space-y-6 sm:space-y-8">
                    <!-- Title -->
                    <div class="space-y-2 md:space-y-4">
                        <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                            Merchant Name
                        </h2>
                        <p class="text-gray-500 dark:text-neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio metus accumsan placerat
                            aptent fringilla felis phasellus tempus.
                        </p>
                    </div>
                    <!-- End Title -->
                </div>
            </div>
            <!-- End Col -->

           <!-- Raffle Card -->
<div class="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
    <div class="relative flex flex-row bg-white shadow-md rounded-lg w-full overflow-hidden items-center">
        <!-- Image -->
        <div class="w-1/4">
            <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                alt="raffle-image" class="w-full h-full object-cover">
        </div>

        <!-- Raffle Details -->
        <div class="p-4 flex flex-col justify-between w-3/4">
            <h6 class="text-gray-900 text-md font-bold">
                Super8 E-Trike Bonanza Raffle Promo
            </h6>
            <p class="text-gray-500 text-sm">
                Promo ends until Feb 28, 2025
            </p>

            <!-- Join Now Button -->
            <router-link to="/raffle/details" class="mt-3 w-fit rounded-md bg-blue-600 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800">
                Join Now
            </router-link>
        </div>
    </div>
</div>
<!-- End Raffle Card -->


        </div>
        <!-- End Grid -->
    </div>
    <!-- End Features -->
</template>
