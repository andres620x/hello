/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var btnBack = document.getElementById('backbutton');

var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
});


btnBack.onclick = function () {

    window.location = "index.html";
}

function callAcerca()
{
    window.location = "about.html";
}


function callSintaxis()
{
    window.location = "sintaxis.html";
}

function callVentajas()
{
    window.location = "ventajas.html";
}


function callEstado()
{
    window.location = "estado.html";
}

function callArquitectura()
{
    window.location = "arquitectura.html";
}


function callAplicaciones()
{
    window.location = "aplicaciones.html";
}


function callCaracteristicas()
{
    window.location = "caracteristicas.html";
}