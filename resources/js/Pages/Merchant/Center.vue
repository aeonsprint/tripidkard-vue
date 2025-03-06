<script setup>
import { ref } from 'vue'

const searchQuery = ref("")
const faqs = ref([
  {
    question: "What is Mobbin?",
    answer: "Mobbin is the world’s largest UI & UX reference library. It’s always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.",
    open: false
  },
  {
    question: "How often do you update the library?",
    answer: "We update the library weekly with new designs from the latest popular apps.",
    open: false
  },
  {
    question: "Can I get a free trial?",
    answer: "Yes! We offer a free trial so you can explore the platform before subscribing.",
    open: false
  },
  {
    question: "Do you have discounts for students and educators?",
    answer: "Yes, we offer discounts for students and educators. Contact support for details.",
    open: false
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept credit/debit cards and PayPal.",
    open: false
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription anytime from your account settings.",
    open: false
  }
])

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
     <MenuBar />
  <div class="max-w-4xl mx-auto p-6">
    <!-- Header Section with Search -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-blue-600">How can we help you?</h1>

      <div class="relative mt-4 max-w-lg mx-auto">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search"
          class="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <!-- Images / Illustrations -->
      <div class="flex justify-center mt-6">
        <img src="/storage/img/event.jpg" alt="Search Help" class="w-52 h-52">
        <img src="/storage/img/event.jpg" alt="Help Center" class="w-52 h-52">
        <img src="/storage/img/event.jpg" alt="Support" class="w-52 h-52">
      </div>
    </div>

    <!-- Helpful Topics -->
    <div class="mt-6 text-center">
      <h2 class="text-lg font-semibold">Browse helpful topics</h2>
      <div class="flex justify-center gap-4 mt-2 text-blue-500">
        <a href="#" class="hover:underline">Tripidkard</a>
        <a href="#" class="hover:underline">Merchant</a>
        <a href="#" class="hover:underline">Customers</a>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-6">
      <div v-for="(faq, index) in faqs" :key="index" class="border-b py-4">
        <button @click="toggleFAQ(index)" class="w-full text-left flex justify-between items-center">
          <div class="flex items-center gap-3">
            <span class="text-lg font-medium">{{ faq.question }}</span>
          </div>
          <span>{{ faq.open ? '−' : '+' }}</span>
        </button>
        <p v-if="faq.open" class="mt-2 text-gray-600">{{ faq.answer }}</p>
      </div>
    </div>
  </div>
  <Footer />

</template>
<script>
import Footer from '@/Components/Organisms/Footer.vue';
import MenuBar from '../../Components/Organisms/MenuBar.vue';

export default {
    components: {
        MenuBar,
        Footer,
    },
    setup() {
    },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
