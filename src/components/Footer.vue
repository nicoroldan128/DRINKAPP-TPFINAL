<template>
  <section class="src-components-footer">
    <div class="container-footer">
        <div class="container mr-5">
          <h1>Conocenos</h1>
          <p>Llegamos para simplificarte la vida y cuidar tu bolsillo.</p>
          <p>Somos la mejor alternativa para la compra de tus bebidas favoritas.</p>
        </div>
        
        <div class="container mr-1 ml-2">
          <div class="row">
            <h1>Nuestras Redes Sociales</h1>
          </div>
          <div class="row">
            <div class="col">   
              <div class="row">
                  <img src="icon/facebook.png">
                  <label>Seguinos en Facebook</label>
              </div>
              <div class="row">
                  <img src="icon/twitter.png">
                  <label>Seguinos en Twitter</label>
              </div>
              <div class="row">
                  <img src="icon/instagram.png">
                  <label>Seguinos en Instagram</label>
              </div>
            </div>      
            <div class="col">
              <div class="row">
                  <img src="icon/google-plus.png">
                  <label>Seguinos en Google+</label>
              </div>
              <div class="row">
                  <img src="icon/pinterest.png">
                  <label>Seguinos en Pinterest</label>
              </div>
            </div>
          </div>  
        </div>
        
        <div class="container">
          <h1>Información de Contacto</h1>
          <div class="row">
            <img src="icon/house.png">
            <label style="margin:1px">Av. del Libertador 1650, C.A.B.A. 
            </label>
          </div>
          <div class="row">
            <img src="icon/smartphone.png">
            <label> Tel: 011 - 4350-2000 / 2001 </label>
          </div>
          <div class="row">
            <img src="icon/contact.png">
            <label>email: atencionalcliente@drinkapp.com</label>
          </div>
        </div>
    </div>
     <div class="row2">
          <p><b>Copyright © 2021 DrinkApp. Todos los derechos reservados. BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.</b></p>
          <p>El uso de este sitio web implica la aceptación de los Términos y Condiciones y de las Políticas de Privacidad de DrinkApp.
Las fotos son a modo ilustrativo. La venta de cualquiera de los productos publicados está sujeta a la verificación de stock. Precios sujeto a cambios sin previo aviso.</p>
        </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-footer',
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
  .src-components-footer {

  }
  .container-footer {
    display: flex;
    margin: 0px;
    padding: 20px;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: black;
    color: white;
    width: 100%;
  }

  .container{
    margin-left: 40px;
    height: 220px;
  }

  .col{
    margin-right: 10px;
  }
  
  h1 {
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
  }

  .row{
    margin-left: -20px;
  }

  .row label{
    width: 80%;
    padding: 8px ;
 
  }

  .row img{
    width: 45px;
    height: 40px;
    margin-bottom: 15px;
  }
  .row2{
    text-align: center;
    font-family: sans-serif;
    background-color: rgb(128, 128, 128);
    color: white;
  }
  .row2 p{
    font-size: 10px;
    margin: 0px;
  }
  
</style>
