<!-- HTML  -->
<template>
<section>
      <!-- HTML - puesto a pelo -->
<div>
    <p>Mi nombre es Karen, naci en GYE y tengo 26 años</p>
      
       <!-- Ejemplo de dato no reactivo -->
    <p>{{ myNameTwo }}</p>
</div>

<!-- HTML - puesto con interpolacion de texto - claudators -->
<div>
     <!-- Usando datos primitivos - ref() -->
    <p>Mi nombre es {{myName}}, naci en {{ country }} y tengo  {{ age }} años</p>
    <!-- Dato primitivo - null value -->
      <p>{{ nullValue }}</p>
    <!-- Usando datos no primitivos - reactive() -->
     <p>
        Mi nombre es {{ myInfo.myName }}, naci en {{ myInfo.country }} y
        tengo {{ myInfo.age }} años.
      </p>
</div>

<!--  EJERCICIO 001 -->
<div>
    <p>Mi nombre es {{infoKaren.name}}, naci el {{ infoKaren.dOfB}} y tengo  {{ infoKaren.age }} años. Mis hobbies son {{ infoKaren.hobbies[0]}}, {{ infoKaren.hobbies[1]}}  y mi educacion es : {{ infoKaren.educacion }}. Banda favorita {{ infoKaren.favBand }}</p>
</div>
</section>
</template>
<!-- JS - logica  -->
<script setup>
import{ ref, reactive} from "vue";

// declaracion de dato primitivo NO REACTIVO para que vean diff entre datos reactivos
const myNameTwo = "ANA";

//2do paso
// declaramos el tipo de dato reactivo mediante el metodo ref o reactive
// Tipos de datos primitivos - ref() - strings, numeros, booleanos, nulos===null
const myName = ref("Karen");
const country= ref("Ecuador");
const age = ref(26);
const nullValue = ref(null);

// Tipos de datos no primitivos - reactive() - arrays y los objetos
const myInfo = reactive({
  myName: "Ana karen",
  country: "Ecuador",
  age: 26,
});



// EJERCICIO 001

const favFilm = ref("Kill Bill");
const vecesVista= ref("8");
const favFood = ref("sushi");
const infoKaren = reactive({
  name: "Ana karen",
  dOfB: "6 de agosto",
  age: 26,
  hobbies:["musica", "compras", "viajar", "excursiones"],
  educacion:{ 
    Primaria : "Padre Damian SSCC",
    Secundaria : "Padre Damian SSCC",
    Uni : "LCI bcn"},
  favBand: "no tengo"
});
</script>
<!-- CSS  -->
<style scoped></style>

