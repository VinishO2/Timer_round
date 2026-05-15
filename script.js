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
let somPrep = new Audio("assets/Sons/beep.mp3");

//Variáveis de controle
let tempoRestante = 0;
let roundAtual = 1;
let intervaloId = null;
let emDescanso = false;
let emPrep = false;

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

    iniciar.disabled = true; 
    //Desabilita multiplos cliques no botão iniciar

    if(tempoRestante === 0) {
        if(tempoRestante === 0 && roundAtual === 1 && !emDescanso){
            emPrep = true;
            tempoRestante = 10;
            document.body.classList.add("tela-prep");
        } else if (emDescanso) {
            tempoRestante = parseInt(selecDescanso.value);
        } else {
            // Pega o tempo do select
            tempoRestante = parseInt(selecTempo.value);
            somGongo.play();
            somGongo.volume = 0.3;
        }
    }

    atualizarVisor();
    
    // Roda o bloco de código a cada 1 segundo
    intervaloId = setInterval(function (){
        if(tempoRestante > 0){
            tempoRestante--;
            atualizarVisor();
            if (emPrep && tempoRestante <= 3 && tempoRestante > 0) {
                somPrep.play();
                somPrep.volume = 0.3;
            }
        } else {
            if (emPrep) {
                emPrep = false;
                tempoRestante = parseInt(selecTempo.value);
                document.body.classList.remove("tela-prep");
                somGongo.play();
                somGongo.volume = 0.3;
                atualizarVisor();
            } else if (emDescanso) {
                emDescanso = false;
                tempoRestante = parseInt(selecTempo.value);
                document.body.classList.remove("tela-descanso");
                somGongo.play();
                somGongo.volume = 0.3;
                atualizarVisor();
            } else if (roundAtual < parseInt(selecRounds.value)){
                roundAtual++;
                emDescanso = true;
                tempoRestante = parseInt(selecDescanso.value);
                visorRound.textContent = roundAtual;
                document.body.classList.add("tela-descanso");
                somDescanso.play();
                somDescanso.volume = 0.3;
                atualizarVisor();
            } else {
                clearInterval(intervaloId);
                document.body.classList.add("tela-piscando-vermelho")
                somFinal.play();
                somFinal.volume = 0.05;
                somFinal.duration = 5;
                
                setTimeout(function(){
                    finalizar();
                }, 5000);
                
            }
        }
    }, 1000); //em milissegundos

    visorRound.textContent = roundAtual;
    totalRounds.textContent = selecRounds.value;
}

function pausa(){
    clearInterval(intervaloId);
    document.body.classList.add("tela-pausada");
    iniciar.disabled = false;
}

function resetar(){
    clearInterval(intervaloId);
    tempoRestante = 0;
    emDescanso = false;
    emPrep = false;
    visorTempo.textContent = "00:00";
    document.body.classList.remove("tela-prep","tela-descanso","tela-pausada", "tela-piscando-vermelho");
    iniciar.disabled = false;
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
    iniciar.disabled = false;
   
}