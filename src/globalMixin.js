import Vue from 'vue'

var miMixin = {
    computed : {
        mostrarProductos() {
            return this.$store.state.productos
        },
        productosFiltrados(){
            return this.$store.state.productos.filter((producto) =>{
                let nombreProducto = producto.name
                let categoria = producto.category
                return nombreProducto.toLowerCase().includes(this.criterioDeBusqueda.toLowerCase()) && categoria.includes(this.busquedaPorCategoria)
            })
        }
    }
}

Vue.mixin(miMixin)