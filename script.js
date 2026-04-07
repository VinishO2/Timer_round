// Variáveis do visor
let visorTempo = document.querySelector("#visorsec")
let visorRound = document.querySelector("#visorround")
let totalRounds = document.querySelector("#totalrounds")

//Variáveis dos seletores
let selecRounds = document.querySelector("#rounds")
let selecTempo = document.querySelector("#seconds")
let selecDescanso = document.querySelector("#rest")

//Variáveis dos botões
let iniciar = document.querySelector ("#startBtn");
let pausar = document.querySelector ("#pauseBtn");
let reset = document.querySelector ("#resetBtn");
let finish = document.querySelector ("#finishBtn");

//Variáveis para os sons
let somGongo = new Audio("assets/Sons/som-gongo.mp3");
let somDescanso = new Audio("assets/Sons/duck.mp3");
let somFinal = new Audio("assets/Sons/nuke-alarm.mp3");

//Variáveis de controle
let tempoRestante = 0;
let roundAtual = 1;
let intervaloId = null;
let emDescanso = false;

//Eventos dos botões
iniciar.addEventListener("click", inicio);
pausar.addEventListener("click", pausa);
reset.addEventListener("click", resetar);
finish.addEventListener("click", finalizar);

//Funções

function atualizarVisor(){
    //calcula os minutos e segundos exatos desse momento
    let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;

    // Trasforma o numero em string e formata para sempre ter 2 digitos, preenchendo com 0 se faltar
    let minFormatado = String(minutos).padStart(2, "0"); //Formata os minutos para ter sempre 2 dígitos
    let segFormatado = String(segundos).padStart(2, "0"); //Formata os segundos para ter sempre 2 dígitos

    visorTempo.textContent = `${minFormatado}:${segFormatado}`;
}

function inicio(){
    //Limpa qualquer intervalo que esteja rodando e volta a tela a cor original
    clearInterval(intervaloId);
    document.body.classList.remove("tela-pausada");

    if(tempoRestante === 0){
        if (emDescanso) {
            tempoRestante = parseInt(selecDescanso.value);
        } else {
             // Pega o tempo do select
             tempoRestante = parseInt(selecTempo.value);
             somGongo.play();
        }    
    }
    
    // Roda o bloco de código a cada 1 segundo
    intervaloId = setInterval(function (){
        if(tempoRestante > 0){
            tempoRestante--;
            atualizarVisor();
        } else {
            if (emDescanso === true) {
                tempoRestante = parseInt(selecTempo.value);
                emDescanso = false;
                document.body.classList.remove("tela-descanso");
                atualizarVisor();
                somGongo.play();
            } else if (emDescanso === false && roundAtual < parseInt(selecRounds.value)){
                roundAtual++;
                tempoRestante = parseInt(selecDescanso.value);
                visorRound.textContent = roundAtual;
                emDescanso = true;
                document.body.classList.add("tela-descanso");
                atualizarVisor();
                somDescanso.play();
            } else {
                clearInterval(intervaloId);
                document.body.classList.add("tela-piscando-vermelho")
                somFinal.play();
            }
        }
    }, 1000); //em milissegundos

    visorRound.textContent = roundAtual;
    totalRounds.textContent = selecRounds.value;
}

function pausa(){
    clearInterval(intervaloId);
    document.body.classList.add("tela-pausada");
}

function resetar(){
    clearInterval(intervaloId);
    tempoRestante = 0;
    emDescanso = false;
    visorTempo.textContent = "00:00";
    document.body.classList.remove("tela-pausada", "tela-piscando-vermelho");
}

function finalizar(){
    resetar();
    roundAtual = 1;
    visorRound.textContent = "1";
    totalRounds.textContent = selecRounds.value;
    document.body.classList.remove("tela-descanso", "tela-pausada", "tela-piscando-vermelho");
    somGongo.pause();
    somDescanso.pause();
    somFinal.pause();
    somGongo.currentTime = 0;
    somDescanso.currentTime = 0;
    somFinal.currentTime = 0;
   
}