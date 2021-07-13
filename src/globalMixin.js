import Vue from 'vue'

var miMixin = {
    computed : {
        mostrarProductos() {
          // la linea original es this.$store.state.productos
            if(this.ordenarPrecio == 'Menor a Mayor'){
                return this.$store.state.productos.sort(function (a, b) {
                    if (a.price > b.price) {
                      return 1;
                    }
                    if (a.price < b.price) {
                      return -1;
                    }
                    return 0;
                  })
            }else if(this.ordenarPrecio == 'Mayor a Menor'){
                return this.$store.state.productos.sort(function (a, b) {
                    if (b.price > a.price) {
                      return 1;
                    }
                    if (b.price < a.price) {
                      return -1;
                    }
                    return 0;
                  })
            }else {
                return this.$store.state.productos.sort(function (a, b) {
                  if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
                })
            }     
        },
        mostrarCarrito() {
            if(this.$store.state.carrito.length == 0 || this.$store.state.carrito.length === null){
              if(JSON.parse(localStorage.getItem('carrito'))){
                this.$store.state.carrito = JSON.parse(localStorage.getItem('carrito'));
              }
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