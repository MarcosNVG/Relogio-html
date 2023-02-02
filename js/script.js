setInterval(tempo, 1000);
function tempo(){
    var data = new Date();
    window.document.getElementById('horario').innerHTML = data.toLocaleTimeString('pt-br')
}


