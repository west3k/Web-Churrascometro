//Carne - 400Gr por pessoa + 6 horas - 650gr
//Cerveja - 1200ml por pessoa + 6 horas 2000 ml
//Refrigerante/Suco - 1000ml por pessoa + 6 horas 1500ml
//Crianças valem 0,5

var carne = 400
var cerveja = 1200
var bebidas = 1000

function calcular() {

    var adultos = document.getElementById("adultos")
    var criancas = document.getElementById("criancas")
    var tempo = document.getElementById("duracao")

    var resultado = document.getElementsByClassName("resultado")[0]
    var resultado1 = document.getElementsByClassName("resultado")[1]
    var resultado2 = document.getElementsByClassName("resultado")[2]

    let adult = parseInt(adultos.value)
    let child = parseInt(criancas.value / 2)
    let duracao = parseInt(tempo.value)

    let totalPessoas = adult + child

    let totalCarne = (calcCarne(totalPessoas, duracao) / 1000).toFixed(2)
    let totalCerveja = Math.ceil(calcCerveja(adult, duracao) / 330)
    let totalBebidas = Math.ceil(calcBebidas(totalPessoas, duracao) / 2000)

    resultado.innerHTML =
        `<img src="./imagens/icon-meat.png" class="icons"><p class="leg-icon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${totalCarne}KG</p> `
    resultado1.innerHTML =
        `&nbsp;&nbsp;<img src="./imagens/icon-beer.png" class="icons"><p class="leg-icon">${totalCerveja} Long Necks</p> `
    resultado2.innerHTML =
        `<img src="./imagens/icon-bottle-soda.png" class="icons"><p class="leg-icon">&nbsp;&nbsp;&nbsp;&nbsp;${totalBebidas} Garrafas</p> `
}

function calcCarne(totalPessoas, duracao) {
    if (duracao >= 6) {
        carne = 650
    }

    return totalPessoas * carne
}

function calcCerveja(adultos, duracao) {
    if (duracao >= 6) {
        cerveja = 2000
    }
    return adultos * cerveja
}

function calcBebidas(totalPessoas, duracao) {
    if (duracao >= 6) {
        bebidas = 1500
    }
    return  totalPessoas * bebidas 
}