<template>

  <section class="formulario">
    <div class="jumbotron">
       <h2 class="font text-center">¡Bienvenido! </h2>
      <br>
      <h5 class="font text-center" style="font-size: 35px">Podes iniciar tu sesión acá </h5>
      <hr>
      <br>
      <vue-form :state="formState" @submit.prevent="enviar()">
        <div>
            <validate tag="div">
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
              type="text" 
              name="fechaDeNacimiento" 
              id="fechaDeNacimiento"   
              class="form-control"
              v-model.trim="formData.fechaDeNacimiento"
              required
              :minlength="fechaMinMax"
              :maxlength="fechaMinMax"
              autocomplete="off"
              >
              <field-messages name="fechaDeNacimiento" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Campo requerido</div>
                <div slot="minlength" class="alert alert-danger mt-2">
                  Ingrese al menos {{this.nameMin}} caracteres
                </div>
                <div v-if="formData.fechaDeNacimiento.length < fechaMinMax" class="alert alert-warning mt-2">
                  Ingrese menos de {{this.fechaMinMax}} caracteres
                </div>
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
              <field-messages name="email" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Campo requerido</div>
                <div slot="email" class="alert alert-danger mt-2">Email invalido</div>
              </field-messages>
            </validate>

            
            <validate tag="div">
              <label for="medioDePago" >Medio de Pago</label>
              <input 
              type="medioDePago" 
              name="medioDePago" 
              id="medioDepago"   
              class="form-control"
              v-model.trim="formData.medioDePago"
              required
              autocomplete="off"
              >
              <field-messages name="medioDeaPago" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Campo requerido</div>
              </field-messages>
            </validate>  
        </div>
        <button class="btn margin-right" type="submit" :disabled="formState.$invalid" :class="getClass(formState.$invalid)" v-on:click="enviar()">Finalizar compra </button>

         <button class="btn margin-left" type="submit" :disabled="formState.$invalid" :class="getClass(formState.$invalid)" >Ir al carrito</button>
        <!-- <pre>{{formData}}</pre> -->
      
      </vue-form>
    </div>    
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
        fechaMinMax: 10,
        dniMinMax: 8,
        ageMax:120,
        ageMin:18,
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
    }
}
</script>

<style scoped lang="css">
.jumbotron{
  background-color: #fffff6;
}
.margin-left{
    margin-left: 400px !important;
}
.margin-right{
    margin-left: 400px !important;
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
}
</style>