<template>
    <div class="flex flex-1 flex-col justify-center items-center">
        <div class="mb-10 max-w-[25vw]">
            <UploadPDFButton @pdfChanged="updateFile" />
        </div>

        <div>
            <p>Enter page index to swap (start from 0)</p>
            <div class="flex flex-row justify-end mt-3 items-center">
                <label for="A">First Index</label>
                <input class="px-5 ml-5 w-32 h-10 text-white rounded-md dark:bg-gray-700" type="number" name="A"
                    v-model="indexA" @input="onInputChange" />
            </div>
            <div class="flex flex-row justify-end mt-3 items-center">
                <label for="B">Second Index</label>
                <input class="px-5 ml-5 w-32 h-10 text-white rounded-md dark:bg-gray-700" type="number" name="B"
                    v-model="indexB" @input="onInputChange" />
            </div>
        </div>
        
        <button @click="onSubmit"
            class="mt-10 px-10 py-4 bg-gray-700 text-white font-bold text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
            Submit </button>
        <div class="mt-5">
            <a :href="pdfUrl" v-if="downloaded" download="result.pdf" class="px-10 py-4 bg-gray-700 text-white font-bold text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">Download</a>
        </div>

        

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

