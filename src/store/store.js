import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    login:{
      loginShow: false,
      loginInfo: { data: '', callback: function () {

        }}
    }
  },
  mutations: {}
});

export default store
