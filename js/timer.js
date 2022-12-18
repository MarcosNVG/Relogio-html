var hora = window.document.getElementById('inhora');
var min = window.document.getElementById('inmin');
var seg = window.document.getElementById('inseg');
var bot = window.document.getElementById('bt')
var h
var m
var s
var time 

//interatividade com os botões
function iniciar(){
    h = hora.value;
    m = min.value;
    s = seg.value
    if (h == 0 && m == 0 && s == 0){
        alert('Insira um tempo para começar.')
        dsec.innerHTML = ""
    } else {
        if (hora.value.length == 0 ){
            h = 0
        }
        if (min.value.length == 0 ){
            m = 0
        }
        if (seg.value.length == 0 ){
            s = 0
        }
        write()
        time = setInterval(timer, 1000) 
        bot.innerHTML = '<input type="button" value="Parar" onclick="parar()">'
        hora.value = ''
    }
}

function parar(){
    clearInterval(time)
    bot.innerHTML = '<input type="button" value="Continue" onclick="continuar()">'
    bot.innerHTML += '<input type="button" value="Iniciar" onclick="iniciar()">'
}

function continuar(){
    time = setInterval(timer, 1000)
    bot.innerHTML = '<input type="button" value="Parar" onclick="parar()">'
}

//funcionalidade do programa

function timer(){
    if (s >= 0){
        s--    
    }

    if (m > 0 && s < 0){
        m--
        s = 59  
    } else if (h > 0 && s < 0) {
        s = 59 
        m = 59
        h --   
    }else if (h == 0 && m == 0 && s == 0){
        alert("Timer")
        clearInterval(time) 
    }

   write()
}

function write(){
    if(h == 0 && m == 0){
        dsec.innerHTML =  twoDigits(s)
    } else if (h == 0) {
        dsec.innerHTML = twoDigits(m) +':'+ twoDigits(s)  
    } else {
        dsec.innerHTML = twoDigits(h) +':'+ twoDigits(m) +':'+ twoDigits(s)  
    }
}

function twoDigits(digits){
    if (digits < 10){
        return ('0' + digits)
    } else {
        return (digits)
    }
}


