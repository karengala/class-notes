<script setup>
import {ref,reactive} from "vue";
/* page structure */
// 1 pagina === banda musica
// section> h1="nombre" - p="info" - img="img"
// creene una funcion que este asociada a un evento de el html con directivo [v-on || @] - este evento es un evento click, que al darle click a un boton, se activara la funcion y muestren en pantalla la img!
// vamos a ver solamente el nombre, info + buton
// darle click al boton y la img aparecera en pantalla
// bonus points para la persona que haga un toggle en la funcion!
// 1 pagina === comida que les gusta
// section> h1="nombre" - p="info" - img="img"
// creene una funcion que este asociada a un evento de el html con directivo [v-on || @] - este evento es un evento mouse-ustedes-elijan-elquequieran, que al usar el evento se activara la funcion y muestren en pantalla la img!
// vamos a ver solamente el nombre, info + buton
// darle click al boton y la img aparecera en pantalla
// bonus points para la persona que haga un toggle en la funcion!

 const eventoImg = ref("https://assets.teenvogue.com/photos/5bd1e23315754a5c62cb20ac/master/pass/bts-tout.jpg" ); 

const viewToggle = ref (false);

const viewToggleFuntion = () => {
    viewToggle.value = !viewToggle.value;
};  

</script>
         
<template>
    <section>
        <h1>BTS</h1>
        <p>Banda coreana</p>
        <button @click="viewToggleFuntion">click me to see the img</button>
    
        <img :src="eventoImg" v-if="viewToggle" alt="foto-bts">
       <!-- <div class="bandImage">
       </div> -->
    </section>                     
</template>

<style scoped>
.bandImage{
    width: 100%;
    height: 400px; 
    background-image: url("https://assets.teenvogue.com/photos/5bd1e23315754a5c62cb20ac/master/pass/bts-tout.jpg");

}
</style>