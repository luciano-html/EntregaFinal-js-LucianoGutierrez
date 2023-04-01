class User {
    constructor(name, lastName) {
        this.name = name,
            this.lastName = lastName
    }
}

const users = []
users.push(new User("luciano", "gutierrez"))
const btnSwitch = document.getElementById("flexSwitch")
const span = document.getElementById("span")
let boolSwitch = false

if(localStorage.getItem("login")){
    const datosUsuario = JSON.parse(localStorage.getItem("login"))
    const spanHeader = document.getElementById("spanHeader")
    spanHeader.innerText = `Sesion Iniciada de ${datosUsuario.name} ${datosUsuario.lastName}`
}

function login() {
    const name = document.getElementById("nombre")
    const lastName = document.getElementById("apellido")
    const submit = document.getElementById("submit")
    let obj = users.find((e) => e.name === name.value)
    
    if (obj) {
        if (lastName.value === obj.lastName) {
            span.innerText = `Bienvenido ${obj.name} ${obj.lastName} !`   
            return obj
        }
    } else {
        span.innerText = `Usuario u Contrasena incorrecta !`
        return undefined
    }
}

function register(){
    const name = document.getElementById("nombre")
    const lastName = document.getElementById("apellido")
    const submit = document.getElementById("submit")
    let obj = users.find((e) => e.name === name.value)

    if (obj) {
        span.innerText = `El nombre de usuario ya existe`
    } else {
        users.push(new User(name.value, lastName.value))
        span.innerText = `Usuario ${name.value} creado con exito !`
    }
}

submit.onclick = (e) => {
    e.preventDefault(e)
    boolUserRegister = false
    if(boolSwitch){
        register()
    }else{
        obj = login()
        if(obj){
            localStorage.setItem("login",JSON.stringify(obj))
        }
    }
}

btnSwitch.onclick = () => {
    let title = document.getElementById("tituloJS");
    let sub = document.getElementById("submit")
    span.innerText = ``
    if (boolSwitch) {
        boolSwitch = false
        title.innerText = `Inicio de Sesion`;
        sub.value = "Iniciar sesion"
    } else {    
        boolSwitch = true
        title.innerText = `Registro`;
        sub.value = "Registrar"
    }
}