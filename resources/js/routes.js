// Import components
import AdminDashboard from "./Pages/Dashboard/Admin/OverviewList.vue";

// import AdminMerchant from './Pages/Admin/Merchant/MerchantList.vue';
// import AdminMerchantPending from './Pages/Admin/Merchant/MerchantPending.vue';
// import AdminMerchantForm from './Pages/Admin/Merchant/MerchantRegister.vue';
// import AdminMerchantArchive from './Pages/Admin/Merchant/MerchantArchive.vue';

// import AdminInfluencer from './Pages/Admin/Influencer/InfluencerList.vue';
// import AdminInfluencerPending from './Pages/Admin/Influencer/InfluencerPending.vue';
// import AdminInfluencerForm from './Pages/Admin/Influencer/InfluencerRegister.vue';
// import AdminInfluencerArchive from './Pages/Admin/Influencer/InfluencerArchive.vue';
// import AdminScanner from './Pages/Admin/Scanner/Qr-Code.vue';
// import AdminOrderStarForm from './Pages/Admin/Order/OrderPointRegister.vue';

// import AdminTripidkard from './Pages/Admin/Tripidkard/TripidkardList.vue';
// import AdminTripidkardForm from './Pages/Admin/Tripidkard/TripidkardRegister.vue';
// import AdminCustomer from './Pages/Admin/Customer/CustomerList.vue';
// import AdminCustomerPoints from './Pages/Admin/Customer/CustomerPoints.vue';
// import AdminCustomerForm from './Pages/Admin/Customer/CustomerRegister.vue';
// import AdminLoyaltyPoint from './Pages/Admin/Points/LoyaltyPointList.vue';
// import AdminLoyaltyStarForm from './Pages/Admin/Points/LoyaltyPointRegister.vue';
// import AdminStarForm from './Pages/Admin/Points/StarsForm.vue';
// import AdminCustomerStars from './Pages/Admin/Points/CustomerStars.vue';
// import AdminOrderPointList from './Pages/Admin/Order/PointsList.vue';
// import AdminLogs from './Pages/Admin/ActivityLogs/Logs.vue';
// import AdminProfile from './Pages/Admin/Profile/ProfileList.vue';

// Import Merchant
import MerchantDashboard from "./Pages/Dashboard/Merchant/OverviewList.vue";
import MerchantProfile from "./Pages/Dashboard/Merchant/ProfileList.vue";
import MerchantDiscount from "./Pages/Dashboard/Merchant/DiscountList.vue";
import MerchantAnalytics from "./Pages/Dashboard/Merchant/Analytics.vue";
import MerchantRaffle from "./Pages/Dashboard/Merchant/Raffle/RaffleList.vue";
import MerchantDeals from "./Pages/Dashboard/Merchant/FlashDeals/FlashDealsMain.vue";
import MerchantLogs from "./Pages/Dashboard/Merchant/ActivityLog.vue";
import MerchantBilling from "./Pages/Dashboard/Merchant/Billing.vue";
import MerchantPlan from "./Pages/Dashboard/Merchant/Plan.vue";
import MerchantNotification from "./Pages/Dashboard/Merchant/notification.vue";

// import MerchantDashboard from './Pages/Merchant/Dashboard/Dashboard.vue';
// import MerchantScanner from './Pages/Merchant/Scanner/Qr-Code.vue';
// import MerchantTripidkard from './Pages/Merchant/Tripidkard/TripidkardList.vue';
// import MerchantCustomer from './Pages/Merchant/Customer/CustomerList.vue';
// import MerchantCustomerForm from './Pages/Merchant/Customer/CustomerRegister.vue';
// import MerchantCustomerPoints from './Pages/Merchant/Customer/CustomerPoints.vue';
// import MerchantLoyaltyPoint from './Pages/Merchant/Points/LoyaltyPointList.vue';
// import MerchantLoyaltyDiscount from './Pages/Merchant/Points/DiscountPointList.vue';
// import MerchantStarsPointForm from './Pages/Merchant/Points/LoyaltyPointRegister.vue';
// import OrderCard from './Pages/Merchant/Orders/orderCards.vue';
// import createVoucher from './Pages/Merchant/Voucher/createVoucher.vue';
// import VoucherList from './Pages/Merchant/Voucher/voucherlist.vue';
// import CartList from './Pages/Merchant/Voucher/cartlist.vue';
// import OrderPoints from './Pages/Merchant/Orders/orderPoints.vue';

