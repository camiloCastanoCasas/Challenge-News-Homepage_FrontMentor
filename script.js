const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    const navegacion = document.querySelector(".navegacion");
    const body = document.querySelector("body");
    navegacion.classList.toggle("active");
    body.classList.toggle("fijar-body");
});