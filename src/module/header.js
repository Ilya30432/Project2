const btnOpen = document.querySelector(".burger__open")
const btnClose = document.querySelector(".burger__close")
const nav = document.querySelector(".nav")


btnOpen.addEventListener("click",function(){
    nav.classList.add("active")
})
btnClose.addEventListener("click",function(){
    nav.classList.remove("active")
})