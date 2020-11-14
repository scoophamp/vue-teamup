<template>
  <div>
    <ul v-for="team in numberOfTeams" :key="team">
      <li>Team: {{ team }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["allCharacters", "numberOfTeams"]),
 
};
</script>

<style>
</style>