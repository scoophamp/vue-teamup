const state = {

    characters: [

    ]

};

const getters = {

    allCharacters: (state) => state.characters,
    countCharacters: (state) => state.characters.length,


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

        console.log(result);
        commit("sortTeams");
    }




};

const mutations = {
    resetCharacters: (state) => state.characters.splice(0, state.characters.length),
    setCharacters: (state, characters) => (state.characters = characters),
    newCharacter: (state, character) => state.characters.unshift(character),
    sortTeams: (state) => state.characters.sort((a, b) => parseFloat(a.team) - parseFloat(b.team)),
    setTeam: (state, characterId, teamnumber) => {
        if (characterId === 1) {
            return;
        }
        state.characters.forEach(char => {

            if (char.id === characterId) {
                char.team = teamnumber;
            }

        });

    }
};

export default {

    state,
    getters,
    actions,
    mutations

};