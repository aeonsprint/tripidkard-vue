import 'preline/dist/preline.js';
import "preline/preline";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';  // Import Font Awesome

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory } from 'vue-router';
import { routesAdmin, routesMerchant, routesInfluencer, routesCustomer, routesDefault } from './routes.js';
import { createPinia } from 'pinia';
import { useAuthStore } from './Stores/auth';

const router = createRouter({
    routes: [...routesAdmin, ...routesMerchant, ...routesCustomer, ...routesInfluencer, ...routesDefault],
    history: createWebHistory(),
});

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();

    // Load the authUser from localStorage if not already loaded
    if (authStore.authUser === null) {
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
            try {
                authStore.authUser = JSON.parse(storedUser);
            } catch (error) {
                console.error('Error parsing stored user data:', error);
                localStorage.removeItem('authUser');
            }
        }
    }

    const user = authStore.authUser;
    if (to.matched.some(record => record.meta.requiresAdminAuth)) {
        if (!authStore.isAuthenticated || user.role !== 'Admin') {
            next({ path: '/admin/login' });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresMerchantAuth)) {
        if (!authStore.isAuthenticated || user.role !== 'Merchant') {
            next({ path: '/login' });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresInfluencerAuth)) {
        if (!authStore.isAuthenticated || user.role !== 'Influencer') {
            next({ path: '/login' });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (authStore.isAuthenticated) {
            next(
                user.role === 'Admin'
                    ? '/admin/dashboard'
                    : user.role === 'Merchant'
                    ? '/merchant/dashboard'
                    : user.role === 'Influencer'
                    ? '/influencer/dashboard'
                    : '/'
            );
        } else {
            next();
        }
    } else {
        next();
    }
});

const app = createApp({});
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
