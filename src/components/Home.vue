<template>

  <section class="src-components-home">
    <div class="p-3 mb-2 bg-light text-dark"> 
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-70" src="https://onlinelicor.es/wp-content/uploads/2021/03/ABSOLUT-WATERMELON.jpg" width="1900" height="520" alt="Absolut - edición especial">
          </div>
          <div class="carousel-item">
            <img class="d-block w-70"  src="https://gatopardo.com/wp-content/uploads/2020/10/cuervo-muertos.jpg" width="1900" height="520" alt="Jose Cuervo - edición especial">
          </div>
          <div class="carousel-item">
            <img class="d-block w-70" src="https://cdn.forbes.com.mx/2019/03/JW4A_1280.jpg" width="1900" height="520" alt="Johnnie walker - edición especial">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Siguiente</span>
        </a>
      </div>

      <div>
        <br>
        <h4 class="font text-left">Newsletter</h4>
        <br>
      </div>

      <div class="card-columns">
        <router-link to="/productos">
          <div class="card text-white text-right bg-dark mb-3" @click="irACatalogo()">
            <blockquote class="blockquote mb-0 card-body">
              <p><strong>Tenemos promociones para regalos empresariales</strong></p>
              <footer class="blockquote-footer">
                <small class="text-muted">
                  Consultá por promos para empresas <cite title="Source Title">Aquí</cite>
                </small>
              </footer> 
            </blockquote>
          </div>
            
          <div class="card" >
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_731395-MLA40281206226_122019-F.webp" class="card-img-top" alt="Promo4" >
          </div>
          
          <div class="card text-white bg-dark mb-3" style="max-width: 40rem;" >
            <img src="http://gastronomiars.com.br/wp-content/uploads/2021/02/Aperol-Spitz-foto.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center"><strong>Conocé las promos Aperol</strong></h5>
            </div>
          </div>

          <div class="card border-dark text-center p-3 " style="max-width: 40rem;" >
            <blockquote class="blockquote mb-0 mt-3">
              <p><strong>¡Tenemos ofertas de cerveza!</strong></p>
            </blockquote>
          </div>

          <div class="card" >
            <img src="https://http2.mlstatic.com/D_NQ_NP_794730-MLA43872318921_102020-O.webp" class="card-img" alt="...">
          </div>
          
          <div class="card text-center" >
            <img src="https://dmrqkbkq8el9i.cloudfront.net/Pictures/1024x536/4/7/1/182471_frxitalianwinekvlayouta4triomedium_539166_crop.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><strong>Especial Freixenet : Contactate para conocer las ofertas y medios de pago</strong></h5>
            </div>
          </div>

          <div class="card" >
            <div class="card-body">
              <h5 class="card-title"><strong>Fernet Branca con coca</strong>: ¡No nos olvidamos de los clásicos!</h5>
              <p class="card-text">Esta combinación no puede faltar en la mesa de cada casa</p>
              <p class="card-text"><small class="text-muted">Averiguá disponibilidad</small></p>
            </div>
          </div>

          <div class="card" >
            <img src="https://www.mendovoz.com/u/fotografias/m/2020/4/3/f1280x720-127798_259473_5050.jpg" class="card-img" alt="...">
          </div>
        </router-link>
        
      </div>
       
    </div>
    
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-home',
    props: [],
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
  .src-components-home {

  }
  .font{
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }

</style>
