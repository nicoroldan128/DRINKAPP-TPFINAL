import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Categorias from './components/Categorias.vue';
import Productos from './components/productos/Productos.vue';
import Recetas from './components/Recetas.vue';
import Carrito from './components/Carrito.vue';
import Login from './components/Login.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history',
    routes : [
       {path: '/', component : Home},
        {path: '/categorias', component : Categorias},
        {path: '/productos', component : Productos},
        {path: '/recetas', component : Recetas},
        {path: '/carrito', component : Carrito},
        {path: '/login', component : Login}
    ]
});