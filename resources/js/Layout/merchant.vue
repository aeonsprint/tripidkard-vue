<template>
    <div class="container max-w-[70rem] mx-auto">
        <div id="merchantCarousel" class="carousel relative">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="border rounded p-3 mb-3 search-merchant">
                        <div class="flex justify-between">
                            <div class="mb-2 flex text-gray-600 title-affiliate">
                                <h1 class="text-lg font-bold text-gray-900 dark:text-neutral-100 font-inter">
                                    Merchants Deals and Discount
                                </h1>
                            </div>
                            <div class="font-onest font-sm text-gray-900 dark:text-neutral-100">
                                See More
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-5 md:grid-cols-5 gap-3">
                        <div v-if="filteredMerchants.length === 0" class="col-span-3 text-center">
                            <div class="max-w-sm mx-auto shadow-lg">
                                <img src="/storage/img/not-found.png/storage/img/not-found.png/storage/img/not-found.png" class="w-full h-64 object-cover" alt="No Results" />
                                <div class="p-4">
                                    <h5 class="font-bold">Hmmm, we didn’t find any merchants in your search.</h5>
                                </div>
                            </div>
                        </div>

                        <div v-for="merchant in paginatedMerchants" :key="merchant.id" class="mb-4 flex flex-col items-stretch">
                            <div class="relative bg-white border rounded-xl shadow-sm overflow-hidden">
                                <router-link  to="/merchant/page" >
                                    <div class="relative">
                                        <!-- <img :src="merchant.avatar ? `/storage/img/${merchant.avatar}` : '/storage/img/logo.jpg'" class="w-full h-48 object-cover" alt="Merchant Avatar" /> -->
                                        <img src="/storage/img/logo.jpg" class="w-full h-48 object-cover" alt="Merchant Avatar" />

                                        <span class="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">-{{ merchant.discount }}%</span>
                                        <button class="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                                            <i class="fa fa-bookmark text-gray-500"></i>
                                        </button>
                                    </div>
                                </router-link>
                                <div class="p-4">
                                    <!--

                                    :to="`/merchants/${merchant.merchant_id}/${merchant.business_name}`"
                                    <router-link :to="`/merchants/${merchant.merchant_id}/${merchant.business_name}`" class="text-black">
                                        <h5 class="font-bold text-gray-900">{{ merchant.business_name }}</h5>
                                    </router-link> -->

                                    <router-link to="/merchant/page" class="text-black">
                                        <h5 class="font-bold text-gray-900">{{ merchant.business_name }}</h5>
                                    </router-link>

                                    <p class="text-sm text-gray-600 flex items-center mt-1">
                                        <i class="fa fa-map-marker text-gray-400 mr-1"></i> {{ merchant.city }}, {{ merchant.province }}
                                    </p>
                                    <div class="flex justify-between items-center border-t pt-2 text-dark mt-2">
                                        <span class="text-sm text-gray-500">{{ merchant.business_category }} > {{ merchant.business_sub_category }}</span>
                                        <div class="flex items-center space-x-2">
                                            <i class="fa fa-heart" :class="merchant.isHearted ? 'text-red-500' : 'text-gray-500'" @click="toggleHeart(merchant)" style="font-size: 15px; cursor: pointer;"></i>
                                            <span class="text-sm text-gray-600">2.8k</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end items-center mt-4 bg-white p-2 rounded-lg">
                        <button :disabled="currentPage === 1" @click="currentPage--" class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white disabled:bg-gray-300 disabled:text-gray-500">
                            Previous
                        </button>
                        <div class="flex justify-center items-center mx-4">
                            <span v-for="page in totalPages" :key="page" :class="{'bg-blue-500 text-white': currentPage === page, 'bg-white text-blue-500': currentPage !== page}" @click="currentPage = page" class="cursor-pointer px-4 py-2 mx-1 rounded-lg">
                                {{ page }}
                            </span>
                        </div>
                        <button :disabled="currentPage === totalPages" @click="currentPage++" class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white disabled:bg-gray-300 disabled:text-gray-500">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


    <script setup>
    import { ref, computed } from 'vue';

    const merchants = ref([
        {
            id: 1,
            merchant_id: "1",
            business_name: "Sunflower Café",
            avatar: "sunflower-cafe.jpg",
            discount: 10,
            zip: "2400",
            street: "Main Street",
            city: "Dagupan",
            province: "Pangasinan",
            business_category: "Café",
            business_sub_category: "Food & Beverages",
            isHearted: false
        },
        {
            id: 2,
            merchant_id: "2",
            business_name: "Green Plaza Mall",
            avatar: "green-plaza-mall.jpg",
            discount: 20,
            zip: "2401",
            street: "Baywalk Avenue",
            city: "Alaminos",
            province: "Pangasinan",
            business_category: "Mall",
            business_sub_category: "Shopping",
            isHearted: true
        },
        {
            id: 3,
            merchant_id: "3",
            business_name: "Manaoag Market",
            avatar: "manaoag-market.jpg",
            discount: 15,
            zip: "2430",
            street: "Poblacion",
            city: "Manaoag",
            province: "Pangasinan",
            business_category: "Market",
            business_sub_category: "Shopping",
            isHearted: false
        },
        {
            id: 4,
            merchant_id: "4",
            business_name: "Green Plaza Mall",
            avatar: "green-plaza-mall.jpg",
            discount: 20,
            zip: "2401",
            street: "Baywalk Avenue",
            city: "Alaminos",
            province: "Pangasinan",
            business_category: "Mall",
            business_sub_category: "Shopping",
            isHearted: true
        },
        {
            id: 5,
            merchant_id: "5",
            business_name: "Green Plaza Mall",
            avatar: "green-plaza-mall.jpg",
            discount: 20,
            zip: "2401",
            street: "Baywalk Avenue",
            city: "Alaminos",
            province: "Pangasinan",
            business_category: "Mall",
            business_sub_category: "Shopping",
            isHearted: true
        },
        ,
        {
            id: 6,
            merchant_id: "5",
            business_name: "Green Plaza Mall",
            avatar: "green-plaza-mall.jpg",
            discount: 20,
            zip: "2401",
            street: "Baywalk Avenue",
            city: "Alaminos",
            province: "Pangasinan",
            business_category: "Mall",
            business_sub_category: "Shopping",
            isHearted: true
        },

        ,
        {
            id: 7,
            merchant_id: "5",
            business_name: "Green Plaza Mall",
            avatar: "green-plaza-mall.jpg",
            discount: 20,
            zip: "2401",
            street: "Baywalk Avenue",
            city: "Alaminos",
            province: "Pangasinan",
            business_category: "Mall",
            business_sub_category: "Shopping",
            isHearted: true
        },
    ]);

    const searchQuery = ref('');
    const currentPage = ref(1);
    const itemsPerPage = 20;

    const filteredMerchants = computed(() => {
        return merchants.value.filter(merchant => {
            return (
                merchant.business_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                merchant.city.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                merchant.province.toLowerCase().includes(searchQuery.value.toLowerCase())
            );
        });
    });

    const totalPages = computed(() => {
        return Math.ceil(filteredMerchants.value.length / itemsPerPage);
    });

    const paginatedMerchants = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredMerchants.value.slice(start, end);
    });

    const toggleHeart = (merchant) => {
        merchant.isHearted = !merchant.isHearted;
    };
    </script>
