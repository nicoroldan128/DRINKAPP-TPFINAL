<template>

  <section class="Recipe">
    <div class="card border-dark mb-3" style="max-width: 20rem;">
      <img class="card-img-top" :src="recipe.strDrinkThumb" :style="{width:'300px', borderRadius:'15px'}" alt="imagen receta">
      <div class="card-body">
        <h5 class="card-title"><b>{{recipe.strDrink}}</b></h5>

        <div>
          <b-button @click="getRecipe">Ver receta</b-button>

          <b-modal v-model="modalShow">
            <div>
              <h2>{{this.drink.strDrink}}</h2>
              <h3 class="mt-4">Instrucciones</h3>
              <p>{{this.drink.strInstructions}}</p>
              <img class="card-img-top" :src="drink.strDrinkThumb" />

              <h3>Ingredientes y cantidades</h3>
              <div v-for="(ingredient,index) in ingredients" :key="index">
                <ul>{{ingredient}}</ul>
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </div>


  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-recipe',
    props: ['recipe'],
    mounted () {

    },
    data () {
      return {
        modalShow: false,
        drink:'',
        ingredients:[]
      }
    },
    methods: {

      async getRecipe(){
        this.modalShow = !this.modalShow;

        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.recipe.idDrink}`;

        let res = await this.axios.get(url);

        this.drink = res.data.drinks[0];

        this.showIngredients();

        console.log(url);

      },
      showIngredients(){
        for(let i = 1; i<16; i++){
          if(this.drink[`strIngredient${i}`]){
            let ingredient = this.drink[`strIngredient${i}`]+' ' +' '+ this.drink[`strMeasure${i}`];
            this.ingredients.push(ingredient);
          }
        }
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .card-title{
    text-align: center;
    font-size: 28px;
  }
  .card-text{
    font-size: 22px;
    text-align: center;
  }
  .card{
    display: flex;
  }
</style>
