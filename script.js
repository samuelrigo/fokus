const html = document.querySelector('html')
const focoButton = document.querySelector('.app__card-button--foco')
const curtoButton = document.querySelector('.app__card-button--curto')
const longoButton = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const title = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const inputMusicFocus = document.querySelector('#alternar-musica')
const startPauseButton = document.querySelector('#start-pause')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const startPauseIcon = document.querySelector('.app__card-primary-button-icon')
const timeOnScreen = document.querySelector('#timer')

const music = new Audio('./sons/luna-rise-part-one.mp3')
const playSound = new Audio ('./sons/play.wav')
const pauseSound = new Audio ('./sons/pause.mp3')
const beepSound = new Audio ('./sons/beep.mp3')
music.loop = true

let intervaloId
let timeInSeconds = 1500

focoButton.addEventListener('click', () => {
    timeInSeconds = 1500
    changeContext('foco')
    focoButton.classList.add('active')
})
curtoButton.addEventListener('click', () => {
    timeInSeconds = 300
    changeContext('descanso-curto')
    curtoButton.classList.add('active')
})
longoButton.addEventListener('click', () => {
    timeInSeconds = 900
    changeContext('descanso-longo')
    longoButton.classList.add('active')
})

inputMusicFocus.addEventListener('change', () => {
    if(music.paused){
        music.play()
    }else{
        music.pause()
    }
})

function changeContext(contexto){
    showTime()
    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            title.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
        break;

        case "descanso-curto": title.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
        break;
        
        case "descanso-longo": title.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        break;

        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(timeInSeconds <= 0){
        beepSound.play()
        console.log('Tempo finalizado!')
        zerar()
        return
    }
    timeInSeconds -= 1
    showTime()
}

startPauseButton.addEventListener('click', iniciarOuPausar )

function iniciarOuPausar(){
    if(intervaloId){
        pauseSound.play()
        zerar()
        return
    }
    playSound.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
    startPauseIcon.setAttribute('src', `./imagens/pause.png`)
}
function zerar(){
    clearInterval(intervaloId)
    iniciarOuPausarBt.textContent = "Começar"
    startPauseIcon.setAttribute('src', `./imagens/play_arrow.png`)
    intervaloId = null
}

function showTime() { 
    const time = new Date(timeInSeconds * 1000)
    const formattedTime = time.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timeOnScreen.innerHTML = `${formattedTime}`
}
showTime()