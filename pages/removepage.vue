<template>
    <div class="flex max-w-[100vw]">
        <RemoveForm v-model:file="file" />
        <EmbedPDFView :pdfBlob="blob" />
    </div>
</template>

<script setup lang="ts">
let file = ref<File | undefined>();
let blob = computed(() => {
    if (!file.value) {
        return undefined;
    }
    return new Blob([file.value], { type: "application/pdf" });

})
</script>
  