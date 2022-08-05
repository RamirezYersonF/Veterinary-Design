const menuMostrar = document.querySelector(".contenedor__mobile--menu");
const menuAbierto = document.querySelector(".contendor__abierto--menu");
const menuCerrar = document.querySelector(".contenedor__cierre--menu");
function toggleMenu() {
    menuMostrar.classList.toggle("menu__abierto--javascript");
};
menuAbierto.addEventListener("click",  toggleMenu);
menuCerrar.addEventListener("click",  toggleMenu);

const menuLinks = document.querySelectorAll('.contenedor__mobile--menu a[href^="#"]');

menuLinks.forEach(menuLinks =>{
    menuLinks.addEventListener("click", function(){
        menuMostrar.classList.remove("menu__abierto--javascript")
    })
});