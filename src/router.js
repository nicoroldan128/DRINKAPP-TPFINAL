import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Productos from './components/catalogo/Productos.vue';
import Carrito from './components/Carrito.vue';
import Login from './components/Login.vue';
import Formulario from './components/Formulario.vue';
import Recipes from './components/Recipes.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history',
    routes : [
       {path: '/', component : Home},
        {path: '/productos', component : Productos},
        {path: '/carrito', component : Carrito},
        {path: '/login', component : Login},
        {path: '/', redirect:'/formulario'},
        {path: '/formulario', component: Formulario},
        {path:'/recetas', component: Recipes} 
    ]
});