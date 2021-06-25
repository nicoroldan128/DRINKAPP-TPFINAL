<template>
  <section class="src-components-carrito">
    <div class="p-3 mb-2 bg-light text-dark">
      <br>
      <h2 class="font text-center">Tu carrito de compras</h2>

      <div v-for=" producto in mostrarCarrito" :key="producto.id" :producto="producto">
        <div class="card-body">
          <div class="wrapper">
            <div>
              <img class="card-img" :src="producto.imagen" :style="{width:'100px', borderRadius:'10px'}" alt="Card image cap">
            </div>
            <div>
              <p class="card-text mt-4 mr-5 ml-5">{{producto.name}}</p>
            </div> 
            <div>
              <a href="#" class="btn btn-success ">Agregar</a>
              <a href="#" class="btn btn-danger">Eliminar</a>
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
    
  }

</style>