import CustomerProfile from "./Pages/Dashboard/Customer/ProfileList.vue";
import CustomerDiscount from "./Pages/Dashboard/Customer/DiscountList.vue";
import CustomerRaffle from "./Pages/Dashboard/Customer/RaffleList.vue";
import CustomerCollection from "./Pages/Dashboard/Customer/CollectionList.vue";
import CustomerLog from "./Pages/Dashboard/Customer/ActivityLogList.vue";
// import OrdeLists from './Pages/Merchant/Orders/list.vue';

// // Import influencer
// import InfluencerDashboard from './Pages/Influencer/Dashboard/Dashboard.vue';
// import InfluencerScanner from './Pages/Influencer/Scanner/Qr-Code.vue';
// import InfluencerTripidkard from './Pages/Influencer/Tripidkard/TripidkardList.vue';
// import InfluencerCustomer from './Pages/Influencer/Customer/CustomerList.vue';
// import InfluencerCustomerForm from './Pages/Influencer/Customer/CustomerRegister.vue';
// import InfluencerProfile from './Pages/Influencer/Profile/ProfileList.vue';
// import InfluencerOrderCard from './Pages/Influencer/Orders/orderCards.vue';
// import InfluencerLogs from './Pages/Influencer/ActivityLogs/Logs.vue';

// import MerchantLogs from './Pages/Merchant/ActivityLogs/Logs.vue';

// import AdminLogin from './Pages/Auth/Admin/Login.vue';
// import Login from './Pages/Auth/Login.vue';
// import ForgotPassword from './Pages/Auth/ResetPassword/Forgot.vue';
// import ResetPassword from './Pages/Auth/ResetPassword/Reset.vue';
// import Profile from './Pages/Profiles/Information.vue';
// import NotFound from './Pages/Error/404.vue';

import Index from "./Pages/Home/HomeList.vue";
import About from "./Pages/About/AboutUsList.vue";
import Tripidkard from "./Pages/Tripidkard/TripidkardList.vue";
import MerchantPage from "./Pages/Merchant/Pages.vue";
import JoinRaffle from "./Pages/Merchant/Raffle.vue";
import RaffleDetails from "./Pages/Merchant/RaffleDetails.vue";
import MerchantCenter from "./Pages/Merchant/Center.vue";
import MerchantSignup from "./Pages/Merchant/SignUp.vue";
import CustomerSignup from "./Pages/Customer/Signup.vue";
import MerchantLogin from "./Pages/Login/Login.vue";
// import CustomerFAQ from './Pages/Home/Tripidkard/CustomerFAQ.vue';
// import MerchantFAQ from './Pages/Home/Tripidkard/MerchantFAQ.vue';

// import Raffle from './Pages/Home/JoinTheFun/Raffle.vue';
// import Points from './Pages/Home/JoinTheFun/Points.vue';
// import Events from './Pages/Home/JoinTheFun/Events.vue';

