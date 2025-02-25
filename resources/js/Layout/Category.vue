<template>
    <div class="mt-4 relative max-w-[68rem] mx-auto">
        <div class="overflow-x-auto pb-3 scrollbar-hide">
            <div class="flex space-x-5 px-4 min-w-max">
                <button v-for="category in categories" :key="category.name" @click="selectCategory(category.name)"
                    class="flex items-center space-x-2 px-4 py-2 rounded-lg text-blue-500 bg-blue-100 hover:bg-blue-200 transition flex-shrink-0">
                    <component :is="category.icon" class="w-5 h-5 flex-shrink-0" />
                    <span class="whitespace-nowrap">{{ category.name }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { Utensils, Shirt, Camera, Wrench, Heart, Laptop, Megaphone, Globe, Film, Car, Home, Package } from "lucide-vue-next";

const router = useRouter();

const categories = [
    { name: "Retail", icon: Package },
    { name: "Food & Beverage", icon: Utensils },
    { name: "Health and Wellness", icon: Heart },
    { name: "Technology", icon: Laptop },
    { name: "Advertising Agencies", icon: Megaphone },
    { name: "Beauty and Personal Care", icon: Shirt },
    { name: "Travel and Leisure", icon: Globe },
    { name: "Entertainment", icon: Film },
    { name: "Automotive", icon: Car },
    { name: "Home and Garden", icon: Home },
    { name: "Others", icon: Wrench },
];

// Navigate to merchant list with selected category as query param
const selectCategory = (category) => {
    router.push({ path: "/merchant/list", query: { category } }).then(() => {
        window.location.reload(); // Force reload to apply query changes
    });
};
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
