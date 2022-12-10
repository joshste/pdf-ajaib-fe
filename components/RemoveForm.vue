<template>
    <div class="flex flex-1 flex-col justify-center items-center">
        <UploadPDFButton @pdfChanged="updateFile" />
        <input type="number" name="remove" v-model="index" @input="onInputChange" />
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
const index = ref();
const pdfUrl = ref("");
const downloaded = ref(false);


const updateFile = (pdf: File | undefined) => {
    downloaded.value = false;
    emit("update:file", pdf);
}

const onInputChange = () => {
    downloaded.value = false;
    readyInput = (index.value !== "") ? true : false;
}

const onSubmit = computed(() => {
    return async () => {
        console.log(`file: ${props.file}`);
        if (!readyInput || !props.file) {
            isNotificationVisible.value = true;
            return;
        }

        const formData = new FormData();
        formData.append("remove-index", `${index.value}`)
        formData.append("pdf-file", props.file);
        try {
            const response = await customFetch<Blob>("remove-page", {
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

