<template>
    <UploadPDFButton @pdfChanged="updateFile" />
    <input type="number" name="reorder" v-model="indexA" @input="onInputChange" />
    <input type="number" name="reorder" v-model="indexB" @input="onInputChange" />
    <button @click="onSubmit">Submit</button>
    <a :href="pdfUrl" v-if="downloaded" download="result.pdf">Download</a>
</template>

<script setup>
const readyPdf = ref(false);
const readyInput = ref(false);
const file = ref();
const indexA = ref();
const indexB = ref();
const pdfUrl = ref("");
const downloaded = ref(false);


const updateFile = (pdf) => {
    downloaded.value = false;
    readyPdf.value = false;
    if (pdf) {
        file.value = pdf;
        readyPdf.value = true;
    }
}

const onInputChange = (e) => {
    downloaded.value = false;
    readyInput.value = (indexA.value && indexB.value) ? true : false;
}

const onSubmit = async (e) => {
    if (!readyPdf.value || !readyInput.value) return;
    
    const formData = new FormData();
    formData.append("swap-instruction", [indexA.value, indexB.value])
    formData.append("pdf-file", file.value);
    const response = await customFetch("reorder-pdf", {
        method: "post",
        body: formData
    });

    pdfUrl.value = window.URL.createObjectURL(response);
    downloaded.value = true;
}
</script>

