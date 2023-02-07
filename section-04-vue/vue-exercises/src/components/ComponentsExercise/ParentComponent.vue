<script setup>
import ChildComponent from "./ChildComponent.vue"
import {ref,reactive} from "vue";

</script>

<template>
<h1>Hello</h1>
<ChildComponent @buttonEmit="emitAlert"/>


</template>

<style scoped>

</style>