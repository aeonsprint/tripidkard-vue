<template>

    <div class="max-w-6xl mx-auto p-6">
        <!-- Header -->
        <h2 class="text-2xl font-semibold">Billing</h2>
        <p class="text-gray-500">Effortlessly handle your billing and invoices right here.</p>

        <!-- Billing Grid -->
        <div class="grid md:grid-cols-2 gap-6 mt-6">
            <!-- Current Plan Summary -->
            <div class="bg-white border rounded-lg shadow-sm p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="font-semibold text-lg">Current Plan Summary</h3>
                    <button
                        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">Upgrade</button>
                </div>
                <div class="grid grid-cols-3 text-sm text-gray-600">
                    <div>
                        <p class="text-gray-500">PLAN NAME</p>
                        <p class="font-medium">Pro Plan</p>
                    </div>
                    <div>
                        <p class="text-gray-500">BILLING CYCLE</p>
                        <p class="font-medium">Monthly</p>
                    </div>
                    <div>
                        <p class="text-gray-500">PLAN COST</p>
                        <p class="font-medium">₱ 1099</p>
                    </div>
                </div>
                <div class="mt-4">
                    <p class="text-sm text-gray-500">USAGE</p>
                    <p class="text-sm">4850 out of 5k monthly active users</p>
                    <div class="w-full bg-gray-200 h-2 rounded-full mt-2">
                        <div class="bg-blue-500 h-2 rounded-full" style="width: 97%"></div>
                    </div>
                </div>
            </div>

            <!-- Payment Method -->
            <div class="bg-white border rounded-lg shadow-sm p-6">
                <h3 class="font-semibold text-lg mb-4">Payment Method</h3>
                <div class="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                            alt="Mastercard Logo" class="h-8">
                        <div>
                            <p class="font-medium">Master Card</p>
                            <p class="text-sm text-gray-500">**** **** **** 4002</p>
                            <p class="text-sm text-gray-500">Expiry on 20/2024</p>
                            <p class="text-sm text-gray-500">📧 billing@acme.corp</p>
                        </div>
                    </div>
                    <button class="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 text-sm">Change</button>
                </div>
            </div>
        </div>
    </div>
</template>
