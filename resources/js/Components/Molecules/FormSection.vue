<template>
    <div class="w-full max-w-lg mx-auto space-y-4">
        <div v-for="field in fields" :key="field.name" class="flex items-center justify-between">
            <label class="text-gray-700 dark:text-white text-sm font-medium w-1/4">
                {{ field.label }} <span class="text-red-400" v-if="field.required">*</span>
            </label>
            <input v-model="model[field.name]" :type="field.type" 
                class="w-3/4 px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-neutral-800 border-gray-300 focus:ring-2 focus:ring-blue-600" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fields: { type: Array, required: true },
        modelValue: { type: Object, required: true }
    },
    computed: {
        model: {
            get() { return this.modelValue; },
            set(value) { this.$emit('update:modelValue', value); }
        }
    }
};
</script>
