<template>

  <section class="src-components-formulario">
    <!-- <div class="jumbotron"> -->
      <br>
      <h5 class="font text-center" style="font-size: 35px">Bienvenido {{formData.name | primerLetramayuscula(formData.name)}}</h5>
      <br>
      <h5 class="font text-center" style="font-size: 35px">Podes registrarte acá</h5>
      <br>
      <h5 class="font text-center" style="font-size: 30px">Ingresa tus datos</h5>
      <br>
      <vue-form :state="formState" @submit.prevent="enviar()">
        <div class="container">
            <validate tag="div" >
              <label for="name" >Nombre</label>
              <input 
              type="text" 
              name="name" 
              id="name"   
              class="form-control"
              v-model.trim="formData.name"
              required
              :minlength="nameMin"
              :maxlength="nameMax"
              autocomplete="off"
              
              >
              <field-messages name="name" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2 ml-1">Campo requerido</div>
                <div slot="minlength" class="alert alert-danger mt-2">
                  Ingrese al menos {{this.nameMin}} caracteres
                </div>
                <div v-if="formData.name.length == nameMax" class="alert alert-warning mt-2">
                  Ingrese menos de {{this.nameMax}} caracteres
                </div>
              </field-messages>
            </validate>

          <validate tag="div">
              <label for="apellido" >Apellido</label>
              <input 
              type="text" 
              name="apellido" 
              id="apellido"   
              class="form-control"
              v-model.trim="formData.apellido"
              required
              :minlength="nameMin"
              :maxlength="nameMax"
              autocomplete="off"
              
              >
              <field-messages name="apellido" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Campo requerido</div>
                <div slot="minlength" class="alert alert-danger mt-2">
                  Ingrese al menos {{this.nameMin}} caracteres
                </div>
                <div v-if="formData.name.length == nameMax" class="alert alert-warning mt-2">
                  Ingrese menos de {{this.nameMax}} caracteres
                </div>
              </field-messages>
            </validate>

            <validate tag="div">
              <label for="apellido" >DNI</label>
              <input 
              type="text" 
              name="dni" 
              id="dni"   
              class="form-control"
              v-model.trim="formData.dni"
              required
              :minlength="dniMinMax"
              :maxlength="dniMinMax"
              autocomplete="off"
              >
              <field-messages name="dni" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Campo requerido</div>
                <div slot="minlength" class="alert alert-danger mt-2">
                  Ingrese al menos {{this.dniMinMax}} caracteres
                </div>

              </field-messages>
            </validate>

          
            <validate tag="div">
              <label for="fechaDeNacimiento" >Fecha de nacimiento</label>
              <input 
              type="date" 
              name="fechaDeNacimiento" 
              id="fechaDeNacimiento"   
              class="form-control"
              v-model.trim="formData.fechaDeNacimiento"
              required
              autocomplete="off"
              
              >
              <field-messages name="fechaDeNacimiento" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Ingrese la fecha dd-mm-aaaa</div>
              </field-messages>
            </validate>
            
          
            <validate tag="div">
              <label for="age" >Edad</label>
              <input 
              type="number" 
              name="age" 
              id="age"   
              class="form-control"
              v-model.number="formData.age"
              required
              :min="ageMin"
              :max="ageMax"
              autocomplete="off"
              
              >
              <field-messages name="age" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Campo requerido</div>
                <div slot="min" class="alert alert-danger mt-2">
                  La edad minima es de {{ageMin}}
                </div>
                <div slot="max" class="alert alert-danger mt2">
                  La edad maxima es de {{ageMax}}
                </div>
              </field-messages>
            </validate>
            
            
            <validate tag="div">
              <label for="email" >Email</label>
              <input 
              type="email" 
              name="email" 
              id="email"   
              class="form-control"
              v-model.trim="formData.email"
              required
              autocomplete="off"
              
              >
              <field-messages name="email" show="$dirty" >
                <div slot="required" class="alert alert-danger">Campo requerido</div>
                <div slot="email" class="alert alert-danger mt-2">Email invalido</div>
              </field-messages>
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
              :min="contraseniaMin"
              autocomplete="off" 
              
              >
              <field-messages name="password" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Ingrese una contraseña. La misma tiene que contener una mayúscula, un número y un símbolo (!#$%&/)</div>
                <div slot="min" class="alert alert-danger mt-2">
                  Ingrese al menos {{this.contraseniaMin}} caracteres
                </div>                
              </field-messages>
            </validate>
        </div>
        <button class="btn margin-right" type="submit" :disabled="formState.$invalid" :class="getClass(formState.$invalid)" v-on:click="enviar()">Finalizar registro </button>

         <button class="btn margin-left" type="submit" :disabled="formState.$invalid" :class="getClass(formState.$invalid)" >Ir al carrito</button>
        <!-- <pre>{{formData}}</pre> -->
      
      </vue-form>
    <!-- </div>  -->   
  </section>

</template>

<script>
  export default  {
    name: 'formulario',
    props: [],
    mounted () {
    },
    data () {
      return {
        formData:this.getInitialData(),
        formState:{},
        nameMin:3,
        nameMax:15,
        /* fechaMinMax: 10, */
        dniMinMax: 8,
        ageMax:120,
        ageMin:18,
        contraseniaMin:8,
        postUrl:'https://60b6e23917d1dc0017b8878b.mockapi.io/usuarios'
      }
    },
    methods: {
      getInitialData(){
        return {
          name:"",
          apellido:"",
          dni: "",
          fechaDeNacimiento: "",
          age:"",
          email:"",
          metodoDePago:"",
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

        enviar(){
        console.log({...this.formData})
        this.postUser(this.formData)
        this.formData=this.getInitialData()
        this.formState._reset()
      },
      async postUser(data){
        try {
          console.log(data);
          await this.axios.post(this.postUrl,data,{'content-type':'application/json'})      
        } catch (error) {
          console.error(error);
        }
      }
    }, 
    computed: {
    },
    filters:{
      primerLetramayuscula: function (value) {
      if (!value) return ''
      value = value.toString()  
      return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
}
</script>

<style scoped lang="css">

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
  margin-bottom: 30px;
  margin-left: 300px;
}
.alert-danger{
  margin-left: -300px;
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

.src-components-formulario{
  background-color: #e0e1e2;
}

</style>
