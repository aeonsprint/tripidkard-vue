<template>
    <component
        :is="to ? 'router-link' : 'button'"
        :to="to"
        :class="[baseClasses, buttonStyles]"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        to: String,
        name: String
    },
    computed: {
        baseClasses() {
            // return "px-4 py-2 inline-flex items-center gap-x-2 text-sm font-medium  border focus:outline-none";
            return "px-4 py-2 inline-flex items-center gap-x-2 text-sm font-medium border focus:outline-none";
        },
        buttonStyles() {
            const styles = {
                blue: "border-transparent bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:bg-blue-700",
                gray: "flex-1 border rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200",
                location: "flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600"

            };
            return styles[this.name] || "";
        }
    }
};
</script>
