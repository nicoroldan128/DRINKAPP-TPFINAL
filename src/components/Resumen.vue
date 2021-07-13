<template>

 
<section class="src-components-login-formulario">
      <br>
      <h5 class="font text-center" style="font-size: 35px">Check Out {{formData.name | primerLetramayuscula}}</h5>
      <h5 class="font text-center" style="font-size: 30px">Ingresa tus datos</h5>

      <vue-form :state="formState" @submit.prevent="enviar()">
        <div class="container">
            <validate tag="div" >
              <label for="name" >Nombre Completo</label>
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
              <label for="direccion">Direccion</label>
              <input 
              type="text" 
              name="direccion" 
              id="direccion"   
              class="form-control"
              v-model.trim="formData.direccion"
              required
              :minlength="nameMin"
              autocomplete="off"
              
              >
              <field-messages name="apellido" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Campo requerido</div>
                <div slot="minlength" class="alert alert-danger mt-2">
                  Ingrese al menos {{this.nameMin}} caracteres
                </div>
              </field-messages>
            </validate>
          
            <validate tag="div">
              <label for="fechaDeNacimiento" >Fecha de Retiro</label>
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
              <label for="email" >Metodo de Pago</label>
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

        </div>

        <div style="width: fit-content">
          <button class="btn margin-right" type="submit" :disabled="formState.$invalid" :class="getClass(formState.$invalid)" v-on:click="enviar()">Registrarme </button>

          <button class="btn margin-left" type="submit" :disabled="formState.$invalid" :class="getClass(formState.$invalid)" >Ir al carrito</button>

        </div>

        
      
      </vue-form>

    <div class="table-responsive">
        <table class="table">
          <tr class="bg-success text-white">
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
          <tr class="bg-info text-white" v-for="(producto, index) in mostrarCarrito" :key="index">
            <td>
              <img :src="producto.producto.imagen" width="50" />
            </td>
            <td>{{ producto.producto.name}}</td>
            <td>{{ producto.cant}}</td>
            <td>{{ producto.producto.price}}</td>
            <td>{{ producto.producto.price * producto.cant}}</td>
          </tr>
        </table>
    </div>    
  
  
  
  
  
  </section>

</template>

<script>
  export default  {
    name: 'resumen',
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
    }
}
</script>

<style scoped lang="css">
.src-components-login-formulario {
    background-color: #e0e1e2;
}

button{
    margin-top: 20px;
    margin-bottom: 50px;
    margin-left: 10px;
    margin-right: 50px;

}

hr{
    background-color: #000000;
}
label{
    color: #020000;
    margin-top: 5px;
}

div{
    display:block;
    margin:auto;
  
}
.alert-danger{
    display:block;
    margin:auto;
}
.font{
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
}

.form-control{
    display:block;
    margin:auto;
} 
  


</style>