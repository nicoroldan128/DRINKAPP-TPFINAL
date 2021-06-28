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
      <div> 
        <b-button class="btb btn-warning" @click="getDetalle(modalShow=!modalShow)">Ver Detalle</b-button>

          <b-modal v-model="modalShow">
            <div>
              <h2>{{this.detalle.nombre}} - $ {{this.detalle.price}}</h2>
              <img class="card-img-top" :src="this.detalle.imagen" :style="{width:'300px', borderRadius:'30px'}"/>

              <h3>Descripcion</h3>
              <p>{{this.detalle.description}}</p>
            </div>
          </b-modal>
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
        detalle :{
          nombre: '',
          imagen: '',
          price: 0,
          description: ''
        }
      }
    },
    methods: {
      addProducto(producto){
          console.log(producto); 
          this.$store.dispatch('addProducto', producto)
      },
      getDetalle(){
        this.detalle = {
          nombre: this.producto.name,
          imagen: this.producto.imagen,
          price: this.producto.price,
          description: this.producto.description
        }
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

  .card-img-top{
    height: 30vh;
    margin: 15px;
  }

</style>
