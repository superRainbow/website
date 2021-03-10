import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state:{
      route:[
        {
          path:'/about',
          name: 'About'
        },
        {
          path:'/work',
          name: 'Work'
        },
        {
          path:'/blog',
          name: 'Blog'
        }
      ]
   },
    mutations:{

    }
});
