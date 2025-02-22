<script setup>
import { ref } from 'vue'

const raffle = ref({
  title: "Super 8 E-Trike Bonanza Raffle Promo",
  noOfWinners: 3,
  prize: "House and Lot",
  participants: 1000,
  drawDate: "Mar 1, 2025",
  deadline: "Feb 28, 2025",
  image: "/images/raffle-banner.png",
  mechanics: [
    {
      title: "Eligibility",
      details: [
        "The raffle is open to all [age group] who [location or other requirements].",
        "Participants must [purchase a ticket, complete a form, make a purchase, or follow social media accounts, etc.].",
        "Employees and immediate family members of [organization/company name] are not eligible to participate."
      ]
    },
    {
      title: "Raffle Period",
      details: [
        "The raffle will run from [start date] to [end date].",
        "Entries must be submitted before [time] on [end date]."
      ]
    },
    {
      title: "How to Enter",
      details: [
        "[Option 1] Purchase a ticket at [website/store].",
        "[Option 2] Follow [social media platform] and tag [X number of friends].",
        "[Option 3] Other criteria: share a post, sign up, complete a task, etc."
      ]
    },
    {
      title: "Entry Limits",
      details: [
        "Participants are allowed [X entries] per person. Additional entries may be earned through [bonus actions]."
      ]
    },
    {
      title: "Prize Details",
      details: [
        "The winner(s) will receive [list prizes with value or description, e.g., “a $500 shopping spree or a tech gadget”].",
        "There will be [X number] of winners.",
        "Prizes are non-transferable and cannot be redeemed for cash."
      ]
    },
    {
      title: "Winner Selection",
      details: [
        "Winners will be selected through a [random drawing, live event, etc.] on [date].",
        "The drawing will be held at [time] and streamed at [platform, if applicable].",
        "Winners will be notified via [email/phone] within [X days]."
      ]
    },
    {
      title: "Winner Confirmation",
      details: [
        "Winners must confirm acceptance of the prize within [X hours/days] after being contacted.",
        "If a winner fails to respond within the timeframe, another winner will be selected."
      ]
    },
    {
      title: "Announcement",
      details: [
        "The winners will be announced on [social media platform, website, or during a live broadcast].",
        "All participants are encouraged to follow [platform] for updates."
      ]
    },
    {
      title: "Disclaimers",
      details: [
        "The raffle is governed by [relevant laws or regulations].",
        "[Organization/Company Name] reserves the right to disqualify any participant found violating the rules.",
        "By entering, participants agree to abide by these rules and allow [organization] to use their name and image for promotional purposes."
      ]
    }
  ]
})
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Title -->
    <h1 class="text-3xl font-bold">Raffle Details</h1>

    <!-- Raffle Info -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mt-4">
      <div class="flex flex-col items-center">
        <span class="text-blue-500 text-xl">🏆</span>
        <p class="font-semibold">No. of Winners</p>
        <p>{{ raffle.noOfWinners }}</p>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-blue-500 text-xl">🎁</span>
        <p class="font-semibold">Prize</p>
        <p>{{ raffle.prize }}</p>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-blue-500 text-xl">👥</span>
        <p class="font-semibold">No. of Participants</p>
        <p>{{ raffle.participants }}</p>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-blue-500 text-xl">📅</span>
        <p class="font-semibold">Draw Date</p>
        <p>{{ raffle.drawDate }}</p>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-blue-500 text-xl">⏳</span>
        <p class="font-semibold">Deadline</p>
        <p>{{ raffle.deadline }}</p>
      </div>
    </div>

    <!-- Banner Image -->
    <div class="mt-6">
      <img :src="raffle.image" alt="Raffle Banner" class="w-full rounded-lg shadow-md">
    </div>

    <!-- Mechanics -->
    <div class="mt-6">
      <h2 class="text-2xl font-bold">Mechanics</h2>
      <div v-for="(section, index) in raffle.mechanics" :key="index" class="mt-4">
        <h3 class="text-lg font-semibold">{{ section.title }}</h3>
        <ul class="list-disc ml-6 text-gray-700">
          <li v-for="(item, i) in section.details" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- Join Raffle Button -->
    <div class="mt-8 text-center">
      <button class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        JOIN RAFFLE
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Add additional styles if needed */
</style>
