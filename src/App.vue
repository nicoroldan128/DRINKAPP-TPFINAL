<template>
  <div id="app">
    <Banner />
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Banner,
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
 
}

</style>
