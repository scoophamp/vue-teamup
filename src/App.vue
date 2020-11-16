<template>
  <div id="app">    
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
#app {
 font-family: 'Quicksand', sans-serif;
 font-weight: 300;
  text-align: center;
  color: #2c3e50;
  margin-top: 33px;
  overflow-x:hidden;
  
}

html{
  background: #333E5D;
}

h3{
  font-weight: 400;
  background:#EA6020;
  color:white;
}

button{
font-family: 'Quicksand', sans-serif;
color:white;
background-color:#557DB8;
opacity: 0.9;
padding: 15.5px;
font-size: 18px;
border:none;
font-weight: 300;
outline:none!important;
}

button:disabled, button:disabled:hover{

color:black;
background-color:grey;
opacity: 0.5;
cursor:not-allowed

}

button:hover{
  background-color:#41B883;
}

input{
color:white;
font-size: 18px;
font-family: 'Quicksand', sans-serif;
background: #3E3E3E;
letter-spacing: 3px;
padding: 15.5px;
border:none;

}

input::placeholder{

color:ivory

}
</style>
