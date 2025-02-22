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
  import BrandSection from '@/components/organisms/BrandSection.vue';
  import QuickLinksSection from '@/components/molecules/QuickLinksSection.vue';
  import FooterBottom from '@/components/organisms/FooterBottom.vue';

  export default {
    components: {
      BrandSection,
      QuickLinksSection,
      FooterBottom,
    },
    data() {
      return {
        partnerLinks: [
          { text: 'How to Join', href: '#' },
          { text: 'Our Service', href: '#' },
          { text: 'Merchant Center', href: '#' },
        ],
        customerServiceLinks: [
          { text: 'Login/Register', href: '#' },
          { text: 'Join Raffles', href: '#' },
          { text: 'Help Center', href: '#' },
          { text: 'Contact Center', href: '#' },
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
