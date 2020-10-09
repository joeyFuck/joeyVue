import Vue from 'vue';
import Vuex from 'vuex';
import testStatus from './modules/test' 
import testAuthor from './modules/testAuthor' 
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
         testStatus,
         testAuthor
    }
});