import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const URL_MOCKAPI = 'https://609dba1b33eed80017957056.mockapi.io/productos';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        productos : []
    },
    actions:{
        async getProductos({commit}){
            try {
                let {data:productos} = await axios(URL_MOCKAPI)
                commit('getProductos',productos)
            }
            catch (err){
                commit('getProductos',[])
            }
        }
    },
    mutations:{
        getProductos(state,productos) {
            state.productos = productos
        },
    }
})