const routesAdmin = [
    {
        path: "/admin/dashboard/",
        name: "admin.dashboard",
        component: AdminDashboard,
        meta: { title: "Admin Dashboard", breadcrumb: "admin/dasboard" },
    },
    // { path: '/admin/merchant/', name: 'admin.merchant', component: AdminMerchant, meta: { title: 'Merchant Listing', requiresAdminAuth: true } },
    // { path: '/admin/merchant-pending/', name: 'admin.merchant-pending', component: AdminMerchantPending, meta: { title: 'Merchant Pending', requiresAdminAuth: true } },
    // { path: '/admin/merchant/register', name: 'admin.merchant.register', component: AdminMerchantForm, meta: { title: 'Merchant Register', requiresAdminAuth: true } },
    // { path: '/admin/merchant/:id/edit', name: 'admin.merchant.edit', component: AdminMerchantForm, meta: { title: 'Merchant Update', requiresAdminAuth: true } },
    // { path: '/admin/merchant/archive', name: 'admin.merchant.archive', component: AdminMerchantArchive, meta: { title: 'Merchant Archive', requiresAdminAuth: true } },

    // { path: '/admin/influencer/', name: 'admin.influencer', component: AdminInfluencer, meta: { title: 'Influencer List', requiresAdminAuth: true } },
    // { path: '/admin/influencer-pending/', name: 'admin.influencer-pending', component: AdminInfluencerPending, meta: { title: 'Influencer Pending', requiresAdminAuth: true } },
    // { path: '/admin/influencer/register', name: 'admin.influencer.register', component: AdminInfluencerForm, meta: { title: 'Influencer Register', requiresAdminAuth: true } },
    // { path: '/admin/influencer/:id/edit', name: 'admin.influencer.edit', component: AdminInfluencerForm, meta: { title: 'Influencer Update', requiresAdminAuth: true } },
    // { path: '/admin/influencer/archive', name: 'admin.influencer.archive', component: AdminInfluencerArchive, meta: { title: 'Influencer Archive', requiresAdminAuth: true } },

    // { path: '/admin/scanner', name: 'admin.scanner', component: AdminScanner, meta: { title: 'Admin Scanner', requiresAdminAuth: true } },

    // { path: '/admin/tripidkard/', name: 'admin.tripidkard', component: AdminTripidkard, meta: { title: 'Tripidkard List', requiresAdminAuth: true } },
    // { path: '/admin/tripidkard/register', name: 'admin.tripidkard.register', component: AdminTripidkardForm, meta: { title: 'Tripidkard Register', requiresAdminAuth: true } },
    // { path: '/admin/loyalty-stars/:id/order/register', name: 'admin.loyalty-stars.order.registerr', component: AdminOrderStarForm, meta: { title: 'Loyalty Stars Update', requiresAdminAuth: true } },
    // { path: '/admin/customer/', name: 'admin.customer', component: AdminCustomer, meta: { title: 'Customer List', requiresAdminAuth: true } },
    // { path: '/admin/customer/:id/points', name: 'admin.customer.points', component: AdminCustomerPoints, meta: { title: 'Customer Points', requiresAdminAuth: true } },
    // { path: '/admin/customer/register', name: 'admin.customer.register', component: AdminCustomerForm, meta: { title: 'Customer Register', requiresAdminAuth: true } },
    // { path: '/admin/customer/:id/edit', name: 'admin.customer.edit', component: AdminCustomerForm, meta: { title: 'Customer Update', requiresAdminAuth: true } },
    // { path: '/admin/loyalty-stars', name: 'admin.loyalty-stars', component: AdminLoyaltyPoint, meta: { title: 'Loyalty Stars List', requiresAdminAuth: true } },
    // { path: '/admin/loyalty-stars/register', name: 'admin.loyalty-stars.register', component: AdminLoyaltyStarForm, meta: { title: 'Loyalty Stars Register', requiresAdminAuth: true } },
    // { path: '/admin/loyalty-stars/:id/edit', name: 'admin.loyalty-stars.edit', component: AdminLoyaltyStarForm, meta: { title: 'Loyalty Stars Update', requiresAdminAuth: true } },
    // { path: '/admin/stars/register', name: 'admin.stars.register', component: AdminStarForm, meta: { title: 'Total of Loyalty Stars', requiresAdminAuth: true } },
    // { path: '/admin/loyalty-stars/:id/customer', name: 'admin.loyalty-stars.customer', component: AdminCustomerStars, meta: { title: 'Customer Loyalty Stars List', requiresAdminAuth: true } },
    // { path: '/admin/activity-log/', name: 'admin.activity-log', component: AdminLogs, meta: { title: 'Activity Logs List', requiresAdminAuth:true } },
    // { path: '/admin/order-point/list', name: 'admin.order-point.list', component: AdminOrderPointList, meta: { title: 'Merchant Loyalty Point List', requiresAdminAuth:true } },
    // { path: '/admin/profile/', name: 'admin.profile', component: AdminProfile, meta: { title: 'Profile Information', requiresAdminAuth: true } },
];

