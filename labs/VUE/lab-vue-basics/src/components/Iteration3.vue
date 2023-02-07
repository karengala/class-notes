
<!-- Iteration 3 | Show an element only if a particular property is set to true -->
<template>
<h1 :class="h1boolean ? 'booleanOne' : 'booleanTwo'">hola soy karen</h1>
<h3 :v-show="example2">hola soy karen</h3>

</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
const h1boolean = ref (true);

const example2 = ref (false);
</script>
<!-- CSS HERE -->
<style scoped>
.booleanOne{
    color: green
}
.booleanTwo{
    display:none;
}
</style>