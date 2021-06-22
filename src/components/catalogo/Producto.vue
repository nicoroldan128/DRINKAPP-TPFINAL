<template>

   <section class="src-components-producto">

    <div class="card border-dark mb-3 mr-3" style="max-width: 20rem;">
            <img class="card-img-top" :src="producto.imagen" :style="{width:'300px', borderRadius:'30px'}" alt="Card image cap">
      <div class="card-body">
  
        <h5 class="card-title"><b>{{producto.name}}</b></h5>
        <p class="card-text">$ {{producto.price}}</p>   
        <a href="#" class="btn btn-success mr-4 mb-3">Agregar al carrito</a>
      <a href="#" class="btn btn-warning mb-3">Ver Detalle</a>   
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
