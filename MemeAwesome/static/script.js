let play_meme_1 = document.getElementById("meme-1");
let play_meme_2 = document.getElementById("meme-2");
let play_meme_3 = document.getElementById("meme-3");
let play_meme_4 = document.getElementById("meme-4");
let play_meme_5 = document.getElementById("meme-5");
let play_meme_6 = document.getElementById("meme-6");
let play_meme_7 = document.getElementById("meme-7");
let play_meme_8 = document.getElementById("meme-8");
let play_meme_9 = document.getElementById("meme-9");
let play_meme_10 = document.getElementById("meme-10");
let play_meme_11 = document.getElementById("meme-11");
let play_meme_12 = document.getElementById("meme-12");
let stop_meme = document.getElementById("stop-meme");

let currentAudio = null;

function playAudio_meme_1() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio = new Audio("static/audios/Ain Nobruzera apelão(ESTOURADO).mp3");
    currentAudio = audio;
    audio.play();
    
}

play_meme_1.addEventListener('click', playAudio_meme_1);

function playAudio_meme_2() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio = new Audio("static/audios/aí aí zé da manga.mp3");
    audio.play();
    currentAudio = audio;
}

play_meme_2.addEventListener('click', playAudio_meme_2);

function playAudio_meme_3() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio = new Audio("static/audios/comedor_cu.mp3");
    currentAudio = audio;
    audio.play();
    
}
play_meme_3.addEventListener('click', playAudio_meme_3);
function playAudio_meme_4() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio = new Audio("static/audios/sacola.mp3");
    currentAudio = audio;
    audio.play();
}
play_meme_4.addEventListener('click', playAudio_meme_4)

function playAudio_meme_5(){
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio = new Audio("static/audios/cebolinha.mp3");
    currentAudio = audio;
    audio.play();
    
}
play_meme_5.addEventListener('click', playAudio_meme_5)

function stopMeme(){
    if (currentAudio) {
        currentAudio.pause();
    }
    else{
    alert('Nenhuma música tocando')}
}
stop_meme.addEventListener('click', stopMeme)
