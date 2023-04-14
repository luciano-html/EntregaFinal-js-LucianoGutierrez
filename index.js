class User {
    constructor(name, lastName) {
        this.name = name,
            this.lastName = lastName
    }
}

const users = [
    {
        name: "papu",
        lastName: "ome" 

    }
]
users.push(new User("luciano", "gutierrez"))
const btnSwitch = document.getElementById("flexSwitch")
const span = document.getElementById("span")
let boolSwitch = false

if(localStorage.getItem("login")){
    const datosUsuario = JSON.parse(localStorage.getItem("login"))
    const spanHeader = document.getElementById("spanHeader")
    spanHeader.innerText = `Sesion Iniciada de ${datosUsuario.name} ${datosUsuario.lastName}`
}
async function api (){
    try {
        const peticion = await fetch("https://apimocha.com/lucianohtml/users",)
        const depuracion = await peticion.json()
        const graduados = document.getElementById("pGraduados")
        
        console.log(depuracion)
        depuracion.forEach((depuracion) => {
            const li = document.createElement("li")
            li.innerHTML = `<h5">${depuracion.name} ${depuracion.lastName}</h5>`
            graduados.append(li)
        });
        

        
        
        
    } catch (error) {
        console.log(error)
    }    
}
api()

function login() {
    const name = document.getElementById("nombre")
    const lastName = document.getElementById("apellido")
    const submit = document.getElementById("submit")
    let obj = users.find((e) => e.name === name.value)
    
    if (obj) {
        if (lastName.value === obj.lastName) {
            Swal.fire({
                title: `Bienvenido ${obj.name} ${obj.lastName} !`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }) 
            return obj
        }
    } else {
        Swal.fire({
            title: 'Usuario o contraseña incorrecta',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
        return undefined
    }
}

function register(){
    const name = document.getElementById("nombre")
    const lastName = document.getElementById("apellido")
    const submit = document.getElementById("submit")
    const lista =document.getElementById("lista")

    let obj = users.find((e) => e.name === name.value)

    if (obj) {
        Swal.fire({
            title: 'Nombre de usuario ya existe',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    } else {
        users.push(new User(name.value, lastName.value))
        // const Swal = require('sweetalert2')
        Swal.fire({
            title: 'Cuenta creada',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
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
        }``
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








