<template>

<div class="row text-center" style="background:#E2BC56">
   <h3 class="col-12 mb-2 teamsHeader">How many teams?</h3>
   <div class="col-12"> <TeamSelector/></div> 
   <h3 class="col-12 mb-2 teamsHeader">Who participates?</h3>  
   <div class="col-12 mb-2"><AddCharacters /> </div>    
   
   <div class="col-12 d-flex justify-content-center">
   <ResetCharacters v-if="countCharacters > 0"/>
   <CreateTeams v-if="countCharacters > 0"/>
   </div>
   <div class="col-12 mt-2" style="min-height:500px; background: #557DB8">
     <transition name="fade">
   <h3 v-if="countCharacters > 0">{{countCharacters}} players</h3>  
   </transition> 
   <Characters/>
   <transition name="fade">
     <h3 v-if="teams.length > 0">Teams</h3>  
  </transition>
   
   <TeamsDivided/>
  </div>
</div>
</template>

<script>
import TeamsDivided from './TeamsDivided'
import TeamSelector from './TeamsSelector'
import AddCharacters from './AddCharacter'
import ResetCharacters from './ResetCharacters'
import CreateTeams from './CreateTeams'
import Characters from './Characters'

import { mapGetters } from 'vuex'


export default {
 
   computed: {   
    ...mapGetters([
      'allCharacters',
      'countCharacters',
      'teams'     
    ]), 
    
    },
  components: { Characters, AddCharacters, CreateTeams, ResetCharacters, TeamSelector, TeamsDivided},
  name: 'MainPage',    
  data(){
    return{
      anyCharacters: mapGetters
    }
    
  }

}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
