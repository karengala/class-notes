<script setup>
import MyFirstComponent from './components/0-MyFirstComponent.vue'
import BindDirective from './components/3-BindDirectiveEx.vue'
import ConditionalDirectives from './components/4-ConditionalDirectives.vue'
import IterativeDirective from "./components/5-IterativeDirective.vue"
import Test from "./components/Test.vue"
import FormDirective from "./components/6-FormDirective.vue"
import SlotComponent from "./components/7-SlotComponent.vue"
import Watcher from "./components/8-Watcher.vue"
import Events from "./components/9-Events.vue"
import ParentComponent from "./components/ComponentsExercise/ParentComponent.vue"
import Computed from "./components/13-Computed.vue"

</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Vue Class - V-bind directive" />
    </div>
  </header>
  <!-- Declarar los componentes creados de clase dentro del elemento "main" -->
  <main>
    <!-- <MyFirstComponent /> -->
    <!--  <BindDirective /> -->
    <!-- <ConditionalDirectives /> -->
    <!-- <IterativeDirective /> -->
    <!-- <Test /> -->
    <!--  <FormDirective /> -->
    <!-- <SlotComponent /> -->
    <!-- <Watcher /> -->
    <!-- <Events /> -->
   <!--   <ParentComponent /> -->
   <Computed />
     

  </main>
</template>

<style scoped>

</style>
