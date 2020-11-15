<template>
  <div class="row">    
    <div @click="generator()" ref="team" v-for="(team, index) in teams" :style="randomColor" :key="index" class="col">
      <h4 class="text-white bg-dark">{{ randomTeamName() }}</h4>
      {{generator()}}
      <ul class="list-group-flush">
        <li v-for="(player, index) in team" :key="player.id" class="list-group-item">
         <h4 class="text-white">{{ player.name }}</h4>
         <span class="text-white" v-if="index === 0">(Team Captain)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["teams"]),
  data() {
    return {
      randomColor : ""
    }
  },
  methods: {
    randomTeamName() {
      var Sentencer = require("sentencer");
      var randomTeamName = Sentencer.make("{{ adjective }} {{nouns}}");
      return randomTeamName;
    },
    generator: function(){
      this.randomColor = 'background:' + '#'+(Math.random()*0xFFFFFF<<0).toString(16) + '!important';      
      }

  },
};
</script>

<style scoped>
.list-group-item{
  background: transparent!important;
}

h4{
  text-transform: capitalize;
}
</style>