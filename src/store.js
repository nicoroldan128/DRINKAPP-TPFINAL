import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const URL_MOCKAPI = 'https://drinkapparg.herokuapp.com/api/products';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        productos : [],
        carrito:[]   
    },
    actions:{
        async getProductos({commit}){
            try {
                let {data:productos} = await axios.get(URL_MOCKAPI)
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
        aumentarCantidad({commit}, producto){
            try{
                commit('aumentarCantidad', producto)
            } catch(err){
                commit('aumentarCantidad','')
            }
        },
        disminuirCantidad({commit}, producto){
            try{
                commit('disminuirCantidad', producto)
            } catch(err){
                commit('disminuirCantidad','')
            }
        },
        deleteProducto({commit}, name){
            try{
                commit('deleteProducto', name)
            }catch(err){
                this.commit('deleteProducto')
            }
        },
        vaciarCarrito({commit}){
            try{
                commit('vaciarCarrito')
            }catch(err){
                this.commit('vaciarCarrito')
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
        aumentarCantidad(state, producto){
            state.carrito.forEach(prod => {
                if(prod.producto.name === producto.name){
                    prod.cant++;
                    localStorage.setItem('carrito',JSON.stringify(state.carrito)); 
                }
            }); 
        }, 
        disminuirCantidad(state, producto){
            state.carrito.forEach(prod => {
                if(prod.producto.name === producto.name){
                    prod.cant--;
                    if(prod.cant == 0){
                        state.carrito = state.carrito.filter(producto => producto.producto.name !== prod.producto.name);
                    }
                }         
            });
            localStorage.setItem('carrito',JSON.stringify(state.carrito));
        },
        deleteProducto(state,name){
            state.carrito = state.carrito.filter(producto => producto.producto.name !== name);
            localStorage.setItem('carrito',JSON.stringify(state.carrito));
        },

        vaciarCarrito(state){
            state.carrito = []
            //localStorage.clear()
        }
    }
})

