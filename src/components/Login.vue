<template>

  <section class="src-components-login">
     <div class="p-3 text-dark">
      <br>
      <h2 class="font text-center">¡Bienvenido! </h2>
      <br>
      <h5 class="font text-center" style="font-size: 35px">Podes iniciar tu sesión acá </h5>
      <br>
    <div>
    
    </div>  
    <vue-form :state="formState" @submit.prevent="login()">
        <div class="container" style="width: fit-content">                              
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
              <label class="mt-3" for="password" >Contraseña</label>
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

          <br>
          <div style="width: fit-content">
            ¿No sos Usuario? <router-link to="/formulario">
            <a href="#"> Registrate aquí</a>
            </router-link>
             <button class="btn btn-success" style="margin-left: 40px" type="submit" :disabled="formState.$invalid" :class="getClass(formState.$invalid)" v-on:click="login()">Iniciar sesión</button>
          </div>
          <div style="margin-bottom: 70px"></div>
          
        </div>
      </vue-form>
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

hr{
    background-color: #000000;
}
label{
    color: #020000;
}

div{
  display: block;
  align-self: center;

}

.font{
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
}

.form-control{
    height: 2.5em;
    width: 400px;
} 
  

 
</style>
