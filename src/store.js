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
        deleteProducto({commit}, id){
            try{
                commit('deleteProducto', id)
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
            if(!state.carrito.find(prod => prod.producto.id === producto.id)){
                let item = {producto: producto,
                            cant: 1}
                state.carrito.push(item)
                localStorage.setItem('carrito',JSON.stringify(state.carrito));
            }else{
                state.carrito.forEach(prod => {
                    if(prod.producto.id === producto.id){
                        prod.cant++;
                    }
                } );
                localStorage.setItem('carrito',JSON.stringify(state.carrito));
            }

        },
        deleteProducto(state,id){
            state.carrito = state.carrito.filter(producto => producto.producto.id !== id);
            localStorage.setItem('carrito',JSON.stringify(state.carrito));
        }
    }
})

