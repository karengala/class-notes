<template>
<header>
  <nav>
    <img clas="logo" src="./images/Ironhack_logo.png" alt="ironlogo">
    <img src="./images/Burger_menu.png" alt="burgermenu">
  </nav>
</header>
<main>
    <div>
    <img src="./images/Vue_logo.png" alt="Vuelogo">
    <h1>Welcome to Vue.js</h1>
    <h3>Become a coding ninja with the fastest-growing JavaScript framework</h3>
    <button>Awesome!</button>
  </div>
</main>
<section>
  
  <div class="container1">
  <img src="./images/USP-1.png" alt="performant">
  <h3>Performant</h3>
  <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
  </div>
  <div class="container2">
  <img src="./images/USP-2.png" alt="approachable">
  <h3>Approachable</h3>
  <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
  </div>
  <div class="container3">
  <img src="./images/USP-3.png" alt="versatil">
  <h3>Versatile</h3>
  <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
  
</div>
</section>
<footer>
  <div></div>
</footer>
</template>
<script setup>
 
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans&family=Inter:wght@700;800&display=swap');
 body{
  margin: 0px;
 }
 main{
  font-family: inter;
  font-weight: 800;
 }
 nav {
  margin: 20px 30px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  }

  nav :first-child{
    height: 38px;
    width: 35px;
  }
  nav :last-child{
    height: 22px;
    width: 20px;

  }
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
  
  }
  main div{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 12px;
  }
  main img{
    margin: 28px;
    height: 129px;
    margin-bottom: 0px;
  }
 h1{
    font-size: 50px;
    font-weight: 800;
    margin: 2px;
    color: #2B2F30;
  }
  main h3{
    margin: 0px;
    font-size: 14px;
    width: 309px;

  }
  button{
    margin:0px;
    margin-top: 15px;
    background-color:#34495E;
    border-radius: 13px;
    border: none;
    font-size: 14px;
    line-height: 20px;
    width:121px;
    height: 31px;
    color: #FFFFFF;
    margin-bottom: 0px;
    font-family: inter;
    font-weight: 800;
    letter-spacing: -0.02em;
    font-size: 14px;

  }
  section{
    margin-top: 65px;
    font-family: inter;
    background-color: #39B983;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
  }
   .container1, .container2,  .container3{
    display: flex;
    flex-direction: column;
    width: 125px;
    align-items: center;
    text-align: center;
    margin-top:  59px;
    margin-bottom: 51px;
    gap:20px

  }
   section h3{
    margin: 0px;
    font-size: 16px;
    width: 309px;
    }

  section img{
    height: 60px;
    width: 60px;
  }
  section p{
    font-family: inria sans;
    font-size: 12px;
    width: 125px;
    margin:0px
  }
  footer{
    height: 41px;
  }

</style>

