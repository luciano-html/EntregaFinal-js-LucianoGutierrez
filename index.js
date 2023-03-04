class Usuario {
    constructor(nombre, contrasena, edad, dni) {
        this.nombre = nombre,
            this.contrasena = contrasena,
            this.edad = edad,
            this.dni = dni
    }
}

const usuario1 = new Usuario("luciano", "pepe", "26", "39570189")
const usuario2 = new Usuario("juan", "pepino", "28", "38814902")
const usuario3 = new Usuario("farid", "coco", "30", "48094898")
let validacion = false

function datos(Usuario) {
    const usuario = Usuario
    alert("Tu dni es " + usuario.dni+" y tu edad es "+usuario.edad +" años")
}


while (validacion == false) {
    const nombre = prompt('Ingrese su nombre')
    switch (nombre) {
        case "luciano":
            pass = prompt("Ingrese contraseña")
            if (pass === usuario1.contrasena) {
                alert("Contraseña correcta")
                datos(usuario1)
                validacion = true
            } else {
                alert("Contraseña incorrecta")
            }
            break;

        case "juan":
            pass = prompt("Ingrese contraseña")
            if (pass === usuario2.contrasena) {
                alert("Contraseña correcta")
                validacion = true
                datos(usuario2)
            } else {
                alert("Contraseña incorrecta")
            }
            break;

        case "farid":
            pass = prompt("Ingrese contraseña")
            if (pass === usuario3.contrasena) {
                alert("Contraseña correcta")
                datos (usuario3)
                validacion = true
            } else {
                alert("Contraseña incorrecta")
            }
            break;


        default:
            validacion = false
            alert("Usuario incorrecto")
            break;
    }
}








// class Usuario {
//     constructor(nombre, contrasena, edad, dni) {
//         this.nombre = nombre,
//             this.contrasena = contrasena,
//             this.edad = edad,
//             this.dni = dni
//     }
// }

// const Usuarios = [];

// function nuevosUsuarios() {

//     const nombre = prompt('Ingrese su nombre')
//     const contrasena = prompt('Ingrese su contraseña')
//     const edad = prompt('Ingrese su edad')
//     const dni = prompt('Ingrese su dni')
    
//     return new Usuario(nombre, contrasena, edad, dni)
// }

// let validacion = true

// function datos(Usuario) {
//     const usuario = Usuario
//     alert("Tu dni es " + usuario.dni + " y tu edad es " + usuario.edad + " años")
// }

// Usuarios.push (nuevosUsuarios())
// while (validacion == false) {
//     console.log(Usuarios.length)
//     for (let count = 0; count < Usuarios.lenght; count++) {
        
//         const nombre = prompt('Ingrese su nombre')
//         if (Usuarios[count].nombre == nombre) {
//             const pass = prompt('Ingrese su nombre')
//             if (Usuarios[count].contrasena == pass) {
//                 alert("Contraseña correcta")
//                 datos(Usuarios[count]);
//                 validacion = true;
//             }
//         } else {
//             alert("Datos incorrecta")
//         }
//     }
// }