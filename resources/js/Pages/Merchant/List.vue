<template>



    <TopBar />
    <Category />

    <Breadcrumb />
    <Filter />

    <Merchant />

    <Footer />

</template>

<script>
import TopBar from '@/Components/Organisms/TopBar.vue';
import Category from '@/Layout/Category.vue';
import Filter from '@/Layout/Merchant/Fillter.vue';
import Breadcrumb from '@/Components/Molecules/Breadcrumb.vue';
import Merchant from '@/Layout/Merchant.vue';
import Footer from '@/Components/Organisms/Footer.vue';

export default {
    components: {
        TopBar,
        Category,
        Filter,
        Merchant,
        Breadcrumb,
        Footer,
    },
    setup() {
    },
};
</script>
