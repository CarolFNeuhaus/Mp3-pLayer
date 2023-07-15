let musicas = [

    {titulo:'Perfect', artista: 'Ed Sheeran', src:'musicas/Perfect.mp3', img:'images/image_perfect.jpg', backgroundColor: '#2f2f2f' },

    {titulo:'Boys in the Hood', artista: 'NWA', src:'musicas/nwa.mp3', img:'images/image_nwa.jpg', backgroundColor:'#9d1d15'},

   {titulo:'Paper Rings', artista: 'Taylor Swift', src:'musicas/paperrings.mp3', img:'images/image_paper_rings.jpg', backgroundColor:'#a1716a'},

   {titulo:'Living on a Prayer', artista: 'Bon Jovi', src:'musicas/bonJovi.mp3', img:'images/image_bonJovi.jpg', backgroundColor:'#0b8951'},

    {titulo:'Chicago', artista: 'Michael Jackson', src:'musicas/chicago.mp3', img:'images/image_chicago.jpg', backgroundColor:'#62453d'},

    {titulo:'Cant help falling in love', artista: 'Elvis Presley', src:'musicas/elvis.mp3', img:'images/image_elvis.jpg', backgroundColor:'#034755'},

    {titulo:'Moriró da ré', artista: 'Maneskin', src:'musicas/maneskin.mp3', img:'images/image_maneskin.jpg', backgroundColor:'#2b2b28'}

]

let indexMusica = 0
let quantidade = 7
let numeroMusicas = quantidade - 1

let body = document.getElementById('body')
let html = document.getElementById('html')
let musica = document.getElementById('audio')
let barra = document.getElementById('progress')
let tempoDecorrido = document.getElementById('inicio')
let duracaoMusica = document.getElementById('fim')
let imagem = document.getElementById('img')
let nomeMusica = document.getElementById('nome')
let nomeArtista = document.getElementById('artista')
let anterior = document.getElementById('anterior')
let proxima = document.getElementById('proxima')

renderizarMusica(indexMusica)

//duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))

let botaoPlay = document.getElementById('botaoPlay')
let botaoPause = document.getElementById('botaoPause')

//renderizarMusica(indexMusica)

anterior.addEventListener('click', ()=>{
    indexMusica--
    if(indexMusica < 0){
        indexMusica = numeroMusicas
    }

    renderizarMusica(indexMusica)
    botaoPause.style.display='none'
    botaoPlay.style.display='block'
})

proxima.addEventListener('click', ()=>{
    indexMusica++
    if(indexMusica > numeroMusicas){
        indexMusica=0
    }

    renderizarMusica(indexMusica)
    botaoPause.style.display='none'
    botaoPlay.style.display='block'
})

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', ()=>{
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        body.style.backgroundColor = musicas[index].backgroundColor
        html.style.backgroundColor = musicas[index].backgroundColor
        
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
    })
}

botaoPlay.addEventListener('click', ()=>{
    musica.play()
    botaoPause.style.display='block'
    botaoPlay.style.display='none'
})

botaoPause.addEventListener('click', ()=>{
    musica.pause()
    botaoPause.style.display='none'
    botaoPlay.style.display='block'
})

musica.addEventListener('timeupdate', ()=>{
    barra.style.width= Math.floor((musica.currentTime / musica.duration) *100) + "%"
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
})

function segundosParaMinutos(segundos){
    let campoMinuto = Math.floor(segundos/60)
    let campoSegundos = segundos % 60
    if(campoSegundos < 10){
        campoSegundos= '0' + campoSegundos
    }

    return campoMinuto + ":" + campoSegundos
}



