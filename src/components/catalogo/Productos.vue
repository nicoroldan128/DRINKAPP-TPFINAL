<template>

  <section class="src-components-productos" >
    <div class="p-3 mb-2 bg-light text-dark">
      <div>
        <br>
        <h2 class="font text-center">Catalogo de productos</h2>
        <br>
      </div>
      <div class="input-group">
        <input type="text" class="form-control col-6 m-1" v-model="criterioDeBusqueda" placeholder="Buscar Producto">
        <select  name="bebidas" class="form-control col-3 m-1" v-model="busquedaPorCategoria">
           <option v-for="categoria in categorias" :key="categoria.id" :categ="categoria">{{categoria}}</option> 
        </select>
      </div>

      <h3 v-if="!mostrarProductos.length" class="alert alert-danger">
        No hay Productos para mostrar
      </h3>

        <div class="wrapper">
          <Producto v-for="producto in productosFiltrados" 
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
        criterioDeBusqueda: '',
        busquedaPorCategoria: '',
        categorias: ['Licor', 'Gaseosa', 'Gin', 'Ron','Vodka', 'Whisky','Aperitivo','Cervezas','Vinos']
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

  .input-group{
    margin: 10px;
    width: 50%;
   
  }

  .wrapper{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 500px
  }
   
  

</style>
