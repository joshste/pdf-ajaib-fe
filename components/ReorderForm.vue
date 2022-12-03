<template>
    <UploadPDFButton @pdfChanged="updateFile" />
    <input type="number" name="reorder" v-model="indexA" @input="onInputChange" />
    <input type="number" name="reorder" v-model="indexB" @input="onInputChange" />
    <button @click="onSubmit">Submit</button>
    <a :href="pdfUrl" v-if="downloaded" download="result.pdf">Download</a>

    <ErrorNotification :activated="isNotificationVisible" @onClose="isNotificationVisible = false"/>
</template>

<script setup lang="ts">
let readyInput = false;
let file: File | undefined;
const isNotificationVisible = ref(false);
const indexA = ref();
const indexB = ref();
const pdfUrl = ref("");
const downloaded = ref(false);


const updateFile = (pdf: File | undefined) => {
    downloaded.value = false;
    file = pdf;
}

const onInputChange = () => {
    downloaded.value = false;
    readyInput = (indexA.value !== "" && indexB.value !== "") ? true : false;
}

const onSubmit = async () => {
    if (!readyInput || !file) return;

    const formData = new FormData();
    formData.append("swap-instruction", `${indexA.value},${indexB.value}`)
    formData.append("pdf-file", file);
    try {
        const response = await customFetch<Blob>("reorder-pdf", {
            method: "post",
            body: formData
        });
        pdfUrl.value = window.URL.createObjectURL(response);
        downloaded.value = true;
    }
    catch (e) {
        isNotificationVisible.value = true;
    }

}
</script>

