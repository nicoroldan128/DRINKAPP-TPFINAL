<template>

  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark" style="padding: 20px">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/">
            <a class="nav-link" href="#">Home</a>
          </router-link>
          <router-link to="/productos">
            <a class="nav-link ml-3" href="#">Productos</a>
          </router-link>
          <router-link to="/recetas">
            <a class="nav-link ml-3" href="#">Recetas</a>
          </router-link>
          <router-link to="/formulario">
            <a class="nav-link ml-3" href="#">Log In</a>
          </router-link>
          <router-link to="/carrito">
            <a class="nav-link ml-3" href="#">Carrito <b-icon icon="cart3"></b-icon></a>
          </router-link>
        </div>
      </div>
    </nav>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
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
  .src-components-navbar {
     
  }
  .navbar-nav {

    position: absolute;
    left: 50%;
    transform: translatex(-50%);
  }  
</style>
