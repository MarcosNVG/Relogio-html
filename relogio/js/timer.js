function iniciar(){
    var hora = window.document.getElementById('inhora');
    var min = window.document.getElementById('inmin');
    var seg = window.document.getElementById('inseg');
    var h = hora.value;
    var m = min.value;
    var s = seg.value
    if (hora.value.length == 0 ){
        h = 0
    }
    if (min.value.length == 0 ){
        m = 0
    }
    if (seg.value.length == 0 ){
        s = 0
    }
    dsec.innerHTML = `${h}:${m}:${s}`

    var time = setInterval(function(){
        if (h >= 0 && s > -1 || m >= 0 && s >=0){
            s-- 
            dsec.innerHTML = `${h}:${m}:${s}`    
        }
        if (m > 0 && s == -1){
            m--
            s = 59
            dsec.innerHTML = `${h}:${m}:${s}`
        } else if (h > 0 && s == -1) {
            s = 59 
            m = 59
            h -= 1
            dsec.innerHTML = `${h}:${m}:${s}`  
        }else if (h == 0 && m == 0 && s == 0){
            alert("Timer")
            clearInterval(time)
        }
    }, 1000)
}
function parar(){
    setTimeout(function(){clearInterval(time)}, 1000)
}



