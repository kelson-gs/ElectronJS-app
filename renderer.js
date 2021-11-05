var imagens = document.getElementById('img_anima');
var divViewSloga = document.getElementById('animation-slogan');
var titleLogo = document.getElementById('title-logo');
var btnIniciar = document.getElementById('btn-iniciar');

listaImagens = [
    'sloga/logo0.png',    'sloga/logo1.png',    'sloga/logo2.png',
    'sloga/logo3.png',    'sloga/logo4.png',    'sloga/logo5.png',
    'sloga/logo6.png',    'sloga/logo7.png',    'sloga/logo8.png',
    'sloga/logo9.png',    'sloga/logo10.png',    'sloga/logo11.png',
    'sloga/logo12.png',    'sloga/logo13.png',    'sloga/logo14.png',
    'sloga/logo15.png',    'sloga/logo16.png',    'sloga/logo17.png',
    'sloga/logo18.png',    'sloga/logo19.png',    'sloga/logo20.png',
    'sloga/logo21.png',    'sloga/logo22.png',    'sloga/logo23.png',
    'sloga/logo24.png',    'sloga/logo25.png',    'sloga/logo26.png',
    'sloga/logo27.png',    'sloga/logo28.png',    'sloga/logo29.png',
    'sloga/logo30.png',    'sloga/logo31.png',    'sloga/logo32.png',
    'sloga/logo33.png',    'sloga/logo34.png',    'sloga/logo35.png',
    'sloga/logo36.png',    'sloga/logo37.png',    'sloga/logo38.png',
    'sloga/logo39.png',    'sloga/logo40.png',    'sloga/logo41.png',
    'sloga/logo42.png',
];

document.addEventListener('DOMContentLoaded', animacaoLogo())

async function espera(tmp){
    function tempo(ms){
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    await tempo(tmp);
  }

async function animacaoLogo(){
    for(var i = 0;i < listaImagens.length; i++){
        imagens.src = listaImagens[i];
        btnIniciar.style.display = 'none';
        await espera(60);
    }
    if( i === 43){
        imagens.src = 'sloga/logo42.png';
        imagens.style.width = '500px';
        imagens.style.height = 'auto';
        titleLogo.innerText = 'Eletrônica Betel';
        imagens.style.transition = '2s';
        btnIniciar.style.display = 'none';
        btnIniciarAnime()
    }
}

async function btnIniciarAnime(){
    await espera(2500);
    btnIniciar.innerText = "iniciar";
    btnIniciar.style.display = 'block';
}
