let menuHamburguesa = document.getElementById("menu-hamburguesa");
let containerMenu = document.getElementById("container-menu-desplegable");

menuHamburguesa.addEventListener("click", () => {
    menuHamburguesa.classList.toggle("active");
    containerMenu.classList.toggle("active");
});
