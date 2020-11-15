<template>
 <button id="resetBtn" @click="onReset">Reset</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
 
  methods:{
    ...mapActions(["resetCharacters", "resetTeams", "setUIState"]),

    onReset(e){
        e.preventDefault();
        this.resetCharacters();
        this.resetTeams();
        this.setUIState("normal")
    },
   
}

}
</script>

<style>
#resetBtn{
  opacity: 0.8;
}
</style>