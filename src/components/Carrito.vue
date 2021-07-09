<template>
  <section class="src-components-carrito">
    <div class="p-3 mb-2 bg-light text-dark">
      <br>
      <h2 class="font text-center">Tu Carrito de Compras</h2>
      <br>

      <div class="wrapper" v-if="mostrarCarrito.length != 0">
        <div  class="col-8">
          <div class="card text-dark bg-light mb-3 ml-5" style="max-width: 60rem;" v-for=" producto in mostrarCarrito" :key="producto.id" :producto="producto">
            <div class="card-body" :style="{padding: '0.0rem'}">
            <div class="row align-items-center">
                <div class="col-2">
                  <img class="card-img" :src="producto.producto.image" :style="{width:'100px', borderRadius:'10px', margin:'15px'}" alt="Card image cap">
                </div>
                <div class="col-2">
                  <h5 class="card-text"><strong>{{producto.producto.name}}</strong></h5>
                </div>
                <div class="col-2">
                  <div class="row">
                    <h5>Cantidad</h5>
                  </div>  
                  <div class="row">
                    <a href="#" @click="disminuirCantidad(producto.producto)"><b-icon icon="dash" :style="{'margin-left': '5px', 'margin-right': '15px', 'font-size': '20px'}"></b-icon></a>
                    <h5>{{producto.cant}}</h5>
                    <a href="#" @click="aumentarCantidad(producto.producto)"><b-icon  icon="plus" :style="{'margin-left': '15px', 'margin-right': '10px', 'font-size': '20px'}"></b-icon></a>  
                  </div>
                </div>
                  <div class="col-2">
                    <h5>Precio unid.</h5>
                    <p class="card-text"><strong>$ {{producto.producto.price}}.-</strong></p>
                  </div>
                <div class="col-2">
                  <h5>SubTotal</h5>
                  <p class="card-text"><strong>$ {{producto.producto.price * producto.cant}}.-</strong></p>
                </div>
                <div class="col-2">
                    <a href="#" @click="deleteProducto(producto.producto.name)"><b-icon icon="trash" class="h3"></b-icon></a>
                </div>
              </div>  
            </div>  
          </div> 
        </div>
          <div class="col-4">

            <div class="col" >
              <p style="font-size:22px">Productos agregados {{mostrarCarrito.length}} {{mostrarCarrito.length == 1 ? 'unidad' : 'unidades'}}</p>
              <div >
                <p style="font-size:22px"><strong>Total a Pagar ${{calcularTotal(mostrarCarrito)}}.-</strong></p>
              </div>
               <b-button type="button" class="btn btn-danger" @click="vaciarCarrito">Vaciar Carrito</b-button>
    
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" :style="{'margin-left': '15px'}">
              Realizar Pago
              </button>
            </div>
        </div>
          
        
      </div>
      <div v-else>
        <div class="alert alert-dark text-center" role="alert">
        <h5>No tiene productos en el Carrito</h5>
        </div>
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
        this.$bvModal.msgBoxConfirm('¿Esta seguro?')
          .then(value => {
            if(value){
              this.$store.dispatch('vaciarCarrito')
            }         
          })
          .catch(err => {
            console.log(err);
          })
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
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 160px;
  }

  p{
    font-size: 20px;
  }

  .row{
    margin-right: 1px;
    margin-left: 1px;
  }

</style>
