
export default {
  name: 'src-components-login-formulario',
  components: {},
  props: [],
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
  computed: {

  },
  mounted () {

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

      let register = {
        name:this.formData.name,
        email:this.formData.email,
        password:this.formData.password,
        phone:this.formData.phone,
        direction:this.formData.direction,
        dateOfBirth:this.formData.fechaDeNacimiento
      }

      console.log(register);
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
  }
}


