import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    login:{
      loginShow: false,
      loginInfo: {callback: function () {}}
    }
  },
  mutations: {
    loginModel(state,{loginShow,callback}) {
      state.login.loginShow = loginShow;
      if(callback) {
        state.login.loginInfo.callback = callback;
      }
    }
  }
});

export default store
