// Variáveis do visor
let visorTempo = document.querySelector("#visorsec")
let visorRound = document.querySelector("#visorround")
let totalRounds = document.querySelector("#totalrounds")

//Variaveis dos seletores
let selecRounds = document.querySelector("#rounds")
let selecTempo = document.querySelector("#seconds")
let selecDescanso = document.querySelector("#rest")

//Variaveis dos botões
let iniciar = document.querySelector ("#startBtn");
let pausar = document.querySelector ("#pauseBtn");
let reset = document.querySelector ("#resetBtn");
let finalizar = document.querySelector ("#finishBtn");

//Variáveis de controle
let tempoRestante = 0;
let roundAtual = 0;
let intervaloId = null;





//Eventos dos botões
iniciar.addEventListener("click", inicio);
pausar.addEventListener("click", pausa);
reset.addEventListener("click", resetar);
finalizar.addEventListener("click", finalizar);

//Funções

function inicio(){
    //Limpa qualquer intervalo que esteja rodando e volta a tela a cor original
    clearInterval(intervaloId);
    document.body.classList.remove("tela-pausada");

    if(tempoRestante === 0){
        // Pega o tempo do select
    tempoRestante = parseInt(selecTempo.value);
    }
    
    // Roda o bloco de código a cada 1 segundo
    intervaloId = setInterval(function (){
        if(tempoRestante > 0){
            tempoRestante--;

            //calcula os minutos e segundos exatos desse momento
            let minutos = Math.floor(tempoRestante / 60);
            let segundos = tempoRestante % 60;

            // Trasforma o numero em string e formata para sempre ter 2 digitos, preenchendo com 0 se faltar
            let minFormatado = String(minutos).padStart(2, "0"); //Formata os minutos para ter sempre 2 dígitos
            let segFormatado = String(segundos).padStart(2, "0"); //Formata os segundos para ter sempre 2 dígitos

            visorTempo.textContent = `${minFormatado}:${segFormatado}`;
        } else {
            clearInterval(intervaloId);
            document.body.classList.add("tela-piscando-vermelho")
        }
    }, 1000); //em milissegundos
}

function pausa(){
    clearInterval(intervaloId);
    document.body.classList.add("tela-pausada");
}