<template>
    <div class="bg-black bg-opacity-90 fixed w-screen h-screen top-0 bottom-0 left-0 right-0" v-if="activated" @click="onClose">
        <div class ="flex h-screen w-screen justify-center items-center">
          <h1 class="text-white"> Please Try Again </h1>
        </div>
    </div>

</template>

<script setup lang="ts">
const props = defineProps<{
  activated: boolean 
}>();

const emit = defineEmits<{
  (e: "onClose"): void; 
}>();

const onClose = () => {
  emit("onClose");
}
</script>