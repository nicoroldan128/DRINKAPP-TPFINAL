<template>
  <section class="src-components-carrito">
    <div class="p-3 mb-2 bg-light text-dark">
      <br>
      <h2 class="font text-center">Tu carrito de compras</h2>
      <br>

      <div class="container">
        <div class="card text-dark bg-light mb-3" style="max-width: 60rem;" v-for=" producto in mostrarCarrito" :key="producto.id" :producto="producto">
          <div class="card-body">
            <div class="container">
              <div class="row align-items-center">
                <div class="col align-self-start ">
                  <img class="card-img" :src="producto.imagen" :style="{width:'100px', borderRadius:'10px'}" alt="Card image cap">
                </div>
                <div class="col align-self-center mb-3 mt-3">
                  <p class="card-text mr-3 ml-3"><strong>{{producto.name}}</strong></p>
                </div> 
                <div class="col align-self-end ml-5 mb-3 mt-3">
                  <div class="row align-self-end">
                    <a href="#" class="btn btn-success mr-1 ml-1">Agregar</a>
                    <a href="#" class="btn btn-danger mr-1 ml-1">Eliminar</a>
                  </div>
                </div>
                <div class="col align-self-end mb-3 mt-3">
                  <p class="card-text ml-5"><strong>$ {{producto.price}}.-</strong></p>
                </div>
              </div>   
            </div>
          </div>
        </div>
        <br>
        <div v-if="mostrarCarrito.length != 0" class="row align-items-end">
          <div class="col-md-4">
            <p style="font-size:22px">Productos agregados {{mostrarCarrito.length}} unidades</p>
          </div>
          <div class="col-md-4 offset-md-4">
            <p style="font-size:22px"><strong>Total $ {{calcularTotal(mostrarCarrito)}}</strong></p>
          </div>
          
        </div>
        <div v-else>
          <div class="alert alert-dark" role="alert">
            No tiene productos en el carrito
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
          var price=producto.price
          sumaProductos+=price
        });
        return sumaProductos
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

</style>
