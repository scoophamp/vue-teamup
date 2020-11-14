<template>
  <div class="d-flex flex-row justify-content-center mb-4">
    <div class="d-flex justify-content-between">
      <button
        @click="onMinusClicked"
        class="teamsBtn minus font-weight-bold rounded-circle"
      >
        -
      </button>
      <input
        @keyup="checkInput"
        ref="teamsRef"
        type="number"
        oninput="validity.valid||(value='');"
        :value="numberOfTeams"
        id="teamsInput"
        class="mr-2 ml-2 text-center bg-white text-dark"
      />
      <button
        @click="onPlusClicked"
        class="teamsBtn plus font-weight-bold rounded-circle"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["numberOfTeams"]),
  },
  data() {
    return {
      howManyTeams: 2,
    };
  },

  methods: {
    ...mapActions(["setNumberOfTeam"]),

    checkInput() {
      if (!this.$refs["teamsRef"].value) {
        return;
      }
      var teamNumbersValue = parseInt(this.$refs["teamsRef"].value);
      if (teamNumbersValue < 0) {
        this.setNumberOfTeam(0);
      } else {
        this.setNumberOfTeam(teamNumbersValue);
      }
    },
    onPlusClicked() {
      var numberofteams = parseInt(this.numberOfTeams) + 1;
      this.setNumberOfTeam(numberofteams);
    },
    onMinusClicked() {
      var numberofteams = parseInt(this.numberOfTeams);
      if (numberofteams !== 0) {
        numberofteams = this.numberOfTeams - 1;
        this.setNumberOfTeam(numberofteams);
      }
    },
  },
};
</script>

<style scoped>
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#teamsInput {
  background: #15B4BC !important;
  color: white !important;
  padding: 0;
  font-size: 36px;
  width: 65.8%;
}

.minus:hover {
  background-color: #D12A1A !important;
}

.teamsBtn {
  width: 54px;
  text-align: center;
  padding: 0;
  font-size: 32px;
  padding-bottom: 7px;
}

input:focus {
  outline: none !important;
}
</style>