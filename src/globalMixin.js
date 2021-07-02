import Vue from 'vue'

var miMixin = {
    computed : {
        mostrarProductos() {
            return this.$store.state.productos
        },
        mostrarCarrito() {
            console.log('mostrar carrito en globalmixin' + this.$store.state.carrito);
            if(this.$store.state.carrito.length == 0){
                this.$store.state.carrito = JSON.parse(localStorage.getItem('carrito'));
            }
            return this.$store.state.carrito
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