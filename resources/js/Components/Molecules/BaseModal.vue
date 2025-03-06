<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" @click.self="close">
        <div :class="[modalSize, modalClasses]" class="bg-white p-6 rounded-lg shadow-lg relative" @click.stop>
            <!-- Header -->
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
            </div>

            <!-- Dynamic Content -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: Boolean,
        title: String,
        size: {
            type: String,
            default: "md", // Default size
            validator: (value) => ["sm", "md", "lg", "xl"].includes(value),
        },
        modalClasses: {
            type: String,
            default: "",
        }
    },
    computed: {
        modalSize() {
            const sizes = {
                sm: "w-64",
                md: "w-96",
                lg: "w-[600px]",
                xl: "w-[800px]"
            };
            return sizes[this.size] || sizes.md;
        }
    },
    methods: {
        close() {
            this.$emit("close");
        }
    }
};
</script>
