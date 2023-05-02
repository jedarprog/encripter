let encriptarMensaje = document.getElementById("btn-encrip");
encriptarMensaje.addEventListener('click', function () {
    let mensaje = document.getElementById("texto").value;
    let mensajeEncriptado = encriptar(mensaje);
    document.getElementById("encriptado").value = mensajeEncriptado;
});
let desencriptarMensaje = document.getElementById("btn-desencrip");
desencriptarMensaje.addEventListener('click', function () {
    let mensaje = document.getElementById("texto").value;
    let mensajeDesencriptado = desencriptar(mensaje);
    document.getElementById("encriptado").value = mensajeDesencriptado;
})


const titulo = document.querySelector(".titulo");
const mensaje = "ENCRIPTADOR JEDAR-PROGRAMMER";
let i = 0;

function escribirTitulo() {
    if (i < mensaje.length) {
        titulo.textContent += mensaje.charAt(i);
        i++;
        setTimeout(escribirTitulo, 100);
    } else {
        titulo.classList.add("escribir");
    }
}

escribirTitulo();