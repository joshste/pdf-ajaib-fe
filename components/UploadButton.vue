<template>
    <div>
        <input type="file" @change="onFileChange" />
        <a :href="url" v-if="downloaded" download="result.pdf">Download</a>
    </div>
</template>

<script setup>
const downloaded = ref(false);
const url = ref("");

const onFileChange = async (e) => {
    downloaded.value = false;
    url.value = "";
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("pdf-file", file);

    const response = await customFetch("pdf", {
        method: "post",
        body: formData
    });
    url.value = window.URL.createObjectURL(response);
    downloaded.value = true;
}

</script>