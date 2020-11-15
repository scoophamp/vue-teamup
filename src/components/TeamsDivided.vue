<template>
  <div class="row">    
    <div v-for="(team, index) in teams" :key="index" class="col">
      <h4>{{ randomTeamName() }}</h4>
      <ul class="list-group-flush">
        <li v-for="player in team" :key="player.id" class="list-group-item">
          {{ player.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["teams"]),
  methods: {
    randomTeamName() {
      var Sentencer = require("sentencer");
      var randomTeamName = Sentencer.make("The {{ adjective }} {{nouns}}");
      return randomTeamName;
    },
  },
};
</script>

<style>
</style>