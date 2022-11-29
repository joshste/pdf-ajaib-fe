<template>
    <div>
        <label for="upload">Upload a PDF</label>
        <input type="file" name="upload" @change="onFileChange" />
    </div>
</template>

<script>
export default {
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            if (file.type != "application/pdf") {
                file = None;
            }
            this.$emit('fileChanged', file);
        }
    }
}
</script>