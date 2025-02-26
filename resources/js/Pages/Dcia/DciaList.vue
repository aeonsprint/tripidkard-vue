<template>
    <MenuBar />
    <SecondBanner
        title="Digital<span class='text-blue-500'> Creatives </span>and Influencers <span class='text-blue-500'> Academy</span>  helps creators <span class='text-blue-500'>Grow</span>  "
       subtitle="Unlock your potential with Digital Creatives & Influencers Academy.  <br> Join us and elevate your creative journey!"
        :buttons="[
            { text: 'Get Started', link: '#register-section', primary: true},
            { text: 'Learn More', link: '#webinar-section', primary: false }
        ]"
    />


    <section id="webinar-section" class="bg-white dark:bg-gray-900 py-10">
  <h2 class="font-intertext-1xl sm:text-lg lg:text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center py-2">
    <span class="text-blue-500">Digital Creatives & Influencers Academy</span> Presents a Free Technology Webinar
  </h2>
  <p class="font-onest text-center text-lg sm:text-sm font-semibold text-gray-500 tracking-wide dark:text-neutral-400 ">
    Learn from industry experts and prepare for the future!
  </p>

  <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-1 lg:px-6">
    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 class="font-inter mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Featured Speakers & Topics
      </h2>
      <h3 class="font-bold text-xl text-gray-800 dark:text-white">Speaker 1: Omar Palaming - CEO of PhilIT Systems Design</h3>
      <p class="mb-2 font-onest"><strong>Topic:</strong> Blockchain (Hedera) for Decentralized Finance</p>
      <ul class="list-disc pl-5">
        <li>Learn about the fundamentals of Blockchain Technology</li>
        <li>Explore the power of Hedera Hashgraph</li>
        <li>Prepare for the future of Decentralized Finance</li>
      </ul>

      <h3 class="font-bold text-xl text-gray-800 dark:text-white mt-4">Speaker 2: Ed Casulla - CEO of Aeonsprint Solutions Inc.</h3>
      <p class="mb-2 font-onest"><strong>Topic:</strong> Building Technology Startup Business</p>
      <ul class="list-disc pl-5">
        <li>Discover the exciting careers in Technology Entrepreneurship</li>
        <li>Learn how Disruptive Startup Businesses are built</li>
      </ul>
    </div>

    <div class="grid grid-cols-1 gap-2 mt-8">
      <img class="w-full h-96 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="Webinar image">
    </div>
  </div>

  <div id="register-section" class="text-center mt-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white">Target Participants</h3>
    <ul class="list-disc inline-block text-gray-500 dark:text-gray-400 text-left">
      <li>Senior High School Students</li>
      <li>College Students (IT, Computer Science, Comp Engr, Marketing, Business, Finance)</li>
      <li>Professionals</li>
      <li>Entrepreneurs</li>
    </ul>
    <p class="text-blue-500 font-semibold text-lg mb-4">Register now and secure your free spot!</p>
                <button class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                    Register Now
                </button>
  </div>
</section>



    <Footer />
</template>

<script>
import MenuBar from '@/Components/Organisms/MenuBar.vue';
import SecondBanner from '@/Layout/SecondBanner.vue';
import Footer from '@/Components/Organisms/Footer.vue';

export default {
    components: {
        SecondBanner,
        MenuBar,
        Footer,
    }
};
</script>