const routesCustomer = [
    {
        path: "/customer/profile/",
        name: "customer.profile",
        component: CustomerProfile,
        meta: { title: "Customer Profile", breadcrumb: "/customer/profile/" },
    },
    {
        path: "/customer/discount/",
        name: "customer.discount",
        component: CustomerDiscount,
        meta: { title: "Customer Discount Transaction", breadcrumb: "/customer/discount/" },
    },

    {
        path: "/customer/raffle/",
        name: "customer.raffle",
        component: CustomerRaffle,
        meta: { title: "Customer Raffle Draw", breadcrumb: "/customer/raffle/" },
    },

    {
        path: "/customer/collection/",
        name: "customer.collection",
        component: CustomerCollection,
        meta: { title: "Customer Collection", breadcrumb: "/customer/collection/" },
    },

    {
        path: "/customer/activity-log/",
        name: "customer.activity-log",
        component: CustomerLog,
        meta: { title: "Customer Activity Log", breadcrumb: "/customer/activity-log/" },
    },

];

const routesMerchant = [
    {
        path: "/merchant/dashboard/",
        name: "admin.dashboard",
        component: MerchantDashboard,
        meta: { title: "Merchant Dashboard", breadcrumb: "merchant/dasboard" },
    },
    {
        path: "/merchant/profile/",
        name: "admin.profile",
        component: MerchantProfile,
        meta: { title: "Merchant Profile", breadcrumb: "merchant/profile" },
    },
    {
        path: "/merchant/discount-list/",
        name: "admin.discount-list",
        component: MerchantDiscount,
        meta: {
            title: "Merchant Discount List",
            breadcrumb: "merchant/discount-list",
        },
    },
    {
        path: "/merchant/activity-log/",
        name: "merchant.activity-log",
        component: MerchantLogs,
        meta: {
            title: "Activity Logs List",
            breadcrumb: "merchant/activity-log",
        },
    },
    {
        path: "/merchant/analytics/",
        name: "merchant.analytics",
        component: MerchantAnalytics,
        meta: { title: "Data Analytics", breadcrumb: "merchant/analytics" },
    },
    {
        path: "/merchant/raffle-draw/",
        name: "merchant.raffle-draw",
        component: MerchantRaffle,
        meta: { title: "Raffle Draw", breadcrumb: "merchant/raffle-draw" },
    },
    {
        path: "/merchant/billing/",
        name: "merchant.billing",
        component: MerchantBilling,
        meta: { title: "Billing", breadcrumb: "merchant/billing" },
    },
    {
        path: "/merchant/flash-deals/",
        name: "merchant.flash-deals",
        component: MerchantDeals,
        meta: { title: "Flash Deals", breadcrumb: "merchant/flash-deals" },
    },

    {
        path: "/merchant/notification/",
        name: "merchant.notification",
        component: MerchantNotification,
        meta: { title: "Merchant Notification", breadcrumb: "merchant/notification" },
    },
    {
        path: "/merchant/plan/",
        name: "merchant.plan",
        component: MerchantPlan,
        meta: { title: "Merchant Plan", breadcrumb: "merchant/plan" },
    },
    // { path: '/merchant/dashboard', name: 'merchant.dashboard', component: MerchantDashboard, meta: { title: 'Merchant Dashboard', requiresMerchantAuth: true } },
    // { path: '/merchant/scanner', name: 'merchant.scanner', component: MerchantScanner, meta: { title: 'QR Code Scanner', requiresMerchantAuth: true } },
    // { path: '/merchant/tripidkard/', name: 'merchant.tripidkard', component: MerchantTripidkard, meta: { title: 'Tripidkard List', requiresMerchantAuth: true } },
    // { path: '/merchant/customer/', name: 'merchant.customer', component: MerchantCustomer, meta: { title: 'Customer List', requiresMerchantAuth: true } },
    // { path: '/merchant/customer/register', name: 'merchant.customer.register', component: MerchantCustomerForm, meta: { title: 'Customer Register', requiresMerchantAuth: true } },
    // { path: '/merchant/customer/:id/edit', name: 'merchant.customer.edit', component: MerchantCustomerForm, meta: { title: 'Customer Update', requiresMerchantAuth: true } },
    // { path: '/merchant/customer/:id/points', name: 'merchant.customer.points', component: MerchantCustomerPoints, meta: { title: 'Customer Points', requiresMerchantAuth: true } },

    // { path: '/merchant/customer/:card_number/scan', name: 'merchant.customer.scan', component: MerchantCustomerForm, meta: { title: 'Customer Register', requiresMerchantAuth: true } },
    // { path: '/merchant/loyalty-stars', name: 'merchant.loyalty-stars', component: MerchantLoyaltyPoint, meta: { title: 'Loyalty Stars List', requiresMerchantAuth: true } },
    // { path: '/merchant/discounts', name: 'merchant.discounts', component: MerchantLoyaltyDiscount, meta: { title: 'Discount List', requiresMerchantAuth: true } },

    // { path: '/merchant/create/voucher', name: 'merchant.create.voucher', component: createVoucher, meta: { title: 'Create Voucher', requiresMerchantAuth: true } },
    // { path: '/merchant/list/voucher', name: 'merchant.list.voucher', component: VoucherList, meta: { title: 'List Voucher', requiresMerchantAuth: true } },
    // { path: '/merchant/order/cart', name: 'merchant.order.cart', component: CartList, meta: { title: 'Order Cart', requiresMerchantAuth: true } },
    // { path: '/merchant/orderlist/', name: 'merchant.orderlist', component: OrdeLists, meta: { title: 'Orders List', requiresMerchantAuth: true } }
];

