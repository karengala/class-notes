<template>
  <img :src="imageProp.image" class="profile" alt="profile" />
</template>

<script setup>
import { ref, reactive } from "vue";
const imageProp = defineProps({
  image: String,
});
</script>

<style scoped></style>
