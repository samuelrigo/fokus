const html = document.querySelector('html')
const focoButton = document.querySelector('.app__card-button--foco')
const curtoButton = document.querySelector('.app__card-button--curto')
const longoButton = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

function changeContext(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
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


