<template>
    <div>
        <div class="space-y-5" >
        <UploadPDFButton @pdfChanged="updateFile"/>
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
            <div class="container flex flex-wrap items-left mx-auto flex space-x-10">
                <p>Select your shape:</p>
                <div>
                    <input type="radio" name="shape" value="rectangle" id="rectangle" v-model = "shape">
                    <label for="rectangle">Rectangle</label>
                </div>
                <div>
                    <input type="radio" name="shape" value="circle" id="circle" v-model = "shape">
                    <label for="circle">Circle</label>
                </div>
                <div>
                    <input type="radio" name="shape" value="arrow" id="arrow" v-model = "shape">
                    <label for="arrow">Arrow</label>
                </div>
                <div>
                    <input type="radio" name="shape" value="star" id="star" v-model = "shape">
                    <label for="arrow">Star</label>
                </div>
            </div>
            <div class="container flex flex-wrap items-left mx-auto flex space-x-10">
                <p>Select your color:</p>
                <div>
                    <input type="radio" name="color" value="red" id="red" v-model = "color">
                    <label for="red">Red</label>
                </div>
                <div>
                    <input type="radio" name="color" value="green" id="green" v-model = "color">
                    <label for="green">Green</label>
                </div>
                <div>
                    <input type="radio" name="color" value="blue" id="blue" v-model = "color">
                    <label for="blue">Blue</label>
                </div>
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
const shape = ref("");
const color = ref("");

const updateFile = (pdf: File | undefined) => {
    downloaded.value = false;
    emit("update:filePdf", pdf);
}

const onInputChange = () => {
    downloaded.value = false;
    readyInput = (posX.value !== "" && posY.value !== "") ? true : false;
}

const onSubmit = computed(() => {

    return async () => {

        console.log(`file: ${props.filePdf}`);
        console.log(posX.value)
        console.log(posY.value)
        console.log(pageidx.value)
        console.log(shape.value)

        if (!readyInput || !props.filePdf) {
            return;
        }

        const formData = new FormData();
        formData.append("pdf-file", props.filePdf);
        formData.append("posX", posX.value)
        formData.append("posY", posY.value)
        formData.append("page-idx", pageidx.value)
        formData.append("red-value", String(determineRed(color.value)))
        formData.append("green-value", String(determineGreen(color.value)))
        formData.append("blue-value", String(determineBlue(color.value)))

        formData.append("svg-path", determineShape(shape.value))

        const response = await customFetch<Blob>("add-drawing", {
            method: "post",
            body: formData
        });

        pdfUrl.value = window.URL.createObjectURL(response);
        downloaded.value = true;

    }

});   

const determineShape = (shape:string) => {

    if (shape == "rectangle") {
        return "M10,10   l100,0  0,50  -100,0  0,-50"
    }

    else if (shape == "circle") {
        return "M 100 100 a 50 50 0 1 0 0.00001 0"
    }

    else if (shape == "arrow") {
        return "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
    }

    else {
        return "M50,0 L58.82,37.86 L97.55,34.55 L64.27,54.64 L78.39,90.45 L50,65 L21.61,90.45 L35.73,54.64 L2.45,34.55 L41.18,37.86 Z"
    }

}

const determineRed = (color:string) => {

    if (color == "red") {
        return 1
    }
    else {
        return 0
    }

}

const determineGreen = (color:string) => {

if (color == "green") {
    return 1
}
else {
    return 0
}

}

const determineBlue = (color:string) => {

if (color == "blue") {
    return 1
}
else {
    return 0
}

}

</script>

