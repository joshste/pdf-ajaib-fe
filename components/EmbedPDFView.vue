<template>
    <div class="flex flex-shrink-0 w-[70vw] h-screen justify-center items-center">
        <iframe :src="`${base64Blob}`" class="w-full h-full"  v-if="base64Blob"/>
        <p v-else> YOUR PDF Preview </p>
    </div>
</template>


<script setup lang="ts">

const props = defineProps<{
    pdfBlob: Blob | undefined
}>();

const { pdfBlob } = props;


const base64Blob = ref<string | null | ArrayBuffer>();
watch(props, (props) => {
    if (!props.pdfBlob) {
        return;
    }
    base64Blob.value = window.URL.createObjectURL(props.pdfBlob);
}, { deep: true })

watch(base64Blob, (a) => {
    console.log(a)

});

</script>