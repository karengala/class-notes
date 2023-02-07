<!-- HTML HERE -->
<template>
<h1>{{myName}} </h1>
<div>
<label for="name">inserta tu  nombre:</label> <br>
<input v-model="name" type="text" laber="name"><br><br>
<label for="lastName">inserta tu apellido:</label> <br>
<input v-model="lastName" type="text">
</div>

<!-- EJERCICIO 2 -->

<div v-for="(movie,index) in myWatchlist" :key ="index"></div>
<h1>{{movie.title}}</h1>
<h2>{{movie.year}}</h2>
<ul>
    <li v-for="(item,index) in movie.whereToWatch" :key=""></li>
</ul>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive, computed } from "vue";
// Ejercicios Computed Properties

// Ej.1: Creamos un <h1>. Este debe leer una variable computada myName que, a su vez, lea dos variable reactivas name y lastName. Les daréis un valor default a cada una con vuestro nombre y vuestro apellido. Debajo del h1 creamos un pequeño form con dos inputs, uno que sobreescriba name y el otro lastName. Si todo está bien vinculado, cuando modifiquéis el input el h1 debería modificarse a la vez, incluso antes de hacer submit.


const name = ref("Karen");
const lastName = ref("Galarza");
/* const myName = computed(()=>{
    return `${firstName.value} ${lastName.value}`
  });

 */

const myName = computed({
  // Syntax
  get() {
    return `${name.value} ${lastName.value}`;
  },
  set(newName) {
    // estoy guardando los dos valores de los datos de el nombre+apellido dentro de un array, para poder aglomerar estos dos datos dentro de el paramtero "NewName"
    [name.value, lastName.value] = newName;
  },
});


// Ej.2 - Hard: Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas.
// Después creamos un formulario con inputs para introducir un title, un year y una opción múltiple de servicios de streaming. Cuando hagamos submit del formulario deberíamos crear un objeto con toda la info inputada por el user y añadirlo a myWatchlist. En caso de que esta nueva serie o película se pueda ver en Netflix, la lista de watchOnNetflix también debería actualizarse al momento.


const myWatchlist = reactive({

})

const whatOnNetflix = computed (()=>{
    return myWatchlist.filter ((element)) => element.whereToWatch.includes("Netflix")
})
</script>
<!-- CSS HERE -->
<style scoped></style>