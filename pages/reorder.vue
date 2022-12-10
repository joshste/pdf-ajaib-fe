<template>
    <Navbar />
    <div class="flex max-w-[100vw]">
        <ReorderForm v-model:file="file" />
        <div class="bg-[#2a2a2e] font-extralight font-mono text-white">
            <EmbedPDFView :pdfBlob="blob" />
        </div>
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
  