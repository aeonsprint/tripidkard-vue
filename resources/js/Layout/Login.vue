<template>
    <div class="relative bg-gradient-to-bl bg-[#FAFBFC] from-[#FAFBFC] via-transparent dark:from-blue-950 dark:via-transparent">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
                <img src="/storage/img/login.png" alt="Login Image" class="w-full h-auto">

                <div>
                    <form @submit.prevent="handleSubmit">
                        <div class="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                            <div class="p-6 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                                <div class="text-center">
                                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Log in to your account</h1>
                                </div>

                                <div class="mt-5">
                                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white">Email address</label>
                                    <input v-model="form.email" type="email" id="email" required
                                        class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                                    <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
                                </div>

                                <div class="mt-5">
                                    <label for="password" class="block text-sm font-medium text-gray-700 dark:text-white">Password</label>
                                    <input v-model="form.password" type="password" id="password" required
                                        class="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                                    <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
                                </div>

                                <div class="mt-2 text-right">
                                    <router-link to="/forgot-password" class="text-sm text-blue-600 hover:underline dark:text-blue-500">Forgot password?</router-link>
                                </div>

                                <div class="mt-5">
                                    <button type="submit" :disabled="loading"
                                        class="w-full py-3 px-4 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 disabled:opacity-50">
                                        {{ loading ? 'Loading...' : 'Log In' }}
                                    </button>
                                </div>

                                <span v-if="errors.general" class="text-red-500 text-sm text-center mt-2">{{ errors.general }}</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/Stores/auth';

const authStore = useAuthStore();
const router = useRouter();

const form = reactive({
    email: '',
    password: ''
});

const errors = reactive({
    email: '',
    password: '',
    general: ''
});

const loading = ref(false);

const handleSubmit = async () => {
    loading.value = true;
    errors.email = '';
    errors.password = '';
    errors.general = '';

    try {
        const responseErrors = await authStore.loginForm(form);

        if (responseErrors) {
            errors.email = responseErrors.email ? responseErrors.email[0] : '';
            errors.password = responseErrors.password ? responseErrors.password[0] : '';
            errors.general = responseErrors.general ? responseErrors.general : '';
        } else {
           // Handle successful login and redirect based on role
           const userRole = authStore.user.role;
            if (userRole === 'Admin') {
                router.push('/administrator/dashboard');
            } else if (userRole === 'Merchant') {
                router.push('/merchant/dashboard');
            } else if (userRole === 'Customer') {
                router.push('/customer/profile');
            } else {
                router.push('/');
            }
            window.location.reload(); // Reload after redirect

        }
    } catch (error) {
        errors.general = 'An unexpected error occurred. Please try again.';
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    authStore.getUser();
});
</script>

<style scoped>
.text-red-500 {
    color: red;
}
</style>
