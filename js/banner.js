let banners = ["img/destaque-home.png", "img/destaque-home-2.png"]
let bannerAtual = 0

function trocaBanners () {
    bannerAtual = (bannerAtual + 1)%2
    document.querySelector('.banner-destaque img').src = banners[bannerAtual]
}

let timer = setInterval(trocaBanners, 4000)
let controle = document.querySelector('.pause')

controle.onclick = function () {
    if(controle.className == 'pause') {
        clearInterval(timer)
        controle.className = 'play'
    } else {
        timer = setInterval(trocaBanners, 4000)
        controle.className = 'pause'
    }

    return false
}