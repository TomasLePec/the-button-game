const play = document.getElementById('play')
const pause = document.getElementById('pause')
pause.disabled = true
const clickMe = document.getElementById('clickMe')
clickMe.disabled = true
const timer = document.getElementsByClassName('controls__timer')[0]
timer.textContent = '00:30'
const contador = document.getElementsByClassName('progress')[0]
const puntaje = document.getElementById('contador')
contador.style.background = `linear-gradient(to right, var(--green) 0%, var(--green) 0%, #fff 00%, #fff 100%)`
var tiempo = 30
var clicks = 0
contador.textContent = `${clicks}/5 clicked`


function reloj(){
    var id = setInterval(function(){ 
        if(pause.disabled){
           clearInterval(id);
        }
        if (tiempo == 0){
            alert('Perdiste!')
            resetear()
        }
        else
        {
           tiempo=tiempo-1; 
           timer.textContent = tiempo; 
        }
     }, 1000);
}


play.addEventListener('click',iniciarJuego)
pause.addEventListener('click',pausarJuego)

function pausarJuego(){
    play.disabled = false
    pause.disabled = true
    clickMe.disabled = true

}

function iniciarJuego(){
    play.disabled = true
    pause.disabled = false
    clickMe.disabled = false
    reloj()
    
    

}






function cambiarposicion(){
    clickMe.style.top = `${Math.floor(Math.random()*101)}%`
    clickMe.style.left = `${Math.floor(Math.random()*101)}%`
}

clickMe.addEventListener('click',clickeado)

function clickeado(){
    clicks += 1
    contador.textContent = `${clicks}/5 clicked`
    cambiarposicion();
    contador.style.background = `linear-gradient(to right, var(--green) 0%, var(--green) ${clicks * 20}%, #fff ${clicks * 20}%, #fff 100%)`
    if (clicks === 5){
        
        contador.style.background = `linear-gradient(to right, var(--green) 0%, var(--green) 100%, #fff 100%, #fff 100%)`
        alert('Ganaste!')
        resetear()
    }
    
    
    
}



function resetear(){
    const play = document.getElementById('play')
    play.disabled = false
    const pause = document.getElementById('pause')
    pause.disabled = true
    const clickMe = document.getElementById('clickMe');
    clickMe.style.top = '43%'
    clickMe.style.left = '43%'
    clickMe.disabled = true
    const timer = document.getElementsByClassName('controls__timer')[0]
    timer.textContent = '00:30'
    var tiempo = 30
    var clicks = 0
    const contador = document.getElementsByClassName('progress')[0]
    contador.style.background = `linear-gradient(to right, var(--green) 0%, var(--green) 0%, #fff 00%, #fff 100%)`
    contador.textContent = `${clicks}/5 clicked`
    
}