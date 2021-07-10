<template>

  <section class="src-components-banner">
    <div id="banner" align="center">
      <img alt="Drink logo" src="../assets/logo.jpg" width="580" height="220" >
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-banner',
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
  .src-components-banner {


  }

  #banner{
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0a0e0a+9,ffffff+31,ffffff+72,0a0809+92 */
    background: rgb(10,14,10); /* Old browsers */
    background: -moz-linear-gradient(left,  rgba(10,8,9,1) 9%, rgba(255,255,255,1) 31%, rgba(255,255,255,1) 72%, rgba(10,8,9,1) 92%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(10,8,9,1) 9%,rgba(255,255,255,1) 31%,rgba(255,255,255,1) 72%,rgba(10,8,9,1) 92%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(10,8,9,1) 9%,rgba(255,255,255,1) 31%,rgba(255,255,255,1) 72%,rgba(10,8,9,1) 92%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0a0809', endColorstr='#0a0809',GradientType=1 ); /* IE6-9 */

  }
</style>
