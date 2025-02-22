<template>
    <div class="flex justify-end mb-4">
        <button class="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 mr-2">Delete</button>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add New</button>
    </div>

    <div class="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <!-- Buttons Section -->

        <!-- Raffle Details -->
        <h2 class="text-2xl font-semibold mb-4">Raffle Details</h2>

        <!-- Info Grid -->
        <div class="grid grid-cols-5 gap-4 text-center mb-6">
            <div class="flex flex-col items-center">
                <i class="fa-solid fa-trophy text-blue-500 text-2xl"></i>
                <p class="text-sm text-gray-500">No. of Winners</p>
                <p class="font-medium">3</p>
            </div>
            <div class="flex flex-col items-center">
                <i class="fa-solid fa-gift text-blue-500 text-2xl"></i>
                <p class="text-sm text-gray-500">Prize</p>
                <p class="font-medium">House and Lot</p>
            </div>
            <div class="flex flex-col items-center">
                <i class="fa-solid fa-users text-blue-500 text-2xl"></i>
                <p class="text-sm text-gray-500">No. of Participants</p>
                <p class="font-medium">1,000</p>
            </div>
            <div class="flex flex-col items-center">
                <i class="fa-solid fa-calendar-day text-blue-500 text-2xl"></i>
                <p class="text-sm text-gray-500">Draw Date</p>
                <p class="font-medium">Mar 1, 2025</p>
            </div>
            <div class="flex flex-col items-center">
                <i class="fa-solid fa-hourglass-end text-blue-500 text-2xl"></i>
                <p class="text-sm text-gray-500">Deadline</p>
                <p class="font-medium">Feb 28, 2025</p>
            </div>
        </div>

        <!-- Raffle Image -->
        <div class="mb-6">
            <img src="https://via.placeholder.com/750x400" alt="Raffle Promo" class="w-full rounded-lg shadow">
        </div>

        <!-- Mechanics -->
        <div class="border rounded-lg p-4 bg-gray-100 text-sm">
            <h3 class="font-semibold mb-2">Mechanics</h3>
            <ol class="list-decimal pl-4 space-y-2 text-gray-600">
                <li>
                    <span class="font-medium">Eligibility:</span> The raffle is open to all individuals aged 18
                    years or older.
                </li>
                <li>
                    <span class="font-medium">How to Enter:</span> Participants must [describe entry method,
                    e.g., purchase a ticket].
                </li>
                <li>
                    <span class="font-medium">Raffle Period:</span>
                    ............................................. <a href="#" class="text-blue-500">more</a>
                </li>
            </ol>
        </div>
    </div>
</template>
