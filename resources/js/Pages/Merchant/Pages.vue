<template>



    <TopBar />
    <Breadcrumb />
    <Banner />
    <Description />

    <Merchant />

    <Footer />

</template>

<script>
import TopBar from '@/Components/Organisms/TopBar.vue';
import Breadcrumb from '@/Components/Molecules/Breadcrumb.vue';
import Description from '@/Layout/Merchant/Description.vue';
import Banner from '@/Layout/Merchant/RaffleBanner.vue';
import Merchant from '@/Layout/Merchant.vue';
import Footer from '@/Components/Organisms/Footer.vue';

export default {
    components: {
        TopBar,
        Banner,
        Merchant,
        Description,
        Breadcrumb,
        Footer,
    },
    setup() {
    },
};
</script>

