<template>
  <span class="user">
    <span class="name" v-text="userProp.user.name"></span>
    <span class="handle">@{{ userProp.user.handle }}</span>
  </span>
</template>

<script setup>
import { ref, reactive } from "vue";
const userProp = defineProps({
  user: Object,
});
// console.log(userProp.user.name);
</script>

<style scoped></style>
