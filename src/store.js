import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const URL_MOCKAPI = 'https://609dba1b33eed80017957056.mockapi.io/productos';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        productos : [],
        carrito:[]   
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
        },
        addProducto({commit}, producto){
            try{
                commit('addProducto', producto)
            } catch(err){
                commit('addProducto','')
            }
        },
        deleteProducto({commit}, producto){
            try{
                commit('deleteProducto', producto)
            }catch(err){
                this.commit('deleteProducto')
            }
        }
    },
    mutations:{
        getProductos(state,productos) {
            state.productos = productos
        },
        addProducto(state,producto){
            state.carrito.push(producto)
            localStorage.setItem('carrito',JSON.stringify(state.carrito));
        }
        
    }
})

