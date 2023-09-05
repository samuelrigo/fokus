const html = document.querySelector('html')
const focoButton = document.querySelector('.app__card-button--foco')
const curtoButton = document.querySelector('.app__card-button--curto')
const longoButton = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const title = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const inputMusicFocus = document.querySelector('#alternar-musica')
const music = new Audio('./sons/luna-rise-part-one.mp3')
music.loop = true
let timeInSeconds = 5
const startPauseButton = document.querySelector('#start-pause')
let intervaloId

focoButton.addEventListener('click', () => {
    changeContext('foco')
    focoButton.classList.add('active')
})
curtoButton.addEventListener('click', () => {
    changeContext('descanso-curto')
    curtoButton.classList.add('active')
})
longoButton.addEventListener('click', () => {
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
        zerar()
        alert('Tempo finalizado!')
        return
    }
    timeInSeconds -= 1
    console.log('Temporizador: ' + timeInSeconds)
}

startPauseButton.addEventListener('click', iniciarOuPausar )

function iniciarOuPausar(){
    if(intervaloId){
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
}
function zerar(){
    clearInterval(intervaloId)
    intervaloId = null
}