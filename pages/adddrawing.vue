<template>
    <div>
      <Navbar />
    </div>
    <div>
        <div>
            <DrawingForm v-model:filePdf="filePdf" />
            <EmbedPDFView :pdfBlob="blob" />
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  let filePdf = ref<File | undefined>();
  let blob = computed(() => {
      if (!filePdf.value) {
          return undefined;
      }
      return new Blob([filePdf.value], { type: "application/pdf" });
  
  })
  
  watch(filePdf, (filePdf) => {
      console.log(`watched: ${filePdf}`);
  })
  
  </script>