let ul = document.getElementById("ul")
let menu = document.getElementById("menu")
let menuoff = document.getElementById("menuoff")
let night = document.getElementById("night")
let logo = document.querySelector(".logo")
let day = document.getElementById("day")
let a1 = document.querySelector(".a1")
let a2 = document.querySelector(".a2")
let a3 = document.querySelector(".a3")
let a4 = document.querySelector(".a4")
let navbar = document.querySelector(".navbar")


menu.addEventListener("click",()=>{
    logo.style.display = "none";
    menu.style.display = "none";
    night.style.display = "none";
    menuoff.style.display = "block";
    ul.style.display = "flex";
    day.style.display = "none";

})

menuoff.addEventListener("click",()=>{
    logo.style.display = "block";
    menu.style.display = "flex";
    night.style.display = "block";
    menuoff.style.display = "none";
    ul.style.display = "none";

})

night.addEventListener("click",()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    night.style.display = "none";
    day.style.display = "block";
    a1.style.color = "white";
    a2.style.color = "white";
    a3.style.color = "white";
    a4.style.color = "white";
    navbar.style.backgroundColor = "black";


})

day.addEventListener("click",()=>{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    night.style.display = "block";
    day.style.display = "none";
    a1.style.color = "black";
    a2.style.color = "black";
    a3.style.color = "black";
    a4.style.color = "black";
    navbar.style.backgroundColor = "white";
})


setTimeout(function() {
    document.querySelector('.loader-container').style.display = 'none';
  }, 2000);

  