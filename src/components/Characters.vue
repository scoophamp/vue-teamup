<template>
    <div class="">
    
          <transition-group name="bounce" tag="ul" class="list-group-flush list-group-horizontal row w-100 p-0">
<li v-for="char in allCharacters" :key="char.id" class="character list-group-item">
 
<!-- <div class="w-100 d-flex justify-content-center">
    <div class="minion" :class="getmainUIState"><Face/></div>
    </div> -->

<h5 style="text-transform: capitalize">{{char.name}}</h5>



</li>
</transition-group>






    </div>
   

</template>

<script>

import { mapGetters } from 'vuex'
// import Face from './CharacterFace';

export default {
name: "Characters",
computed: mapGetters(["allCharacters", "getmainUIState"]),
components: {
    // Face,
   
}
}
</script>

<style scoped>

@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}

.container{
    display: flex;
    justify-content: center;
    width: 100%;
}

.character{
   display: flex;
    justify-content: space-evenly;
    

}

.list-group-item{
    background:#557DB8!important;
    color:white;
}

.minion{
    border-radius: 50%;
    height: auto;
    width: 60px;
    height: 60px;
    background-color: #F8CA00;
    transform: translatey(0px);
    -webkit-animation: float 6s ease-in-out infinite;
    animation: float 6s ease-in-out infinite;
}

.bounce-enter-active {
  animation: bounce-in .9s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    font-weight: bold;
  }
  50% {
    transform: scale(1.2);
    font-weight: bold;
  }
  100% {
    transform: scale(1);
  }
}
</style>