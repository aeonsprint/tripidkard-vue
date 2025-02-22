<template>
    <aside class="w-64 bg-gray-100 p-4 min-h-screen">
        <div class="flex items-center space-x-2 mb-6">
            <Logo class="w-10 h-10 rounded-full" />

            <!-- <img src="https://via.placeholder.com/40" alt="Avatar" class="w-10 h-10 rounded-full" /> -->
            <div>
                <p class="font-semibold">Username</p>
                <a href="#" class="text-blue-500 text-sm">Edit profile</a>
            </div>
        </div>
        <nav>
            <ul class="space-y-2">
                <li v-for="item in menuItems" :key="item.label" :class="{ 'bg-gray-300': item.active }"
                    class="p-2 rounded hover:bg-gray-200 flex items-center space-x-2">
                    <span class="text-gray-600 ">{{ item.icon }}</span>
                    <a :href="item.link">{{ item.label }}</a>
                </li>
            </ul>
        </nav>
    </aside>

</template>

<script>
import Logo from '@/Components/Atoms/Logo.vue';
export default {
    components: {
        Logo,
    },
    data() {

        return {
            menuItems: [
                { label: 'Profile', link: '/customer/profile/', icon: '🏠', active: false },
                { label: 'Discount Transaction', icon: '📜', link: '/customer/discount/', active: false },
                { label: 'Joined Raffle', link: '/customer/raffle/', icon: '🎟', active: true },
                { label: 'Collections', link: '/customer/collection/', icon: '📦', active: false },
                { label: 'Activity log', link: '/customer/activity-log', icon: '📋', active: false }
            ],
        }
    }
}

</script>
