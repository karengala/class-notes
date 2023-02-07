<!-- Copia este codigo por referencia -->
<template>
<!--  Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis). -->

    <h1 :id="h1Binded">Hola, soy karen</h1>

<!-- Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render. -->

     <h2 :class="h2Binded ? 'h2-binded' : 'h2-false'"> soy de GYE</h2>

<!-- Ej.3: Creamos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis). -->
    <h3 :style="[object1, object2, objest3]">se pone dificil</h3>

<!--  Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no. -->
<h4 :class="[h4Boolean1 && 'h4-red', h4Boolean2 && 'h4-border']"> no se como hacer esto</h4>

</template>
<script setup>
import { ref, reactive } from "vue";

const h1Binded = ref("h1-style");
const h2Binded = ref(true);

const h4Boolean1= ref (false);
const h4Boolean2= ref (true);

</script>

<style scoped>
#h1-style{
    color: red;
}
.h2-binded{
    color: green;
}
.h2-false{
 display: none;
}

.h4-red{
color: red;
}
.h4-border{
border:1px solid blue ;
}
</style>
