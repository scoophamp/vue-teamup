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

        const characters = state.characters;
        let result = [];
        for (let i = numberOfTeams; i > 0; i--) {
            result.push(characters.splice(0, Math.ceil(characters.length / i)));
        }

      
        commit("setTeams", result);

        console.log(state.teams)
        
    }




};

const mutations = {
    resetCharacters: (state) => state.characters.splice(0, state.characters.length),
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