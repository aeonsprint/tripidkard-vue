<template>
    <MenuBar />
    <SecondBanner
        title="Digital<span class='text-blue-500'> Creatives </span>and Influencers <span class='text-blue-500'> Academy</span>  helps creators <span class='text-blue-500'>Grow</span>  "
        subtitle="Unlock your potential with Digital Creatives & Influencers Academy.  <br> Join us and elevate your creative journey!"
        :buttons="[
            { text: 'Get Started', link: '#register-section', primary: true },
            { text: 'Learn More', link: '#webinar-section', primary: false }
        ]"
    />

    <!-- Webinar Section -->
    <section id="webinar-section" class="bg-white dark:bg-gray-900 py-10 px-4">
        <h2 class="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-900 dark:text-white text-center">
            <span class="text-blue-500">Digital Creatives & Influencers Academy</span> Presents a Free Technology Webinar
        </h2>
        <p class="text-center text-base sm:text-lg text-gray-500 dark:text-neutral-400">
            Learn from industry experts and prepare for the future!
        </p>

        <div class="flex flex-col lg:flex-row gap-8 py-8 px-4 max-w-screen-xl mx-auto">
            <!-- Text Content -->
            <div class="flex-1">
                <h2 class="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">Featured Speakers & Topics</h2>

                <div class="mt-4">
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                        Speaker 1: Omar Palaming - CEO of PhilIT Systems Design
                    </h3>
                    <p class="font-semibold">Topic: Blockchain (Hedera) for Decentralized Finance</p>
                    <ul class="list-disc pl-5 text-gray-600">
                        <li>Learn about the fundamentals of Blockchain Technology</li>
                        <li>Explore the power of Hedera Hashgraph</li>
                        <li>Prepare for the future of Decentralized Finance</li>
                    </ul>
                </div>

                <div class="mt-4">
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                        Speaker 2: Ed Casulla - CEO of Aeonsprint Solutions Inc.
                    </h3>
                    <p class="font-semibold">Topic: Building Technology Startup Business</p>
                    <ul class="list-disc pl-5 text-gray-600">
                        <li>Discover the exciting careers in Technology Entrepreneurship</li>
                        <li>Learn how Disruptive Startup Businesses are built</li>
                    </ul>
                </div>
            </div>

            <!-- Image Section -->
            <div class="flex-1 flex justify-center">
                <img class="w-full sm:max-w-md lg:max-w-lg rounded-lg" src="/storage/img/dcia.jpg" alt="Webinar image">
            </div>
        </div>

        <!-- Register Section -->
        <div id="register-section" class="text-center mt-6 px-4">
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Target Participants</h3>
            <ul class="list-disc inline-block text-gray-500 dark:text-gray-400 text-left">
                <li>Senior High School Students</li>
                <li>College Students (IT, Computer Science, Comp Engr, Marketing, Business, Finance)</li>
                <li>Professionals</li>
                <li>Entrepreneurs</li>
            </ul>
            <p class="text-blue-500 font-semibold text-lg my-4">Register now and secure your free spot!</p>
            <button @click="openRegisterModal"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                Register Now
            </button>
        </div>
    </section>

    <!-- Register Modal -->
    <div v-if="isRegisterModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4"
        @click.self="closeRegisterModal">
        <div class="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-2xl font-bold mb-4 text-center">Register Using Email</h2>


                <button @click.prevent="handleGoogleAuth" :disabled="loadingGoogle"
                    class="w-full bg-red-600 text-white border border-red-600  py-3 rounded-lg mb-4 flex items-center justify-center gap-2 hover:bg-white hover:text-red-600">

                    <GoogleIcon class="w-5 h-5" />
                     {{ loadingGoogle ? 'Loading...' : 'Sign Up with Google' }}
                </button>

                <button @click.prevent="handleFacebookAuth" :disabled="loading"
                    class="w-full bg-blue-600 text-white border border-blue-600 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-blue-600">

                    <FacebookIcon class="w-5 h-5" />
                     {{ loadingfacebook ? 'Loading...' : 'Sign Up with Google' }}
                </button>
        </div>
    </div>


    <!-- Already Registered Modal -->
    <div v-if="isAlreadyRegisteredModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="closeAlreadyRegisteredModal">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <img class="w-full h-96 rounded-lg"
                    src="/storage/img/dcia.jpg"
                    alt="Webinar image">
            <p class="text-gray-600 text-center my-4">Please fill up the form below to complete your registration.</p>
            <a href="https://bit.ly/DCIA_Mar28" class="block text-center text-blue-600 hover:underline mb-5">https://bit.ly/DCIA_Mar28</a>
            <button @click="closeAlreadyRegisteredModal" class="w-full bg-blue-600 text-white py-2 rounded-lg">
                OK
            </button>
        </div>
    </div>

    <Footer />
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MenuBar from '@/Components/Organisms/MenuBar.vue';
import SecondBanner from '@/Layout/SecondBanner.vue';
import Footer from '@/Components/Organisms/Footer.vue';
import GoogleIcon from '@/Components/Atoms/svg/google.vue';
import FacebookIcon from '@/Components/Atoms/svg/facebook.vue';

import axios from 'axios';

export default {
    components: {
        SecondBanner,
        MenuBar,
        Footer,
        GoogleIcon,
        FacebookIcon,
    },
    setup() {
        const isRegisterModalOpen = ref(false);
        const isAlreadyRegisteredModalOpen = ref(false);
        const form = ref({
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            password: ''
        });
        const loadingGoogle = ref(false);
        const loadingFacebook = ref(false);

        const route = useRoute();
        const router = useRouter();

        const openRegisterModal = () => {
            isRegisterModalOpen.value = true;
        };

        const closeRegisterModal = () => {
            isRegisterModalOpen.value = false;
        };

        const closeAlreadyRegisteredModal = () => {
            isAlreadyRegisteredModalOpen.value = false;
            router.replace({ query: {} }); // Remove query param from URL after showing modal
        };

        const handleGoogleAuth = async () => {
            loadingGoogle.value = true;
            try {
                const response = await axios.get('/auth/google');
                if (response.data.redirect_url) {
                    window.location.href = response.data.redirect_url;
                }
            } catch (error) {
                console.error('Error during Google authentication:', error);
            } finally {
                loadingGoogle.value = false;
    }
        };

        const handleFacebookAuth = async () => {
            loadingFacebook.value = true;
            try {
                const response = await axios.get('/auth/facebook');
                if (response.data.redirect_url) {
                    window.location.href = response.data.redirect_url;
                }
            } catch (error) {
                console.error('Error during Google authentication:', error);
            } finally {
                loadingFacebook.value = false;
    }
        };

        // Detect if user is already registered via Google
        onMounted(() => {
            const queryParams = new URLSearchParams(window.location.search);
            if (queryParams.get('already_registered') === 'true') {
                isAlreadyRegisteredModalOpen.value = true;
            }
        });

        return {
            isRegisterModalOpen,
            isAlreadyRegisteredModalOpen,
            form,
            openRegisterModal,
            closeRegisterModal,
            closeAlreadyRegisteredModal,
            handleGoogleAuth,
            handleFacebookAuth,
            loadingGoogle,
            loadingFacebook,

        };
    }
};
</script>
