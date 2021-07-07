<template>
   <section class="src-components-producto">

    <!-- Card Producto --> 
    <div class="card border-dark mb-3 mr-3" style="max-width: 21rem;">
            <img class="card-img-top" :src="producto.image" :style="{width:'300px', borderRadius:'30px'}" alt="Card image cap">
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
               <!-- Ventana Modal Detalle --> 
              <b-modal v-model="modalShow" hide-footer>
                <div>
                  <b-card-title><h3>{{this.detalle.nombre}} - $ {{this.detalle.price}}</h3></b-card-title>
                  <img class="card-img-top" :src="this.detalle.image" :style="{width:'300px', borderRadius:'30px', 'margin-left': '80px'}"/>
                  <b-card-title>
                    <h4>Descripcion</h4>
                  </b-card-title>
                  <p :style="{margin: '5px'}">{{this.detalle.description}}</p>
                </div>
                <div>
                  <b-button :style="{'margin-left': '80px', 'margin-top': '15px', 'margin-bottom': '10px' }" variant="success" @click="addProducto(producto)">Agregar al Carrito</b-button>
                  <b-button :style="{'margin-left': '40px', 'margin-top': '15px', 'margin-bottom': '10px'}" variant="primary" href="/carrito">Ir al Carrito</b-button> 
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
          image: this.producto.image,
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