const routesInfluencer = [
    // { path: '/influencer/dashboard', name: 'influencer.dashboard', component: InfluencerDashboard, meta: { title: 'Influencer Dashboard', requiresInfluencerAuth: true } },
    // { path: '/influencer/scanner', name: 'influencer.scanner', component: InfluencerScanner, meta: { title: 'Influencer QR', requiresInfluencerAuth: true } },
    // { path: '/influencer/tripidkard/', name: 'influencer.tripidkard', component: InfluencerTripidkard, meta: { title: 'Tripidkard List', requiresInfluencerAuth: true } },
    // { path: '/influencer/order/cards', name: 'influencer.order.cards', component: InfluencerOrderCard, meta: { title: 'Order Card', requiresInfluencerAuth: true } },
    // { path: '/influencer/customer/', name: 'influencer.customer', component: InfluencerCustomer, meta: { title: 'Customer List', requiresInfluencerAuth: true } },
    // { path: '/influencer/customer/register', name: 'influencer.customer.register', component: InfluencerCustomerForm, meta: { title: 'Customer Register', requiresInfluencerAuth: true } },
    // { path: '/influencer/customer/:id/edit', name: 'influencer.customer.edit', component: InfluencerCustomerForm, meta: { title: 'Customer Update', requiresInfluencerAuth: true } },
    // { path: '/influencer/customer/:card_number/scan', name: 'influencer.customer.scan', component: InfluencerCustomerForm, meta: { title: 'Customer Register', requiresInfluencerAuth: true } },
    // { path: '/influencer/profile/', name: 'influencer.profile', component: InfluencerProfile, meta: { title: 'Profile Information', requiresInfluencerAuth: true } },
    // { path: '/influencer/activity-log/', name: 'influencer.activity-log', component: InfluencerLogs, meta: { title: 'Activity Logs List', requiresInfluencerAuth:true } },
];

