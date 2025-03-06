<template>


    <MenuBar />
    <HomeBanner />

    <FAQBotton />
    <!-- <Merchant /> -->

    <Footer />

</template>

<script>
import MenuBar from '@/Components/Organisms/MenuBar.vue';
import CarosuelLogo from '@/Components/Organisms/CarosuelLogo.vue';
import HomeBanner from '@/Layout/HomeBanner.vue';
import FAQBotton from '@/Layout/FAQBotton.vue';
import Footer from '@/Components/Organisms/Footer.vue';

export default {
components: {
    MenuBar,
    HomeBanner,
    FAQBotton,
    CarosuelLogo,
    Footer,
},
setup() {
  },
};
</script>

<
