<template>
    <div class="space-y-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Upload Logo
        </label>
        <div class="relative flex justify-center items-center w-full px-6 py-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md cursor-pointer"
            @click="triggerFileInput"
            @dragover.prevent
            @drop.prevent="handleDrop">
            <input
                type="file"
                :accept="accept"
                class="sr-only"
                ref="fileInput"
                @change="handleFileUpload"
            />
            <div class="text-center">
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Drag and drop an image here, or click to select a file
                </p>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    PNG or JPG up to 2MB
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import Swal from "sweetalert2";

const props = defineProps({
    maxSize: { type: Number, default: 2 * 1024 * 1024 },
    accept: { type: String, default: "image/png, image/jpeg" },
});
const emit = defineEmits(["files-selected"]);
const fileInput = ref(null);

const triggerFileInput = () => fileInput.value.click();

const handleFileUpload = (event) => {
    processFiles(event.target.files);
};

const handleDrop = (event) => {
    processFiles(event.dataTransfer.files);
};

const processFiles = (files) => {
    const file = files[0];
    if (!file) return;

    if (!props.accept.includes(file.type)) {
        Swal.fire("Error!", "Only PNG and JPG images are allowed.", "error");
        return;
    }

    if (file.size > props.maxSize) {
        Swal.fire("Error!", "File size must be less than 2MB.", "error");
        return;
    }

    emit("files-selected", [file]);
};
</script>
