<script setup>
import { ref, onMounted } from 'vue'

const raffles = ref([
  {
    id: 1,
    title: "Christmas Merry & Bright e-Raffle",
    description: "Win over P1 million worth of dazzling prizes! Join now!",
    image: "https://via.placeholder.com/600x400?text=Christmas+Raffle",
    link: "/raffle/details",
    cta_text: "Join Raffle"
  },
  {
    id: 2,
    title: "Super 8 Trike Bonanza Raffle Promo",
    description: "6 winners will take home brand-new tricycles! Enter now.",
    image: "https://via.placeholder.com/600x400?text=Trike+Bonanza",
    link: "/raffle/details",
    cta_text: "Join Raffle"
  },
  {
    id: 3,
    title: "Paskong Panalo ng Cleanfuel",
    description: "Win a Toyota Raize, Vespa, and more!",
    image: "https://via.placeholder.com/600x400?text=Paskong+Panalo",
    link: "/raffle/details",
    cta_text: "Join Raffle"
  }
])

onMounted(() => {
  console.log('Dummy raffle data loaded!')
})
</script>

<template>
  <div class="container mx-auto p-4">
    <div v-for="raffle in raffles" :key="raffle.id" class="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <img :src="raffle.image" :alt="raffle.title" class="w-full h-64 object-cover" />
      <div class="p-4 text-center">
        <h2 class="text-xl font-bold">{{ raffle.title }}</h2>
        <p class="text-gray-600 my-2">{{ raffle.description }}</p>
        <a :href="raffle.link" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 inline-block mt-2">
          {{ raffle.cta_text }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here if needed */
</style>
