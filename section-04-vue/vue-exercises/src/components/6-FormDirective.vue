<!-- HTML HERE -->
<template>

<form @submit.prevent ="handleSubmit">
<div class="form-container">
<div class="user-name">
    <label for="name">User Name:</label>
    <input type="text" id="name"  autocomplete="off" v-model="formData.userName"/>
</div>
<div class="user-age">
    <label for="age">User Age:</label>
    <input type="number" id="age" autocomplete="off"  v-model="formData.userAge"/>
</div>
<div class="user-dof">
    <label for="dof">Date of Birth:</label>
    <input type="date" id="dof" autocomplete="off"  v-model="formData.dateOfB"/>
</div>
<div id="button">
    <input type="submit" value="Submit Form">
</div>
</div>
</form>

</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
// Ejercicios Two Way Binding

// Ej.1: Creamos un formulario en vuestro template. El formulario debe tener un evento de submit que bloquee el default behavior del evento y llame a la función handleSubmit. Dentro del formulario debemos tener diversos inputs que nos permitan entrar la siguiente info: name, age, date of birth. Cada uno de los inputs debe estar vinculado a su propia variable reactiva.
// Una vez le demos a submit deberíamos encargarnos de imprimir en una alerta un texto con el nombre que le hayáis inputado, un texto con la edad y un texto con vuestra date de birth.

const formData = reactive({
    userName:"",
    userAge:0,
    dateOfB:"",
});

const handleSubmit =() => {
    alert(`
        !!Submited!!
        Gracias por haber rellenado el formulario,
        Te confirmamos los datos imputados: 
        - Nombre: ${formData.userName}
        - Edad: ${formData.userAge}
        - Fecha de nacimiento ${formData.dateOfB}
    `);
}

</script>
<!-- CSS HERE -->
<style scoped>
form{
    font-size: 16px;
    font-family:sans-serif;
    color: rgb(52, 50, 50);
}
div {
  display: flex;
  flex-direction: column;
}
input[type="submit"]{
    width: 82%;
    height: 15px;
}
input {
    width: 80%;
    height: 15px;
    border: none;
    background: rgb(228, 228, 228);
}
.form-container{
    border: 0.5px solid;
    width: 30%;
    padding: 40px 0px 40px 40px;
    margin:0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: rgba(102, 160, 222, 0.669);
}
label{
 margin-bottom:6px;
}
</style>