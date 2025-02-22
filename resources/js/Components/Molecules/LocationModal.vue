<template>
    <BaseModal :isOpen="isOpen" title="Search location" size="md" modalClasses="bg-gray-100" @close="close">
        <div class="relative mb-4">
            <input type="text" placeholder="Search location"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="flex space-x-2 mb-4">
            <BaseButton name="gray" to="/nearby">🚀 Nearby</BaseButton>
            <BaseButton name="gray" to="/change-city">🌍 Change City</BaseButton>
        </div>

        <div>
            <h4 class="text-gray-600 font-medium mb-2">Suggested location</h4>
            <ul class="space-y-2">
                <li class="cursor-pointer flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100">
                    📌 Dagupan City
                </li>
                <li class="cursor-pointer flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100">
                    📌 Calasiao
                </li>
                <li class="cursor-pointer flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100">
                    📌 Lingayen
                </li>
            </ul>
        </div>
    </BaseModal>
</template>

<script>
import BaseModal from "@/Components/Molecules/BaseModal.vue";
import BaseButton from "@/Components/Atoms/Button.vue";

export default {
    components: { BaseModal, BaseButton },
    props: {
        isOpen: Boolean
    },
    methods: {
        close() {
            this.$emit("close");
        }
    }
};
</script>
