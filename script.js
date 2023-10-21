menubotao = document.getElementById('menubutton')
menu = document.getElementById('menu')
menubotao.addEventListener('click', abrirmenu)

function abrirmenu() {
    menu.style.width = "50vh"
}