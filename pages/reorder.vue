<template>
    <div class="flex max-w-[100vw]">
        <ReorderForm v-model:file="file" />
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

watch(file, (file) => {
    console.log(`watched: ${file}`);
})

</script>
  