<template>
    <div @click="animateRandom">
        <img src="~/assets/Logo.png" v-if="random == 0" />
        <img src="~/assets/Logo.png" class="animate-spin" v-else-if="random == 1" />
        <img src="~/assets/Logo.png" class="animate-pulse" v-else-if="random == 2" />
        <img src="~/assets/Logo.png" class="animate-bounce" v-else-if="random == 3" />
        <img src="~/assets/Logo.png" class="animate-ping" v-else-if="random == 4" />
    </div>
</template>

<script setup lang="ts">
const random = ref(0);

const animateRandom = () => {
    let pick = Math.floor(Math.random() * (5));
    while (pick == random.value) {
        pick = Math.floor(Math.random() * (5));
    }
    random.value = pick;
}

</script>