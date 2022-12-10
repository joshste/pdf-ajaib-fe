<template>
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="upload">Upload a PNG Image</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
         type="file" name="upload" @change="onFileChange" accept="image/png"/>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: "imageChanged", f: File | undefined): void;
}>();


const onFileChange = (e: Event) => {
    let file = (e.target as HTMLInputElement).files?.[0];
    if (file && file.type !== "image/png") {
        file = undefined;
    }
    emit('imageChanged', file);
}
</script>