

var btnElm = document.getElementById('btnClick');
var btnClear = document.getElementById('btnClear');
var pElm = document.getElementById('contarClick');
var sect = document.getElementById('sect');
var btnPag = document.getElementById('buttonClick');
var contar = 0;

const sbg = function () {
    const randColor = Math.floor(Math.random() * 16777215).toString(16);
    sect.style.backgroundColor = "#" + randColor;
}

pElm.textContent = 0;

btnElm.onclick = function () {
    contar++;
    pElm.textContent = contar;
    sbg();
}

btnClear.onclick = function () {
    pElm.textContent = 0;
    contar = 0;
    sect.style.backgroundColor = "white";
}


btnPag.onclick = function () {
    window.location = "home.html";
}


