var bot = window.document.getElementById('butin')
var sec = 0
var min = 0
var hora = 0
ctempo.innerHTML = `${hora}:${min}:${sec}`

function cronometrar(){
   var tempo = setInterval(cronometro, 1000)
        function cronometro(){
            sec += 1
            ctempo.innerHTML = `${hora}:${min}:${sec}`

            if (sec == 59) {
                min += 1
                sec = -1
            }
        }
}





//if(bot.value == "Iniciar"){



/*var sec = 00
var min = 00
var hora = 00
ctempo.innerHTML = `${hora}:${min}:${sec}`

function cronometrar(){
    setInterval(cronometro, 1000)
    bot.value = "Parar" 
    
    function cronometro(){
        sec += 1
        ctempo.innerHTML = `${hora}:${min}:${sec}`
        

        if (sec == 59) {
            min += 1
            sec = -1
        }

        if (bot.value == "Parar"){
            bot.addEventListener('click', parar)
        }    
    }

    function parar(){
        cronometrar.break
    }
}*/

close