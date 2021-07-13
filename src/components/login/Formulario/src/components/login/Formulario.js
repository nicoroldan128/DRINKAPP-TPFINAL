
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
      phoneMin: 1,
      phoneMax:10000000000,
      ageMax:120,
      ageMin:18,
      contraseniaMin:8,
      postUrl:'https://drinkapparg.herokuapp.com/api/clients'
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

      let register = {
        fullName:this.formData.name,
        email:this.formData.email,
        password:this.formData.password,
        phone:this.formData.phone,
        direction:this.formData.direction,
        dateOfBirth:this.formData.fechaDeNacimiento
      }

      console.log(register);
      this.postUser(register);
      this.formData=this.getInitialData()
      this.formState._reset()
    },
    postUser(data){
        this.axios.post(this.postUrl,data)
        .then(res => console.log(res))
        .catch(error => console.log(error))     
    }
  }
}


