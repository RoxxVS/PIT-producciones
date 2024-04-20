/**Animación del catálogo*/
let prod1 = document.getElementById('prod1');
let prod2 = document.getElementById('prod2');
let prod3 = document.getElementById('prod3');
let prod4 = document.getElementById('prod4');
let prod5 = document.getElementById('prod5');
let prod6 = document.getElementById('prod6');
let prod7 = document.getElementById('prod7');
let prod8 = document.getElementById('prod8');
let prod9 = document.getElementById('prod9');
let prod10 = document.getElementById('prod10');
let prod11 = document.getElementById('prod11');
let prod12 = document.getElementById('prod12');
function cambiarUbicacion (prod, ubicacion) {
    prod.style.gridArea = ubicacion;
}
function cambioUno() {
    cambiarUbicacion(prod1, '1/1/2/2');
    cambiarUbicacion(prod2, '1/2/2/3');
    cambiarUbicacion(prod3, '1/4/2/5');
    cambiarUbicacion(prod4, '2/1/4/3');
    cambiarUbicacion(prod5, '2/4/4/5');
    cambiarUbicacion(prod6, '1/3/3/4');
    cambiarUbicacion(prod7, '3/3/4/4');
    cambiarUbicacion(prod8, '4/1/5/2');
    cambiarUbicacion(prod9, '5/1/6/2');
    cambiarUbicacion(prod10, '5/4/6/5');
    cambiarUbicacion(prod11, '4/4/5/5');
    cambiarUbicacion(prod12, '4/2/6/4');
}
function cambioDos() {
    cambiarUbicacion(prod1, '1/1/2/2');
    cambiarUbicacion(prod2, '1/2/3/4');
    cambiarUbicacion(prod3, '1/4/2/5');
    cambiarUbicacion(prod4, '2/1/3/2');
    cambiarUbicacion(prod5, '4/1/6/2');
    cambiarUbicacion(prod6, '3/2/5/3');
    cambiarUbicacion(prod7, '2/4/3/5');
    cambiarUbicacion(prod8, '4/3/6/5');
    cambiarUbicacion(prod9, '3/1/4/2');
    cambiarUbicacion(prod10, '3/3/4/4');
    cambiarUbicacion(prod11, '3/4/4/5');
    cambiarUbicacion(prod12, '5/2/6/3');
}
function cambioTres() {
    cambiarUbicacion(prod1, '1/1/3/3');
    cambiarUbicacion(prod2, '1/3/2/4');
    cambiarUbicacion(prod3, '1/4/2/5');
    cambiarUbicacion(prod4, '2/3/3/4');
    cambiarUbicacion(prod5, '2/4/4/5');
    cambiarUbicacion(prod6, '3/1/5/2');
    cambiarUbicacion(prod7, '3/2/4/3');
    cambiarUbicacion(prod8, '3/3/4/4');
    cambiarUbicacion(prod9, '4/2/5/3');
    cambiarUbicacion(prod10, '4/3/6/5');
    cambiarUbicacion(prod11, '5/1/6/2');
    cambiarUbicacion(prod12, '5/2/6/3');
}
function cambiosTodos() {
setTimeout(cambioUno, 1500);
setTimeout(cambioDos, 3000);
setTimeout(cambioTres, 4500);
setTimeout(cambioUno, 6000);
}
function bucle() {
    setInterval(cambiosTodos, 6000);
}
bucle();
/**Esconder/Mostrar historia */
let botonMostrar = document.getElementById('mostrarTexto');
let botonEsconder = document.getElementById('esconderTexto');
let textoOculto = document.getElementById('textoOculto');
botonMostrar.addEventListener('click', mostrarTextoOculto);
function mostrarTextoOculto() {
    textoOculto.style.display = 'block';
    botonMostrar.style.display = 'none';
}
botonEsconder.addEventListener('click', esconderTextoOculto);
function esconderTextoOculto() {
    textoOculto.style.display = 'none';
    botonMostrar.style.display = 'inline-block';
}



