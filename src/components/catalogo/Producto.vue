<template>

   <section class="src-components-producto">

    <div class="card border-dark mb-3 mr-3" style="max-width: 21rem;">
            <img class="card-img-top" :src="producto.imagen" :style="{width:'300px', borderRadius:'30px'}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"><b>{{producto.name}}</b></h5>
        <p class="card-text mb-0">$ {{producto.price}}</p>        
      </div>
      <div class="btn btn-group">
        <button type="button" class="btn btn-success mr-2" @click="addProducto(producto)">
          Agregar al Carrito
        </button>
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
          Ver Detalle
        </button>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               <img class="card-img-top" :src="producto.imagen" :style="{width:'300px', borderRadius:'30px'}" alt="Card image cap">
               <h5 class="card-title"><b>{{producto.name}}</b></h5>
                <p class="card-text mb-0">{{producto.description}}</p>     
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    

  </section>

</template>

<script lang="js">


  export default  {
    name: 'src-components-producto',
    props: ['producto'],
    mounted () {
     
    },
    data () {
      return {

      }
    },
    methods: {
      addProducto(producto){
          console.log(producto); 
          this.$store.dispatch('addProducto', producto)
      }

    },
    computed: {
      
    }
}


</script>

<style scoped lang="css">
  .src-components-producto {
  }
  .card-title{
    text-align: center;
    font-size: 22px;
  }
  .card-text{
    font-size: 24px;
    text-align: center;
  }
  .card{
    display: flex;
    height: 50vh;
  }

  img{
    height: 30vh;
    margin: 15px;
  }

</style>
