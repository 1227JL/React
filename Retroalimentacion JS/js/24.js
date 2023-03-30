// Eventos del DOM - Click

// const clickHeading = ()=> {
//     console.log("Diste click en heading");
// }

const heading = document.querySelector('.heading')
heading.addEventListener('click', ()=>{
    heading.textContent = "Diste click en heading";
})


const enlaces = document.querySelectorAll(".navegacion a")

enlaces.forEach( enlace => {
    enlace.addEventListener('click', ()=>{
        console.log("Diste click en un enlace");
    })
})