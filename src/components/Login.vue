<template>

  <section class="src-components-login">
     <div class="p-3 mb-2  text-dark">
      <br>
      <h2 class="font text-center">¡Bienvenido! </h2>
      <br>
      <h5 class="font text-center" style="font-size: 35px">Podes iniciar tu sesión acá </h5>
      <br>
    <vue-form :state="formState" @submit.prevent="login()">
        <div class="container">                              
            <validate tag="div">
              <label for="email" >Email</label>
              <input 
              type="email" 
              name="email" 
              id="email"   
              class="form-control"
              v-model.trim="formData.email"
              placeholder="Ingresá tu correo electrónico"
              required
              autocomplete="off"
              
              >

            </validate>

            <validate tag="div">
              <label for="password" >Contraseña</label>
              <input 
              type="password" 
              name="password" 
              id="password"   
              class="form-control"
              v-model.trim="formData.password"
              required
              placeholder="Ingresá tu contraseña"
              autocomplete="off" 
              
              >

            </validate>

        </div>
      
        <button class="btn btn-success my-3 "  type="submit" :disabled="formState.$invalid" :class="getClass(formState.$invalid)" v-on:click="login()">Iniciar sesión</button>

                <!-- <pre>{{formData}}</pre> -->
      
      </vue-form>
    <!-- </div>  -->   
    </div>
   </section>

</template>

<script lang="js">

export default {
  name: 'src-components-login',
  components: {},
  props: [],
  data () {
    return {
      formData:this.getInitialData(),
      formState:{},
      email: '',
      password: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInitialData(){
      return {
        email:"",
        password:""

      }
    },
    getClass(invalido) {
        return [
            {
              'btn-secondary':invalido,
              'btn-success':!invalido
            }
        ]
    },
    login(){

      this.formData.email = ''
      this.formData.password = ''
      
    }
  }
}


</script>

<style scoped lang="css">
.src-components-login {
    background-color: #ffffff;
}

button{
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: 550px;
}

hr{
    background-color: #000000;
}
label{
    color: #020000;
}
pre{
    background-color: #ffffff;
    margin-top: 50px;
}
div{
    margin-bottom: 100px;
    margin-left: 150px;
    margin-right: 200px;
}
.alert-danger{
    margin-left: -150px;
    height: 3.5em;
    width:700px;
}
.font{
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
}

.form-control{
    height: 3.5em;
    width:700px;
} 
  

 
</style>
