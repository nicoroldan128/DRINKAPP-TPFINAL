import Vue from 'vue'

var miMixin = {
    computed : {
        mostrarProductos() {
            return this.$store.state.productos
        }
    }
}

Vue.mixin(miMixin)