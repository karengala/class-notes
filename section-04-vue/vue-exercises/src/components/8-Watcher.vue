<!--     Crea un componente que haga lo siguiente:
1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
2- De la respuesta en función a un JSON que debes crear
3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
4- Junto a la contestación, debe aparecer una imagen divertida -->

<script setup>
import jsonData from "../components/whatcher.json";
import {ref,watch} from "vue";

let answer = ref ("");
let response = ref(null);
const jsonImage = ref("");


watch(answer, async (newAnswer) => {

  if (answer.value.toLocaleLowerCase() === "yes") {
    //console.log("Comprobar - yes");
    response.value =
     /*  jsonData[1].answer +  */"yes, you like pizza!";
    jsonImage.value = jsonData[1].img;
  } else if (answer.value.toLocaleLowerCase() === "no") {
    //console.log("Comprobar - no"");
    response.value =
      /* jsonAnswers[0].answer + */
      "no,you dont like";
    jsonImage.value = jsonData[0].img;
  } else {
    //console.log("No estamos entrando");
    response.value =
    jsonData[2].answer + "Waiting for a correct response.";
    jsonImage.value = "";
  }
});
</script>

<template>
<h1>¿Te gusta la pizza?</h1>
<input v-model="answer" type="text">
<div v-if="response">{{response}}</div>
<div v-if="jsonImage">
    <img :src="jsonImage" alt="" />
</div>
</template>

<style scoped>

</style>