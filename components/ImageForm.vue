<template>
    <UploadPDFButton @pdfChanged="updateFile" />
    <UploadImageButton @imageChanged="updateImage" />
    <label for="posX">Posisi X</label>
    <input type="number" v-model="posX" @input="onInputChange" name="posX"/>
    <label for="posY">Posisi Y</label>
    <input type="number" v-model="posY" @input="onInputChange" name="posY" />
    <input type="number" v-model="pageidx" @input="onInputChange" name="pageidx" />
    <button @click="onSubmit">Submit</button>
    
    <a :href="pdfUrl" v-if="downloaded" download="result.pdf">Download</a>
</template>

<script setup lang="ts">
const readyInput = ref(false);
const posY = ref();
const posX = ref();
const pageidx = ref();
const pdfUrl = ref("");
const downloaded = ref(false);

let filePdf: File | undefined;
let fileImage: File | undefined;

const updateFile = (pdf: File | undefined) => {
    downloaded.value = false;
    if (pdf) filePdf = pdf;
}

const updateImage = (image: File | undefined) => {
    downloaded.value = false;
    if (image) fileImage = image;
}

const onInputChange = () => {
    downloaded.value = false;
    readyInput.value = (posX.value !== "" && posY.value !== "") ? true : false;
}

const onSubmit = async () => {
    if (!filePdf || !readyInput.value || !fileImage) return;

    const formData = new FormData();
    formData.append("position", `${posX.value},${posY.value}`)
    formData.append("page-idx", pageidx.value)
    formData.append("pdf-file", filePdf);
    formData.append("image-file", fileImage);
    const response = await customFetch<Blob>("add-image", {
        method: "post",
        body: formData
    });

    pdfUrl.value = window.URL.createObjectURL(response);
    downloaded.value = true;
}
</script>

