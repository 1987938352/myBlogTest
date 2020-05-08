import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Islogin:false,
    Id:0,
    Name:'',
    Authorization:''
  },
  mutations: {
    login(context,payLoad){
      context.Islogin=true;
      context.Id=payLoad.id;
      context.Name=payLoad.name;
      context.Authorization=payLoad.authorization;
    },
    login2(context,payLoad){
      console.log('---------');
      console.log(payLoad);
    }
  },
  actions: {
    
  },
  modules: {
  }
})
