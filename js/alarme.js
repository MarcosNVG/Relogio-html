var hora = window.document.getElementById('inhour');
var min = window.document.getElementById('inminute');
var marc = window.document.getElementById('inmarc');

//verificar se as caixas de números estão vazias  
function verificarCaixa(){
    if (hora.value.length == 0 && min.value.length == 0){
        alert('Adicione um horário para seu alarme.')
    } else if (hora.value.length == 0){
        alert('Por favor defina um valor para hora.')
    } else if (min.value.length == 0){
        alert('Os minutos não foram inseridos, vai ser considerado 0.')
        min.value = 0
        if (hora.value.length < 2){
            hora.value = doisdigitos(hora.value)
        } 
        if (min.value.length < 2){
            min.value = doisdigitos(min.value)
        }
        
        verificarHorario() 

        alarmar()
    } else {
        if (hora.value.length < 2){
            hora.value = doisdigitos(hora.value)
        } 
        if (min.value.length < 2){
            min.value = doisdigitos(min.value)
        }

        verificarHorario()

        alarmar()
    }    
} 

//Alarme
function alarmar(){
    var time = setInterval(function(){
                var data = new Date()
                var horario = data.getTime()
                var h = data.getHours()
                var m = data.getMinutes()
                var s = data.getSeconds() 
                if(hora.value == h && min.value == m && s == 0){
                        window.alert(`${h}:${m} - ${marc.value}`)         
                }           
    }, 0)
}  

//Vai adicionar dois digitos caso as caixas de horas e minutos estão com apenas 1 digito.
function doisdigitos(digito){
    if (digito < 10){
        return('0' + digito) 
    } else {
        return(digito)
    }
}

//Faz a verificação se o horário inserido é maior que 23h e se os minutos são maiores que 59
function verificarHorario(){
    if (hora.value > 23 && min.value > 59){
        window.alert('Os valores de horas e minutos informados são maiores que os permitidos, atualizaremos seu alarme para o valor máximo permitido.')
        hora.value = 23
        min.value = 59
    } else if (hora.value > 23){
        window.alert('O horário inserido é maior que 23 horas então atualizaremos o horário do alarme pra 23h.')
        hora.value = 23
    } else if (min.value > 59){
            window.alert('O minuto inserido é maior que 59 minutos então será atualizado para o valor máximo de 59 minutos.')
            min.value = 59
    } else {
        window.alert('Seu alarme foi adicionado.')
    }    
}

