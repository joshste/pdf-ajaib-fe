<template>
    <div>
        <label for="upload">Upload a PNG Image</label>
        <input type="file" name="upload" @change="onFileChange" accept="image/png"/>
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