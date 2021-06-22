<template>

  <section class="src-components-productos" >
    <div class="p-3 mb-2 bg-light text-dark">
      <div>
        <br>
        <h2 class="font text-center">Catalogo de productos</h2>
        <br>
      </div>

      <h3 v-if="!mostrarProductos.length" class="alert alert-danger">
        No hay Productos para mostrar
      </h3>

        <div class="card-deck">
          <Producto v-for="producto in mostrarProductos" 
            :key="producto.id"
            :producto="producto"/>
        </div>

    </div>
    
  </section>

</template>

<script lang="js">
  import Producto from './Producto.vue'
  export default  {
    name: 'src-components-productos',
    components: {
      Producto
    },
    props: [],
    mounted () {
      this.$store.dispatch('getProductos')
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
  .src-components-productos {

  }
  .font{
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  }
  /* #div{
    background-color: e0e1e2;
  } */
</style>
