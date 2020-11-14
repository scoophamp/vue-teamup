const state = {

    mainUIState : "normal",
    numberOfTeams: 2
  };
  
  const getters = {
  
      numberOfTeams: (state) => state.numberOfTeams, 
      getmainUIState: (state) => state.mainUIState,
      
  };
  
  const actions = {
      
        setUIState({ commit }, UIState){
      
        commit("setNewUi", UIState);
  
     },

     setNumberOfTeam({ commit }, numberOfTeams){
      console.log(numberOfTeams)
      if (numberOfTeams > 0 || numberOfTeams < 12) {
      commit("setNumberOfTeams", numberOfTeams);        
      }

   }
      
  };
  
  const mutations = {
     
    setNewUi: (state, UIState) => (state.mainUIState = UIState),
    setNumberOfTeams: (state, numberOfTeams) => (state.numberOfTeams = numberOfTeams),
     
     
  };
  
  export default{
  
  state,
  getters,
  actions,
  mutations
  
  };