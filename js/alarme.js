function alarmar(){
    var hora = window.document.getElementById('inhour');
    var min = window.document.getElementById('inminute');
    var marc = window.document.getElementById('inmarc');
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
    

    /*if (hora.value == h && min.value == m && s == 0){
        setTimeOut(function(){
                alert('tudo ok') 
        }, 1000)
    }
        /*function alarmou(){
            var data = new Date()
            var h = data.getHours()
            var m = data.getMinutes()
            if(hora.value == h && min.value == m){
                    alert('tudo ok')
            }
        }
        
        
        if (h >= hora && m > min){
        setTimeout(function(){
                clearInterval(time)
        }2000)*/
    
    
    
}