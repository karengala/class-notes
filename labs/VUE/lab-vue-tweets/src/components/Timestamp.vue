<!-- HTML HERE -->
<template>
  <span class="timestamp" v-text="dateProp.date"></span>
</template>

<script setup>
import { ref, reactive } from "vue";
const dateProp = defineProps({
  date: String,
});
</script>

<style scoped></style>
