<template>

  <section class="src-components-recipes">
    
    <fieldset class="text-center">
      <legend>Busca bebidas por categoria o ingrediente</legend>
    </fieldset>

    <vue-form :state="formState" @submit.prevent="sendDates()">
       <!-- <div class="row mt-4">

          <div class="col-md-4">
            <label for="name">Nombre del ingrediente</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.name"
            >
          </div>

        <div class="col-md-4">
          <select
            class="form-control"
            id="category"
            name="category"
            v-model.trim="formData.category"
          >
            <option value="" disabled>Selecciona la categoria</option>
            <option value="Ordinary Drink">Trago común</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Milk / Float / Shake">Shake</option>
            <option value="Other/Unknown">Otro</option>
            <option value="Cocoa">Coco</option>
            <option value="Shot">Shot</option>
            <option value="Coffee / Tea">Cafe o Te</option>
            <option value="Homemade Liqueur">Licor</option>
            <option value="Punch / Party Drink">Bebidas para fiestas</option>
            <option value="Beer">Cerveza</option>
            <option value="Soft Drink / Soda">Soda</option>
          </select>


        </div>


      </div> -->

        <div class="container">
           <div class="row align-items-center ml-8">
             <div class="col-4">
               <label for="name" style="font-size:24px"><b>Nombre del ingrediente</b></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  class="form-control"
                  autocomplete="off"
                  v-model.trim="formData.name"
                >
             </div>
             <div class="col-4">
               <label for="name" style="font-size:24px"><b>Categoría</b></label>
               <select
                  class="form-control"
                  id="category"
                  name="category"
                  v-model.trim="formData.category"
                >
                  <option value="" disabled>Selecciona la categoria</option>
                  <option value="Ordinary Drink">Trago común</option>
                  <option value="Cocktail">Cocktail</option>
                  <option value="Milk / Float / Shake">Shake</option>
                  <option value="Other/Unknown">Otro</option>
                  <option value="Cocoa">Coco</option>
                  <option value="Shot">Shot</option>
                  <option value="Coffee / Tea">Cafe o Te</option>
                  <option value="Homemade Liqueur">Licor</option>
                  <option value="Punch / Party Drink">Bebidas para fiestas</option>
                  <option value="Beer">Cerveza</option>
                  <option value="Soft Drink / Soda">Soda</option>
                </select>

             </div>
             <div class="col-4">
               <button class="btn btn-success mt-5" :disabled="formState.$invalid" type="submit">Enviar</button>
             </div>

           </div>
         </div>
    </vue-form>

    <div class="wrapper">
      <Recipe v-for="receta in recipes"
        :key="receta.idDrink"
        :recipe="receta" />
    </div>

  </section>

</template>

<script lang="js">
  import Recipe from './Recipe.vue';
  export default  {
    name: 'src-components-recipes',
    components:{
      Recipe
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        formData: this.getInicialData(),
        formState : {},
        recipes: [],
        search: {
          category:'',
          name:''
        },
        url:''
      }
    },
    computed: {

    },
    methods: {
      async getRecipes(){
        try {
          let urlRecipes =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.search.category}&i=${this.search.name}`;
          let res = await this.axios.get(urlRecipes);
          this.recipes = res.data.drinks;
          this.url = urlRecipes;
        } catch (error) {
          console.log(error);
        }
      },
      async sendDates(){
        this.search = {
          category:this.formData.category,
          name:this.formData.name
        }

        await this.getRecipes();

        console.log(this.recipes);
        console.log(this.url);

      },
      getInicialData(){
        return{
          category:'',
          name:''
        }
      }
    }
}


</script>

<style scoped lang="css">
  .recipes {

  }

  .font{
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  }
  .wrapper{
    display: grid;
    grid-template-columns: repeat(5, 2fr);
    grid-auto-rows: 500px
  }


   
</style>
