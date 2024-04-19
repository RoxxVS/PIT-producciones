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

function cambioUno() {
    prod1.style.gridArea = '1/1/2/2';
    prod4.style.gridArea = '2/1/4/3';
    prod6.style.gridArea = '1/3/3/4';
    prod10.style.gridArea = '5/4/6/5';
    prod12.style.gridArea = '4/2/6/4';
}
function cambioDos() {
    prod2.style.gridArea = '1/2/3/4';
    prod4.style.gridArea = '2/1/3/2';
    prod5.style.gridArea = '4/1/6/2';
    prod6.style.gridArea = '3/2/5/3';
    prod8.style.gridArea = '4/3/6/5';
    prod10.style.gridArea = '3/3/4/4';
    prod11.style.gridArea = '3/4/4/5';
    prod12.style.gridArea = '5/2/6/3';
}
function cambioTres() {
    prod1.style.gridArea = '1/1/3/3';
    prod2.style.gridArea = '1/3/2/4';
    prod4.style.gridArea = '2/3/3/4';
    prod5.style.gridArea = '2/4/4/5';
    prod6.style.gridArea = '3/1/5/2';
    prod8.style.gridArea = '3/3/4/4';
    prod10.style.gridArea = '4/3/6/5';
    prod11.style.gridArea = '5/1/6/2';
}



