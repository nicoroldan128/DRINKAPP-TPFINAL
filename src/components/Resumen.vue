<template>

 
<section class="src-components-login-formulario">

      <div style="width: fit-content" v-if="ticket !== ''"> 

        <br>     
        <h1>Tu compra se realizo con Exito</h1> 
        <br>
        <h2>N° de Compra: {{this.ticket}}</h2>
        <br>
        <h5>Ya Poder retirar tu compra</h5>
        <br>
        <router-link to="/">
            <button class="btn btn-link margin-left" type="submit" @click="vaciarCarrito">Volver a Home</button> 
        </router-link>
          

     </div>
   <div v-else>

      <br>
      <h5 class="font text-center" style="font-size: 40px">Check Out</h5>
      

     <div v-if="usuario !== null">

       <h1 class="font text-center">Buen día {{usuario.user.fullName}}</h1>

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
          <button class="btn margin-right" type="submit" :class="getClass(formState.$invalid)" v-on:click="send()">Confirmar Compra</button>

          <router-link to="/productos">
              <button class="btn btn-link margin-left" type="submit">Seguir Comprando</button>
          </router-link>
          
        </div>
     </div>

     <div v-else>
     
       <h5 class="font text-center" style="font-size: 25px">Ingresa tus datos</h5>
       <br/>
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
              type="number" 
              name="phone" 
              id="phone"   
              class="form-control"
              v-model.trim="formData.phone"
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
  
    </div>
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
        nameMax:40,
        sale:{
          client:'',
          salesPrice:'',
          payMethod:'',
          products:[]
        },
        postUrl:'https://drinkapparg.herokuapp.com/api/sales',
        productsCart:[],
        productOnCart:{
          name:'',
          price:'',
          description:'',
          brand:'',
          category:'',
          alcohol:''
        },
        ticket:'',
        updateProducts:[],
        usuario:JSON.parse(localStorage.getItem('user'))
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
        this.addProductsCart(this.mostrarCarrito);
        this.sale = {
          client:this.formData.name,
          salesPrice:this.calcularTotal(this.mostrarCarrito),
          payMethod:'Efectivo',
          products:this.productsCart
        }
        this.postSale(this.sale);

        this.updateProductsCart(this.updateProducts);

        console.log(this.updateProducts);
        this.formData=this.getInitialData()
        this.formState._reset()

        localStorage.removeItem('carrito');
      },
      send(){
        this.addProductsCart(this.mostrarCarrito);
        this.sale = {
          client:this.usuario.user.fullName,
          salesPrice:this.calcularTotal(this.mostrarCarrito),
          payMethod:'Efectivo',
          products:this.productsCart
        }
        this.postSale(this.sale);

        this.updateProductsCart(this.updateProducts);

        localStorage.removeItem('carrito');
      },
      postSale(sale){
        this.axios.post(this.postUrl,sale)
        .then(res => this.ticket = res.data.insertedId)
        .catch(error => console.log(error));      
      },
      addProductsCart(mostrarCarrito){
        mostrarCarrito.forEach(product => {
          this.productOnCart={
            name:product.producto.name,
            price:product.producto.price,
            description:product.producto.description,
            brand:product.producto.brand,
            category:product.producto.category,
            alcohol:product.producto.alcohol
          };
          let productStock={
            id:product.producto._id,
            product:{
              name:product.producto.name,
              price:product.producto.price,
              description:product.producto.description,
              brand:product.producto.brand,
              category:product.producto.category,
              stock:product.producto.stock - product.cant,
              image:product.producto.image,
              alcohol:product.producto.alcohol
            }
          };
          this.updateProducts.push(productStock);
          this.productsCart.push(this.productOnCart);
        })
      },
      updateProductsCart(productsCart){
        productsCart.forEach(productCart => {
          console.log(productCart.id);
          let productUrl = `https://drinkapparg.herokuapp.com/api/products/${productCart.id}`;
          this.axios.put(productUrl,productCart.product)
          .then(res => console.log(res))
          .catch(error => console.log(error))
        })
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