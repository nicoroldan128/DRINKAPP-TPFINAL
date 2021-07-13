<template>

 
<section class="src-components-login-formulario">
      <br>
      <h5 class="font text-center" style="font-size: 40px">Check Out</h5>
      <h5 class="font text-center" style="font-size: 25px">Ingresa tus datos</h5>

      <vue-form :state="formState" @submit.prevent="enviar()">
        <div class="container">
            <validate tag="div" >
              <label for="name" ><strong>Nombre Completo</strong></label>
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
              <label for="email"><strong>Email</strong></label>
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
              <label for="phone"><strong>Telefono de Contacto</strong></label>
              <input 
              type="tel" 
              name="phone" 
              id="phone"   
              class="form-control"
              v-model.trim="formData.tel"
              required              
              >
              <field-messages name="phone" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">Campo requerido</div>
              </field-messages>
            </validate>
            
            <validate tag="div">
              <label><strong>Metodo de Pago</strong></label>
              <input 
              type="radio" 
              name="payMethod" 
              value="efectivo"
              checked
              style="margin-left: 20px"
              > 
              <label style="margin-left: 10px">Efectivo</label>
            </validate>
        </div>

        <div class="table-responsive">
            <table class="table">
              <h5 class="font text-center" :style="{'font-size': '30px', 'margin-top' : '20px'}">Detalle Productos</h5>
              <tr class="bg-dark text-white">
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Precio Total</th>
              </tr>
              <tr class="bg-white text-black" v-for="(producto) in mostrarCarrito" :key="producto.producto._id">
                <td>{{ producto.producto.name}}</td>
                <td style="text-align: -webkit-center">{{ producto.cant}}</td>
                <td id="dinero">$ {{ producto.producto.price}}</td>
                <td id="dinero">$ {{ producto.producto.price * producto.cant}}</td>
              </tr>
              <tr class="bg-dark text-white">
                <th></th>
                <th></th>
                <th id="dinero">Total a Pagar</th>
                <th id="dinero">${{this.calcularTotal(mostrarCarrito)}}</th>
              </tr>
            </table>   
        </div>    

        <div style="width: fit-content">
          <button class="btn margin-right" type="submit" :disabled="formState.$invalid" :class="getClass(formState.$invalid)" v-on:click="enviar()">Confirmar Compra</button>

          <router-link to="/productos">
              <button class="btn btn-link margin-left" type="submit">Seguir Comprando</button>
          </router-link>
          
        </div>

      </vue-form>
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
        nameMax:40
      }
    },
    methods: {
      getInitialData(){
        return {
          name:"",
          email:"",
          phone:"",
        }
      },
      
      getClass(invalido) {
          return [
              {
                'btn-secondary':invalido,
                'btn-info':!invalido
              }
          ]
      },
      calcularTotal(mostrarCarrito){
        var sumaProductos=0
        mostrarCarrito.forEach(producto => {
          var price= (producto.producto.price * producto.cant)
          sumaProductos+=price
        });
        return sumaProductos
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
.container{
  max-width: 620px;
}

label{
    color: #020000;
    margin-top: 20px;
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
.table{
  width: fit-content;
  margin:auto;
} 
#dinero{
  text-align: -webkit-right;
}


</style>