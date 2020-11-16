<template>
  <div class="row">    
  
    <div ref="team" v-for="(team, index) in teams" :style="randomColor" :key="index" class="col team">
      <h4 class="text-white bg-dark">{{ randomTeamName() }}</h4>
      <!-- {{generator()}} -->
      
          <transition-group name="slide-fade" tag="ul" class="list-group-flush">
        <li v-for="(player, index) in team" :key="player.id" class="list-group-item">
         <h4 class="text-white">{{ player.name }}</h4>
         <span class="text-white" v-if="index === 0">(Team Captain)</span>
        </li>
          </transition-group>
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
    // generator: function(){
    //   this.randomColor = 'background:' + '#'+(Math.random()*0xFFFFFF<<0).toString(16) + '!important';      
    //   }

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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}





.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>