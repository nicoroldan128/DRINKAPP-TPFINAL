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
        deleteProducto({commit}, name){
            try{
                commit('deleteProducto', name)
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
            if(!state.carrito.find(prod => prod.producto.name === producto.name)){
                let item = {producto: producto,
                            cant: 1}
                state.carrito.push(item)
                localStorage.setItem('carrito',JSON.stringify(state.carrito));
            }else{
                state.carrito.forEach(prod => {
                    if(prod.producto.name === producto.name){
                        prod.cant++;
                    }
                } );
                localStorage.setItem('carrito',JSON.stringify(state.carrito));
            }

        }, 
        deleteProducto(state,name){
            state.carrito = state.carrito.filter(producto => producto.producto.name !== name);
            localStorage.setItem('carrito',JSON.stringify(state.carrito));
        }
    }
})

/* MODIFICACIONES:

*EN STORE:
- deleteProducto cambien id por name - *no me tomaba los productos // no se el motivo*

*EN CARRITO
- deleteProducto cambien id por name

*/

