var hora
var min 
var seg 
var bot = window.document.getElementById('bt')
var h
var m
var s
var time 

//quando a página iniciar

function novo(){
    dpri.innerHTML = '<input type="number" id="inhora" class="intempo" placeholder="hora" min="0" max="24"> : '
    dpri.innerHTML += '<input type="number" id="inmin" class="intempo" placeholder="min" min="0" max="59"> : '
    dpri.innerHTML += '<input type="number" id="inseg" class="intempo" placeholder="seg" min="0" max="59">'
    bot.innerHTML = '<input type="button" value="Iniciar" class="buttons" onclick="iniciar()">'
}

//interatividade com os botões

function iniciar(){
    var hora = window.document.getElementById('inhora');
    var min = window.document.getElementById('inmin');
    var seg = window.document.getElementById('inseg');
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
        bot.innerHTML = '<input type="button" value="Parar" class="buttons" onclick="parar()">'
        hora.value = ''
    }
}

function parar(){
    clearInterval(time)
    bot.innerHTML = '<input type="button" value="Continuar" class="buttons" onclick="continuar()">'
    bot.innerHTML += '<input type="button" value="Novo" class="buttons" onclick="novo()">'
}

function continuar(){
    time = setInterval(timer, 1000)
    bot.innerHTML = '<input type="button" value="Parar" class="buttons" onclick="parar()">'
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

//escrita e dois digitos

function write(){
    if(h == 0 && m == 0){
        dpri.innerHTML =  twoDigits(s)
    } else if (h == 0) {
        dpri.innerHTML = twoDigits(m) +':'+ twoDigits(s)  
    } else {
        dpri.innerHTML = twoDigits(h) +':'+ twoDigits(m) +':'+ twoDigits(s)  
    }
}

function twoDigits(digits){
    if (digits < 10){
        return ('0' + digits)
    } else {
        return (digits)
    }
}


