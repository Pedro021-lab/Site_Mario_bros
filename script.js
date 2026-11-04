const formulario = document.querySelector('form')
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    formulario.style.transition = "1s";
    mascara.style.visibility = "visible";
    mascara.style.transition = "1s";
}

function esconderForm() {
    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)";
    formulario.style.transition = "1s";
    mascara.style.visibility = "hidden";
    mascara.style.transition = "0.7s";
}