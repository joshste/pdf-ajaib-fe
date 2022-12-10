<template>
  <div>
    <div class="space-y-5" >
      <UploadPDFButton @pdfChanged="updateFile"/>
    </div>
    <div class="space-y-5" >
      <UploadImageButton @imageChanged="updateImage"/>
    </div>
    <div class="container flex flex-wrap items-center justify-between mx-auto space-y-5 ">
      <div class="container flex flex-wrap items-left mx-auto flex space-x-10">
        <div>
          <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="posX">Posisi X</label>
          <input type="number" v-model="posX" @input="onInputChange" name="posX" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="posY">Posisi Y</label>
          <input type="number" v-model="posY" @input="onInputChange" name="posY"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="pageidx">Halaman </label>
          <input type="number" v-model="pageidx" @input="onInputChange" name="pageidx" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
      </div>
      
      <button @click="onSubmit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
      
      <a :href="pdfUrl" v-if="downloaded" download="result.pdf" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Download</a>
    </div>
    <ErrorNotification :activated="isNotificationVisible" @onClose="isNotificationVisible = false" />
  </div>
    
    
</template>

<script setup lang="ts">

const props = defineProps<{
    filePdf: (File | undefined)
}>();

const emit = defineEmits<{
    (e: 'update:filePdf', filePdf: File | undefined): void
}>();

const isNotificationVisible = ref(false);
let readyInput = false;
const posY = ref();
const posX = ref();
const pageidx = ref();
const pdfUrl = ref("");
const downloaded = ref(false);

let filePdf: File | undefined;
let fileImage: File | undefined;

const updateFile = (pdf: File | undefined) => {
    downloaded.value = false;
    emit("update:filePdf", pdf);
    console.log("update")
}

const updateImage = (image: File | undefined) => {
    downloaded.value = false;
    if (image) fileImage = image;
    
}

const onInputChange = () => {
    downloaded.value = false;
    readyInput = (posX.value !== "" && posY.value !== "") ? true : false;

    console.log("change")
}

const onSubmit = computed(() => {
    return async () => {
        console.log("tes submit")
        if (!props.filePdf || !readyInput || !fileImage) {
          isNotificationVisible.value = true;
          return;
        }
          
        const formData = new FormData();
        formData.append("position", `${posX.value},${posY.value}`)
        formData.append("page-idx", pageidx.value)
        formData.append("pdf-file", props.filePdf);
        formData.append("image-file", fileImage);
        try {
          const response = await customFetch<Blob>("add-image", {
            method: "post",
            body: formData
          });
          pdfUrl.value = window.URL.createObjectURL(response);
          downloaded.value = true;
        } catch (e) {
          isNotificationVisible.value = true;
        }
        

        
}});   


</script>

