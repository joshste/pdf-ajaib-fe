<template>
    <div>
      <Navbar />
    </div>
    <div>
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <TextForm v-model:file="file" />
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
  