const html = document.querySelector('html')
const focoButton = document.querySelector('.app__card-button--foco')
const curtoButton = document.querySelector('.app__card-button--curto')
const longoButton = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const title = document.querySelector('.app__title')

function changeContext(contexto){
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

focoButton.addEventListener('click', () => {
    changeContext('foco')
})
curtoButton.addEventListener('click', () => {
    changeContext('descanso-curto')
})
longoButton.addEventListener('click', () => {
    changeContext('descanso-longo')
})