const routesDefault = [
    { path: "/", name: "home", component: Index, meta: { title: "Home" } },
    {
        path: "/about-us",
        name: "about-us",
        component: About,
        meta: { title: "About Us" },
    },
    {
        path: "/tripidkard",
        name: "tripidkard",
        component: Tripidkard,
        meta: { title: "Tripidkard" },
    },
    {
        path: "/merchant/page",
        name: "merchant.page",
        component: MerchantPage,
        meta: { title: "Merchant Page", breadcrumb: "Home/Merchant/Page" },
    },
    {
        path: "/join/raffle",
        name: "join.raffle",
        component: JoinRaffle,
        meta: { title: "Merchant Page", breadcrumb: "Home/Merchant/Page" },
    },
    {
        path: "/raffle/details",
        name: "raffle.details",
        component: RaffleDetails,
        meta: { title: "Merchant Page", breadcrumb: "Home/Merchant/Page" },
    },
    {
        path: "/merchant/signup",
        name: "merchant.signup",
        component: MerchantSignup,
        meta: { title: "Merchant Signup", breadcrumb: "Home/Merchant/Signup" },
    },
    {
        path: "/customer/signup",
        name: "customer.signup",
        component: CustomerSignup,
        meta: { title: "Customer Signup", breadcrumb: "Home/Customer/Signup" },
    },
    {
        path: "/login",
        name: "login",
        component: MerchantLogin,
        meta: { title: "Merchant Login", breadcrumb: "Home/Merchant/Login" },
    },
    {
        path: "/help/center",
        name: "help.center",
        component: MerchantCenter,
        meta: {
            title: "Merchant Help center",
            breadcrumb: "Home/Merchant/Page",
        },
    },

    // { path: '/profile/', name: 'profile', component: Profile, meta: { title: 'Profile' } },
    // { path: '/merchants/', name: 'merchants', component: MerchantDetails, meta: { title: 'Merchant' } },
    // { path: '/merchants/:id/:name', name: 'merchants.name', component: MerchantWeb, meta: { title: 'Merchant Website' } },
    // { path: '/join/', name: 'join', component: JoinForm, meta: { title: 'Join Us' } },
    // { path: '/contact-us/', name: 'contact-us', component: ContactUs, meta: { title: 'Contact Us' } },
    // { path: '/merchant/result/city', name: 'merchant-result-city', component: MerchantResultCity, meta: { title: 'Search Result City'} },
    // { path: '/merchant/result/province', name: 'merchant-result-province', component: MerchantResultProvince, meta: { title: 'Search Result Province'} },
    // { path: '/join-the-fun/raffle', name: 'raffle', component: Raffle, meta: { title: 'Join The Fun Raffle'} },
    // { path: '/join-the-fun/points', name: 'points', component: Points, meta: { title: 'Join The Fun Points'} },
    // { path: '/join-the-fun/events', name: 'events', component: Events, meta: { title: 'Join The Fun Events'} },
    // { path: '/scanner/', name: 'scanner', component: Scanner, meta: { title: 'Card Scanner' } },
    // { path: '/customer/information/:card_number', name: 'customer.information', component: ScannerResult, meta: { title: 'Customer Information' } },

    // { path: '/admin/login/', name: 'admin.login', component: AdminLogin, meta: { title: 'Admin Login', requiresGuest: true } },
    // { path: '/login/', name: 'login', component: Login, meta: { title: 'User Login', requiresGuest: true, } },
    // { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword, meta: { title: 'Forgot Password', requiresGuest: true, } },
    // { path: '/reset-password/:token', name: 'ResetPassword', component: ResetPassword, meta: { title: 'Reset Password', requiresGuest: true, } },
    // { path: '/tripidkard/details', name: 'tripidkard.details', component: CustomerFAQ, meta: { title: 'Customer FAQ', requiresGuest: true, } },
    // { path: '/tripidkard/merchant/details', name: 'tripidkard.merchant.details', component: MerchantFAQ, meta: { title: 'Merchant FAQ', requiresGuest: true, } },

    // { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound, meta: { title: 'Not Found' } }
];

export {
    routesAdmin,
    routesMerchant,
    routesCustomer,
    routesInfluencer,
    routesDefault,
};
