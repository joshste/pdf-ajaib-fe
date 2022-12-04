<template>
    <div class="flex flex-1 flex-col justify-center items-center">
        <UploadPDFButton @pdfChanged="updateFile" />
        <input type="number" name="reorder" v-model="indexA" @input="onInputChange" />
        <input type="number" name="reorder" v-model="indexB" @input="onInputChange" />
        <button @click="onSubmit">Submit</button>
        <a :href="pdfUrl" v-if="downloaded" download="result.pdf">Download</a>
        <ErrorNotification :activated="isNotificationVisible" @onClose="isNotificationVisible = false" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    file: (File | undefined)
}>();

const emit = defineEmits<{
    (e: 'update:file', file: File | undefined): void
}>();

let readyInput = false;
const isNotificationVisible = ref(false);
const indexA = ref();
const indexB = ref();
const pdfUrl = ref("");
const downloaded = ref(false);


const updateFile = (pdf: File | undefined) => {
    downloaded.value = false;
    emit("update:file", pdf);
}

const onInputChange = () => {
    downloaded.value = false;
    readyInput = (indexA.value !== "" && indexB.value !== "") ? true : false;
}

const onSubmit = computed(() => {
    return async () => {
        console.log(`file: ${props.file}`);
        if (!readyInput || !props.file) {
            isNotificationVisible.value = true;
            return;
        }

        const formData = new FormData();
        formData.append("swap-instruction", `${indexA.value},${indexB.value}`)
        formData.append("pdf-file", props.file);
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
});
</script>

