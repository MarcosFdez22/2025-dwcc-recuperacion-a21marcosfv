
let todos = document.querySelectorAll(".faq-toggle")


  for (const element of todos) {
      element.addEventListener("click", () => {
        element.parentElement.classList.toggle("active")
    })
  }


    
