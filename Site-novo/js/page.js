var div_historia = document.getElementById("history");

var historias = ["Soul music ou apenas soul é um gênero musical popular que se originou na comunidade afro-americana dos Estados Unidos nos anos 1950 e no início dos anos 1960. Na década de sessenta o Soul passa a ser a música de protesto dos movimentos em favor dos direitos civis dos negros, tornando-se a black music americana.","N.W.A foi um grupo americano de hip hop de Compton, Califórnia. Ativos de 1987 a 1991, o grupo sofreu controvérsia devido às letras chocantes e explícitas de suas músicas, que muitos viam como misóginas, glorificado as drogas e o crime. O grupo foi posteriormente banido de muitas estações de rádio americanas. Com base em suas próprias experiências de racismo, abuso de autoridade e violência policial, o grupo fez música inerentemente política. Eles eram conhecidos por seu profundo ódio ao sistema policial, o que provocou muita controvérsia ao longo dos anos"] 

function aparecer_texto(posisao_historia){
    div_historia.innerHTML = `<div class='content'><p>${historias[posisao_historia]}</p></div>`;
}

var div_hip_hop = document.getElementById("box_musica");
var div_nome = document.getElementById("div_nome");
var div_musica = document.getElementById("div_musica");
var div_fotos = document.getElementById("div_fotos");


var musica_hop = [
    {
        nome:"AMBITIONZ AZ A RIDAH",
        foto:"./img/pacMusic.jpg",
        audio:"2Pac - Ambitionz Az A Ridah (Legendado).mp3"

    },
    {
        nome:"Smack That",
        foto:"./img/akon2.jpg",
        audio:"Akon - Smack That ft. Eminem.mp3"
    },
    {
        nome:"That's That Shit",
        foto:"./img/snoop2.jpg",
        audio:"Snoop Dogg - Thats That Shit feat. R. Kelly.mp3"
    },
    {
        nome:"21 Questions",
        foto:"./img/cent2.jpg ",
        audio:"50 Cent - 21 Questions ft. Nate Dogg.mp3"
    },
    {
        nome:"Mesmerize",
        foto:"./img/ja2.jpg",
        audio:"mesmerize lyrics ja rule.mp3"
    },
    {
        nome:"My Place",
        foto:"./img/nelly2.jpg",
        audio:"My Place- Nelly feat. Jaheim.mp3"
    },
    
];

function aparecer_musica(posisao_musica){

    div_nome.innerHTML = musica_hop[posisao_musica].nome
    div_fotos.style.backgroundImage = `url(${musica_hop[posisao_musica].foto})`
    div_musica.src = musica_hop[posisao_musica].audio;
    
}

