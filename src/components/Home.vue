<template>

  <section class="src-components-home">
    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="2000">
          <img src="icon/banner.png" class="d-block w-100">
        </div>
        <div class="carousel-item" data-interval="1000">
          <img src="icon/banner.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="icon/banner.png" class="d-block w-100">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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
  #carouselExampleInterval{
    height: 20px;
  }

</style>
