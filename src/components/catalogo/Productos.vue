<template>

  <section class="src-components-productos" >
    <div class="p-3 mb-2 bg-light text-dark">
      <div>
        <br>
        <h2 class="font text-center">Nuestros productos</h2>
        <br>
      </div>
      <div class="input-group">
        <div class="row align-items-center">
          <label for="name">Buscar por Nombre</label>
          <input type="text" class="form-control" v-model="criterioDeBusqueda">
        </div>
        <div class="row align-items-center">
          <label for="name">Buscar Por Categoria</label>
          <select  name="bebidas" class="form-control" v-model="busquedaPorCategoria">
            <option v-for="categoria in categorias" :key="categoria.id" :categ="categoria">{{categoria}}</option> 
          </select>
        </div>
        <div class="row align-items-center">
          <label for="name">Ordenar Por Precio</label>
          <select  name="bebidas" class="form-control" v-model="ordenarPrecio">
           <option v-for="o in ordenarDe" :key="o.id" :ord="o">{{o}}</option> 
          </select>
        </div>
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
        ordenarPrecio: '', 
        categorias: ['','Aperitivo','Cerveza', 'Gaseosa', 'Gin', 'Licor', 'Ron', 'Tequila', 'Vino', 'Vodka', 'Whisky'],
        ordenarDe: ['', 'Menor a Mayor', 'Mayor a Menor']
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
    margin: 25px;
    width: 100%;
  }

  .wrapper{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 500px
  }

  .row{
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 10px ;
  }

  .form-control{
    width: 200px;
    margin-left: 0px;
  }

  label{
    margin-right: 15px;
    font-size: 20px;
  }


  

</style>
