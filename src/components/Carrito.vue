<template>
  <section class="src-components-carrito">
    <div class="p-3 mb-2 bg-light text-dark">
      <br>
      <h2 class="font text-center">Tu carrito de compras</h2>
      <br>

      <div class="container">
        <div class="card text-dark bg-light mb-3" style="max-width: 60rem;" v-for=" producto in mostrarCarrito" :key="producto.id" :producto="producto">
          <div class="card-body" :style="{padding: '0.25rem'}">
            <div class="container" :style="{'max-width': '1000px'}">
              <div class="row align-items-center">
                <div class="col align-self-start ">
                  <img class="card-img" :src="producto.producto.image" :style="{width:'100px', borderRadius:'10px', margin:'15px'}" alt="Card image cap">
                </div>
                <div class="col align-self-center mb-3 mt-3">
                  <h5 class="card-text mb-3"><strong>{{producto.producto.name}}</strong></h5>
                </div> 
                <div class="modal-body text-center">
                  <h5> Cantidad: {{producto.cant}}</h5>
                </div>  
                <div class="row align-self-center ml-5 mb-3 mt-3">
                 
                    <div>
                       <a href="#" @click="aumentarCantidad(producto.producto)" class="btn btn-success mr-2">+</a>
                    </div>
                   <div>
                      <a href="#" @click="disminuirCantidad(producto.producto)" class="btn btn-danger mr-2">-</a>
                   </div>
                    <div>
                      <a href="#" @click="deleteProducto(producto.producto.name)" class="btn btn-danger mr-4">Eliminar</a>
                    </div>    
                </div>

                <div class="col align-self-center mb-3 mt-3 ml-4">
                  <p class="card-text"><strong>$ {{producto.producto.price * producto.cant}}.-</strong></p>
                </div>
              </div>   
            </div>
          </div>
        </div>
        <div v-if="mostrarCarrito.length != 0 " class="row align-items-end">
          <div class="col align-self-center ml-5 ">
            <p style="font-size:22px">Productos agregados {{mostrarCarrito.length}} {{mostrarCarrito.length == 1 ? 'unidad' : 'unidades'}}</p>
          </div>
          <div class="col align-content-center offset-md-2">
            <p style="font-size:22px"><strong>Total a Pagar ${{calcularTotal(mostrarCarrito)}}.-</strong></p>
          </div>
          <button type="button" class="btn btn-danger offset-md-7" data-toggle="modal" @click="vaciarCarrito()" >  <!-- usar MODAL Confirm message box https://bootstrap-vue.org/docs/components/modal -->
              Vaciar Carrito
          </button>
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" :style="{'margin-left': '15px'}">
              Realizar Pago
          </button>
        </div>
        <div v-else>
          <div class="alert alert-dark" role="alert">
            No tiene productos en el carrito
          </div>
        </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"><strong>Resumen del pago</strong></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-center">
                  <img class="card-img-top" src="https://img.flaticon.com/icons/png/512/34/34627.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" :style="{width:'50px', borderRadius:'5px'}" alt="Card image cap">
                  
                  <h5 class="card-text text-center mt-3"><b>Total $ {{calcularTotal(mostrarCarrito)}}</b></h5>
                    <p class="card-text mb-0 text-center">Medio de pago: Efectivo</p>     
                </div>
              </div>
            </div>
        </div>
      </div> 
      <br>
    </div>
    
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-carrito',
    props: [],
    mounted () {
      
    },
    data () {
      return {

      }
    },
    methods: {
      calcularTotal(mostrarCarrito){
        var sumaProductos=0
        mostrarCarrito.forEach(producto => {
          var price= (producto.producto.price * producto.cant)
          sumaProductos+=price
        });
        return sumaProductos
      },
      deleteProducto(name){
        this.$store.dispatch('deleteProducto', name)
      },
      vaciarCarrito(){
        this.$store.dispatch('vaciarCarrito')
      },
      addProducto(producto){
          this.$store.dispatch('addProducto', producto)
      },
      aumentarCantidad(producto){
          this.$store.dispatch('aumentarCantidad', producto)
      },
      disminuirCantidad(producto){
          this.$store.dispatch('disminuirCantidad', producto)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-carrito {

  }
  .font{
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .wrapper{
      display: flex;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 50px;
      /* justify-content:center; */
      
  }

  p{
    font-size: 20px;
  }

  .btn{
    margin-bottom: 0px
  }



</style>
