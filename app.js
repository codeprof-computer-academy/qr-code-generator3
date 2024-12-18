

// logic to display the current year
document.querySelector(".year").innerHTML = new Date().getFullYear()

// logic to display nav
const menu_btn = document.querySelector(".menu-btn")

// target the nav
const nav_bar = document.querySelector("nav")

// add click event istener to the menu btn
menu_btn.addEventListener("click", function(){
          nav_bar.classList.toggle("show-nav")
          menu_btn.classList.toggle("change-menu-btn-bg")
})

// logic to generate qr code
const qr_image = document.querySelector(".qr-image")
// target the qr form
const qr_form = document.querySelector(".qr-form")
// add submit event listener to it
qr_form.addEventListener("submit", function(event){
        event.preventDefault()
         // generate the qr code
        let user_input = document.querySelector(".user-input").value
        let qr_image_url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_input}`
        qr_image.src = qr_image_url

      setTimeout(function(){
              // display the result section
        document.querySelector(".result").classList.add("show-result")
       
      }, 2000)
})