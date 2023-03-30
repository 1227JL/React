// Eventos del DOM - Inputs


const inputNombre = document.querySelector(".nombre")
// inputNombre.type = "password"
// inputNombre.placeholder = "password"

inputNombre.addEventListener("input", (e)=>{
    console.log(e.target.value);
    console.log("Escribiendo en el input");
    console.log(inputNombre.value);
})

const inputPassword = document.querySelector(".password")
inputPassword.addEventListener("input", funcionPassword)

function funcionPassword(e){
    inputPassword.type = 'text';
    setTimeout(()=>{
        inputPassword.type = 'password';
    }, 50)
}

// inputNombre.addEventListener("keydown", ()=>{
//     console.log("Presionando alguna tecla en el input en el input");
// })

// inputNombre.addEventListener("keyup", ()=>{
//     console.log("Dejando de presionar alguna tecla en el input en el input");
// })