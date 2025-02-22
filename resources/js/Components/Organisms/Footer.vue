<template>
    <footer class="mt-auto w-full max-w-[80rem] py-10 px-4 sm:px-1 lg:px-8 mx-auto">
      <!-- Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        <!-- Brand Section -->
        <BrandSection />

        <!-- Be a Partner Section -->
        <QuickLinksSection title="Be a Partner" :links="partnerLinks" />

        <!-- Customer Services Section -->
        <QuickLinksSection title="Customer Services" :links="customerServiceLinks" />

        <!-- Quick Links Section -->
        <QuickLinksSection title="Quick Links" :links="quickLinks" />
      </div>

      <!-- Footer Bottom -->
      <FooterBottom />
    </footer>
  </template>

  <script>
  import QuickLinksSection from '@/Components/molecules/QuickLinksSection.vue';
  import BrandSection from '@/Components/Organisms/BrandSection.vue';
  import FooterBottom from '@/Components/Organisms/FooterBottom.vue';

  export default {
    components: {
      BrandSection,
      QuickLinksSection,
      FooterBottom,
    },
    data() {
      return {
        partnerLinks: [
          { text: 'How to Join', href: '/merchant/signup' },
          { text: 'Raffle', href: '/join/raffle' },
          { text: 'Help Center', href: '/help/center' },
        ],
        customerServiceLinks: [
          { text: 'Login', href: '/login' },
          { text: 'Customer Register', href: '/customer/signup' },
          { text: 'Landing Page', href: '/about-us' },
          { text: 'Tripidkard', href: '/tripidkard' },
        ],
        quickLinks: [
          { text: 'About Us', href: '#' },
          { text: 'Scanner', href: '#' },
          { text: 'Buy Card', href: '#' },
        ],
      };
    },
  };
  </script>
