<template>
    <div>
        <div class="space-y-5" >
            <UploadPDFButton @pdfChanged="updateFile"/>
        </div>
        <div class="container flex flex-wrap items-center justify-between mx-auto space-y-5 ">
            <div class="container flex flex-wrap items-left mx-auto flex space-x-10">
                    <label></label>
                    <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="text">Text :</label>
                    <input type="text" v-model="text" @input="onInputChange" name="text" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <div>
                    <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="X">Posisi X :</label>
                    <input type="number" v-model="X" @input="onInputChange" name="X" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>            
                <div>
                    <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="X">Posisi Y :</label>
                    <input type="number" v-model="Y" @input="onInputChange" name="Y" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="no-page">Halaman :</label>
                    <input type="number" v-model="noPage" @input="onInputChange" name="noPage" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="size">Font Size :</label>
                <input type="number" step= "any" v-model="size" @input="onInputChange" name="size"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <br/>
                <label class="block mb-2 text-sm font-medium text-black dark:text-black" for="color">Color (RGB) :</label>
                <input type="number" step= "any" v-model="red" @input="onInputChange" name="red" placeholder="red (0-1)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <br />
                <input type="number" step= "any" v-model="green" @input="onInputChange" name="green" placeholder="green (0-1)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>                
                <br />
                <input type="number" step= "any" v-model="blue" @input="onInputChange" name="blue" placeholder="blue (0-1)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="container flex flex-wrap items-left mx-auto flex space-x-10">
                <button @click="onSubmit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            <a :href="pdfUrl" v-if="downloaded" download="result.pdf" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Download</a>
            </div>
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

const isNotificationVisible = ref(false);
let readyInput = false;
const X = ref();
const Y = ref();
const noPage = ref();
const red = ref();
const green = ref();
const blue = ref();
const size = ref();
const text = ref("");
const pdfUrl = ref("");
const downloaded = ref(false);

const updateFile = (pdf: File | undefined) => {
    downloaded.value = false;
    emit("update:file", pdf);
}

const onInputChange = () => {
    downloaded.value = false;
    readyInput = (X.value !== "" && Y.value !== "") ? true : false;
}

const onSubmit = computed(() => {

return async () => {

    console.log(`file: ${props.file}`);
    if (!readyInput || !props.file) {
        isNotificationVisible.value = true;
        return;
    }

    const formData = new FormData();
    formData.append("position", `${X.value},${Y.value}`)
    formData.append("no-page", noPage.value)
    formData.append("red", red.value)
    formData.append("green", green.value)
    formData.append("blue", blue.value)
    formData.append("size", size.value)
    formData.append("user-text", text.value)
    formData.append("pdf-file", props.file);
    formData.append("X", X.value)
    formData.append("Y", Y.value)

    try {
        const response = await customFetch<Blob>("add-text", {
            method: "post",
            body: formData
        });
        pdfUrl.value = window.URL.createObjectURL(response);
        downloaded.value = true;
    } catch (e) {
        isNotificationVisible.value = true;
    }

}

});   
</script>