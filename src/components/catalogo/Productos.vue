<template>

  <section class="src-components-productos">
    <br>
    
    <h2>Nuestro Catalogo de Productos</h2>

    <h3 v-if="!mostrarProductos.length" class="alert alert-danger">
      No hay Productos para mostrar
    </h3>

      <div class="card-deck m-5">
        <Producto v-for="producto in mostrarProductos" 
          :key="producto.id"
          :producto="producto"/>
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
  h2{
    text-align: center;
  }
</style>
