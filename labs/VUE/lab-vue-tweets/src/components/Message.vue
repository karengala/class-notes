<template>
  <p class="message" v-text="textProp.message"></p>
</template>

<script setup>
import { ref, reactive } from "vue";
const textProp = defineProps({
  message: String,
});
</script>

<style scoped></style>
