<template>



    <!-- <TopBar />
    <Category />
    <Banner />
     -->

    <MenuBar />
    <SecondBanner />
    <CardGroup />
    <SecondSection />
    <FAQ />
    <!-- <Merchant /> -->
    <!-- <HomeBanner /> -->

    <Footer />

</template>

<script>
import TopBar from '@/Components/Organisms/TopBar.vue';
import Category from '@/Layout/Category.vue';
import HomeBanner from '@/Layout/HomeBanner.vue';
import SecondBanner from '@/Layout/SecondBanner.vue';
import CardGroup from '@/Layout/CardGroup.vue';
import SecondSection from '@/Layout/SecondSection.vue';
import FAQBotton from '@/Layout/FAQBotton.vue';
import FAQ from '@/Layout/FAQ.vue';
import Banner from '@/Layout/Banner.vue';
import Merchant from '@/Layout/Merchant.vue';
import MenuBar from '@/Components/Organisms/MenuBar.vue';
import Footer from '@/Components/Organisms/Footer.vue';

export default {
components: {
    TopBar,
    Banner,
    HomeBanner,
    SecondBanner,
    CardGroup,
    FAQBotton,
    FAQ,
    SecondSection,
    Merchant,
    Category,
    MenuBar,
    Footer,
},
setup() {
  },
};
</script>

<
