var bot = window.document.getElementById('butin')
var mls = 0
var sec = 0
var min = 0
var hora = 0
var tempo
 
//Interatividade com os botões
function iniciar(){
    cronometro()
    tempo = setInterval(cronometro, 10)
    dbt.innerHTML = '<input type="button" value="Parar" id="parin" class="buttons" onclick="parar()" >'
        
}

function parar(){
    clearInterval(tempo)
    dbt.innerHTML = '<input type="button" value="Continuar" id="contin" class="buttons" onclick="continuar()" >'
    dbt.innerHTML += '<input type="button" value="Resetar" class="buttons" id="resin" onclick="reset()" >'
}

function continuar(){
    tempo = setInterval(cronometro, 10)
    dbt.innerHTML = '<input type="button" value="Parar" id="parin" class="buttons" onclick="parar()" >'
}

function reset(){
    hora = 0
    min = 0
    sec = 0
    mls = 0
    ctempo.innerHTML = twoDigits(sec)+':'+twoDigits(mls)
    dbt.innerHTML = '<input type="button" value="Iniciar" id="butin" class="buttons" onclick="iniciar()">'
}

//funcionalidades internas

function cronometro(){
    mls += 1

    if (mls == 100){
        sec++
        mls = 0
    }
    if (sec == 60) {
        min += 1
        sec = 0
    }  
    if (min == 60 && sec == 00){
        hora += 1
        min = 0
        sec = 0
    }

    if (hora==0 && min == 0){
        ctempo.innerHTML = twoDigits(sec)+':'+twoDigits(mls)
    } else if (hora == 0) {
        ctempo.innerHTML = twoDigits(min)+':'+twoDigits(sec)+':'+twoDigits(mls)
    } else{
        ctempo.innerHTML = twoDigits(hora)+':'+twoDigits(min)+':'+twoDigits(sec)+':'+twoDigits(mls)
    }
}

function twoDigits(Digits){
    if (Digits < 10){
        return('0'+ Digits)
    } else {
        return(Digits)
    }
}

