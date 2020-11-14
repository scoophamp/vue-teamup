import Vuex from 'vuex';
import Vue from 'vue';
import characters from './modules/characters';
import uiModule from './modules/uimodule';

Vue.use(Vuex);

export default new Vuex.Store({

modules: {
    characters,
    uiModule
}

});