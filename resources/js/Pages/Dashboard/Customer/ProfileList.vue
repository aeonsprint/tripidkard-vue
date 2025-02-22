<template>
    <TopBar />
    <div class="flex w-full  lg:ps-20 max-w-[80rem] bg-[#f7f9fa]">
        <!-- Sidebar -->

        <Sidebar />
        <!-- Main Content -->
        <main class="flex-1 p-6">
            <div class="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-96 mx-auto">
                <h2 class="text-2xl font-semibold">Profile</h2>
                <p class="text-gray-500 text-sm">Manage your account</p>
                <div class="mt-4">
                    <img :src="profileImage" alt="Profile" class="w-20 h-20 rounded-full border" />
                </div>
                <p class="text-xs text-gray-400 mt-2">File size: maximum 1MB</p>
                <p class="text-xs text-gray-400">File extension: .JPEG, .PNG</p>
                <button class="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Select image</button>

                <div class="w-full mt-4 space-y-3">
                    <div>
                        <label class="text-gray-600 text-sm">Username</label>
                        <p class="text-gray-900 font-medium">elijah00</p>
                    </div>
                    <div>
                        <label class="text-gray-600 text-sm">Name</label>
                        <input type="text"
                            class="w-full px-3 py-2 border rounded-md text-gray-900 focus:outline-none" />
                    </div>
                    <div>
                        <label class="text-gray-600 text-sm">Email</label>
                        <p class="text-gray-900 font-medium">el***********@gmail.com</p>
                    </div>
                    <div>
                        <label class="text-gray-600 text-sm">Contact</label>
                        <p class="text-gray-900 font-medium">********97</p>
                    </div>
                </div>
                <button class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md">Save</button>
            </div>
        </main>
    </div>
    <Footer />

</template>

<script>
import Logo from '@/Components/Atoms/Logo.vue';
import Sidebar from '@/Components/Organisms/Customer/Sidebar.vue';
import TopBar from '@/Components/Organisms/TopBar.vue';
import Footer from '@/Components/Organisms/Footer.vue';

export default {
    components: {
        TopBar,
        Sidebar,
        Logo,
        Footer,
    },
    data() {
        return {
            transactions: {
                'Yesterday': [
                    { id: 1, store: 'Super8 market', discount: '-20% off discount', time: '5:54 PM' },
                    { id: 2, store: 'Aeonsprint', discount: '-20% off discount', time: '5:54 PM' }
                ],
                'Feb 14, 2025': [
                    { id: 3, store: 'Starbacks', discount: '-20% off discount', time: '5:54 PM' },
                    { id: 4, store: 'SnR Printing', discount: '-20% off discount', time: '5:54 PM' }
                ],
                'January 24, 2025': [
                    { id: 5, store: 'Starbacks', discount: '-20% off discount', time: '5:54 PM' },
                    { id: 6, store: 'SnR Printing', discount: '-20% off discount', time: '5:54 PM' }
                ]
            },
        }

    },
    setup() {
    },
};
</script>

<
