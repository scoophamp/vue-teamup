const state = {

    characters: [

    ],

    teams: []

};

const getters = {

    allCharacters: (state) => state.characters,
    countCharacters: (state) => state.characters.length,
    teams: (state) => state.teams


};



const actions = {

    async resetCharacters({
        commit
    }) {
        commit("resetCharacters");

    },
    async resetTeams({
        commit
    }) {
        commit("resetTeams");

    },

    async sortTeams({
        commit
    }) {
        commit("sortTeams");

    },

    async addCharacter({
        commit
    }, title) {

        const newCharacter = {
            id: state.characters.length + 1,
            name: title,
            team: 0
        };

        commit("newCharacter", newCharacter);

    },

    splitIntoTeams({
        commit
    }, numberOfTeams) {

        const characters = [...state.characters];

        for (var i = characters.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = characters[i];
            characters[i] = characters[j];
            characters[j] = temp;
        }


        let result = [];
        for (let i = numberOfTeams; i > 0; i--) {
            result.push(characters.splice(0, Math.ceil(characters.length / i)));
        }


        commit("setTeams", result);

    }




};

const mutations = {
    resetCharacters: (state) => state.characters.splice(0, state.characters.length),
    resetTeams: (state) => state.teams.splice(0, state.teams.length),
    setCharacters: (state, characters) => (state.characters = characters),
    setTeams: (state, teams) => (state.teams = teams),
    newCharacter: (state, character) => state.characters.unshift(character),
    sortTeams: (state) => state.characters.sort((a, b) => parseFloat(a.team) - parseFloat(b.team))
};

export default {

    state,
    getters,
    actions,
    mutations

};