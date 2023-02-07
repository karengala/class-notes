<script setup>
import {ref,reactive} from "vue";
defineEmits ([confirm]);
</script>

<template>
<button @click="$emit(confirm)">Submit</button>

</template>

<style scoped>

</style>