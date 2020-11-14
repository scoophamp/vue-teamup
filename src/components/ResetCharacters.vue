<template>
 <button id="resetBtn" @click="onReset">Reset</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
 
  methods:{
    ...mapActions(["resetCharacters", "setUIState"]),

    onReset(e){
        e.preventDefault();
        this.resetCharacters()
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