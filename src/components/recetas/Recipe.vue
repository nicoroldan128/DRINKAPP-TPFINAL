<template>

  <section class="Recipe">
    <div class="card border-dark mb-3" style="max-width: 20rem;">
      <img class="card-img-top" :src="recipe.strDrinkThumb" :style="{width:'285px', borderRadius:'15px'}" alt="imagen receta">
      <div class="card-body">
        <h5 class="card-title"><b>{{recipe.strDrink}}</b></h5>

        <div>
          <b-button block variant="info" @click="getRecipe">Ver Receta</b-button>

          <b-modal v-model="modalShow" hide-footer>
            <div>
              <b-card-title><h3>{{this.drink.strDrink}}</h3></b-card-title>
              <img class="card-img-top" :src="drink.strDrinkThumb" :style="{width:'285px', borderRadius:'20px', 'margin-left': '90px'}"/>
              <b-card-title>
                <h3 class="mt-2">Instrucciones</h3>
              </b-card-title>
              <p :style="{margin: '10px'}">{{this.drink.strInstructions}}</p>
              <br>
               <b-card-title>
                <h4>Ingredientes y cantidades</h4>
              </b-card-title>
              <div class="card-text" v-for="(ingredient,index) in ingredients" :key="index">
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
    font-size: 20px;
  }
  .card-text{
    font-size: 18px;
    text-align: center;
    margin-left: -40px;
  }
  .card{
    display: flex;

  }
   .card-img-top{
    height: 25vh;
    margin: 16px;
    margin-bottom: -10px;
  }

  
</style>
