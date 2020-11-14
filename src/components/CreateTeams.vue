<template>
<div>

<button @click="onSortTeam">Team Up ! </button>

</div>
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
computed: {
  ...mapGetters(['numberOfTeams'])  // assuming you are using namespaced modules
},
methods: {

...mapActions(["splitIntoTeams", "setUIState"]),
onSortTeam()  {

this.splitIntoTeams(this.numberOfTeams);
this.setUIState("generatedteams")
}

}

}
</script>

<style scoped>
button{
      font-weight: bold;
      background:#0B8943;
}
</style>