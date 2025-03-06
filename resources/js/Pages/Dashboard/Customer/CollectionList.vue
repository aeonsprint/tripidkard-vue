<template>
    <TopBar />
    <div class="flex w-full  lg:ps-20 max-w-[80rem] bg-[#f7f9fa]">
        <!-- Sidebar -->

        <Sidebar />
        <!-- Main Content -->
        <main class="flex-1 p-6">
            <h1 class="text-xl font-bold">Joined Raffle</h1>
            <p class="text-gray-500">Raffle participation history</p>
            <p class="text-sm text-gray-400">Yesterday</p>

            <div v-for="raffle in raffles" :key="raffle.id" class="bg-white p-4 shadow rounded-lg mt-4">
                <div class="flex justify-between">
                    <div>
                        <h2 class="font-semibold">{{ raffle.title }}</h2>
                        <p class="text-sm text-gray-500">Shop Name</p>
                    </div>
                    <p class="text-sm text-gray-500">{{ raffle.time }}</p>
                </div>
                <div class="flex items-center text-sm text-gray-600 mt-2">
                    <span class="mr-2">⏳ Draws in: {{ raffle.drawTime }}</span>
                    <span class="mr-2">🎁 Prize: {{ raffle.prize }}</span>
                    <span>👥 Participants: {{ raffle.participants }}</span>
                </div>
                <div class="mt-2 flex items-center space-x-4">
                    <button class="bg-blue-500 text-white px-4 py-1 rounded-lg">Ticket: {{ raffle.ticket }}</button>
                    <button class="text-blue-500">Share</button>
                </div>
            </div>
        </main>
    </div>
    <Footer />

</template>

<script>
import Sidebar from '@/Components/Organisms/Customer/Sidebar.vue';
import TopBar from '@/Components/Organisms/TopBar.vue';
import Footer from '@/Components/Organisms/Footer.vue';

export default {
    components: {
        TopBar,
        Sidebar,
        Footer,
    },
    data() {
        return {
            raffles: [
                {
                    id: 1,
                    title: "Valentine's Day Giveaway",
                    drawTime: '1 day',
                    prize: 'iPhone 20 Pro Max',
                    participants: 1000,
                    ticket: 'T-1434',
                    time: '5:54PM'
                },
                {
                    id: 2,
                    title: 'Weekly Customer Draw',
                    drawTime: '1 day',
                    prize: 'iPhone 20 Pro Max',
                    participants: 1000,
                    ticket: 'T-1434',
                    time: '5:54PM'
                },
                {
                    id: 3,
                    title: 'Grand Opening Lucky Draw',
                    drawTime: '1 day',
                    prize: 'iPhone 20 Pro Max',
                    participants: 1000,
                    ticket: 'T-1434',
                    time: '5:54PM'
                }
            ]
        }

    },
    setup() {
    },
};
</script>

<
