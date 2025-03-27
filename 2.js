let container = document.querySelector(".container")
let todospanel = document.querySelectorAll(".panel")
console.log(todospanel)

function cambiar(event) {
    let panel = event.target
   
    if (panel.className == "container") {
          console.log("NOO")
    } else {
         for (const element of todospanel) {
        element.className="panel"
    }
        panel.className = "panel active"
    }
    
}
container.addEventListener('click', cambiar);