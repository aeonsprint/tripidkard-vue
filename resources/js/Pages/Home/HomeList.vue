<template>



    <TopBar />
    <Category />
    <Banner />

    <Merchant />

    <Footer />

</template>

<script>
import TopBar from '@/Components/Organisms/TopBar.vue';
import Category from '@/Layout/Category.vue';
import Banner from '@/Layout/Banner.vue';
import Merchant from '@/Layout/Merchant.vue';
import Footer from '@/Components/Organisms/Footer.vue';

export default {
    components: {
        TopBar,
        Banner,
        Merchant,
        Category,
        Footer,
    },
    setup() {
    },
};
</script>

<
