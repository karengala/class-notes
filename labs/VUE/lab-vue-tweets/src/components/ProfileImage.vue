<template>
  <img :src="userImage" :alt="text" />
</template>
<!-- JS HERE -->
<script setup>
defineProps({
  userImage: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
});
</script>
<!-- CSS HERE -->
<style scoped>
img {
  width: 20%;
}
</style>