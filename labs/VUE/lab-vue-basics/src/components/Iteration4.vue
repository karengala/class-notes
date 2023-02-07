
<!-- Iteration 4 | Display a list of elements that are stored inside a component -->

<template>

<ul>
  <li v-for="array in data">
    <div>
    <p v-text="array.title"></p>
    <p v-text="array.description"></p>
    <p v-text="array.content"></p>
    </div>
  </li>
</ul>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const data = reactive([
{
  title: 'post1',
  description: 'Jane Doe',
  content: '2016-04-10'
},
{
  title: 'post2',
  description: 'Jane ',
  content: '04-10'
},
{
  title: 'post3',
  description: 'Doe',
  content: '10'
}]);

</script>
<!-- CSS HERE -->
<style scoped>

</style>