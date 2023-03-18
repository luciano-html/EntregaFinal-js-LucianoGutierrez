// Creamos un objeto constructor llamado "User" para guardar los imputs del usuario (nombre === name, contraseña === pass)
class user {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }
}

// Creamos un array donde se iran guardando los objetos
const users = []

// Inicia el bucle
const validacion = true
while (validacion !== false) {

    console.log(users)
    const elegir = +prompt("Pulse 1 para crear cuenta o pulse 2 para iniciar sesion")

    if (elegir === 1) {

        const name = prompt("Ingrese un nombre")
        const pass = prompt("Ingrese una contraseña")
        alert("Cuenta Creada")
        users.push(new user(name, pass)); // Pusheamos el imput name y pass para guardarlos en el objeto constructor "User"


    } else if (elegir === 2) {

        const name = prompt('Ingrese su nombre');
        let obj = users.find((e) => e.name === name) //Buscamos un objeto cuyo nombre se encuentre en el array "users"


        if (obj !== undefined) {
            const pass = prompt('Ingrese su contraseña')

            if (obj.pass === pass) {
                alert('Ingresaste!');
            } else {
                alert('Contraseña invalida');
            }


        } else {
            alert('Usuario no encontrado')
        }


    } else {
        alert("Opcion incorrecta")
        break
    }
}

