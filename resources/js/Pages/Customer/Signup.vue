<template>
    <MenuBar />
    <SignUp />

</template>

<script>
import MenuBar from '@/Components/Organisms/MenuBar.vue';
import SignUp from '@/Layout/Customer/Signup.vue';

export default {
    components: {
        SignUp,
        MenuBar,

    }
}

</script>
