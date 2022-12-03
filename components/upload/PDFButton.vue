<template>
    <div>
        <label for="upload">Upload a PDF</label>
        <input type="file" name="upload" @change="onFileChange" accept="application/pdf" />
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: "pdfChanged", f: File | undefined): void;
}>();


const onFileChange = (e: Event) => {
    let file = (e.target as HTMLInputElement).files?.[0];
    if (file && file.type !== "application/pdf") {
        file = undefined;
    }
    emit('pdfChanged', file);
}
</script>