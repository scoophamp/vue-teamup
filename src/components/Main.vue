<template>

<div class="row text-center" style="background:#E2BC56">
   <h3 class="col-12 mb-2 teamsHeader">How many teams?</h3>
   <div class="col-12"> <TeamSelector/></div> 
   <h3 class="col-12 mb-2 teamsHeader">Who is competing?</h3>  
   <div class="col-12 mb-2"><AddCharacters /> </div>    
   
   <div class="col-12 d-flex justify-content-center">
   <ResetCharacters v-if="countCharacters > 0"/>
   <CreateTeams v-if="countCharacters > 0"/>
   </div>
   <div class="col-12 mt-2" style="min-height:500px; background: #557DB8">
   <h3 v-if="countCharacters > 0">{{countCharacters}} players</h3>   
   <Characters/>
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

