# Planeamento: Cronômetro de Rounds (Boxe)

## 1. Interface (O que o utilizador vê - HTML/CSS)
* [X] Exibição do tempo (ex: 180 sec - round, 60 sec - descanso)
* [X] Exibição de qual round está e quantos já foram feitos
* [X] Botão para iniciar
* [X] Botão para parar
* [X] Botão para reiniciar
* [X] Botão finalizar
* [X] Seleção da quantidade de rounds, de quanto tempo cada round e quanto tempo de descanso (ter um campo especifico)
* [X] Cores diferentes para round, descanso e pra quando acabar o ciclo (talvez com aviso sonoro também)
 
## 2. Estado da Aplicação (O que o sistema precisa de "lembrar" - Variáveis JS)
* [ ] O tempo total do round (ex: 180 segundos)
* [ ] O tempo que falta no momento
* [ ] Quantos rounds foram feitos


## 3. Comportamentos (O que acontece e quando - Eventos/Funções)
* [X] Quando o utilizador clicar em "Iniciar": O cronometro inicia, indica qual round está, a tela fica branca com as letras pretas
* [X] Quando o utilizador clicar em "Parar": O cronometro para e a tela fica azul com as letras pretas, e apenas os numeros do timer ficam piscando
* [ ] Quando o utilizador clicar em "Reiniciar": O cronometro é zerado, reinicia a contagem dos rounds
* [ ] Quando o utilizador clicar em "Finalizar": Volta para a tela inicial de escolha e zera tudo
* [ ] Quando o utilizador selecionar a quantidade de rounds, tempo de round e descanso: os visores devem ser alterados
* [X] Quando o tempo chegar a zero: O cronometro para e uma tela fica piscando em vermelho zerando o tempo, mas deixando a quantidade de rounds feitos a mostra

## 4. Futuras implementações
* [ ] Perfis dos atletas
* [ ] Forma de colocar perfis e mostrar quantos rounds cada pessoa já fez
* [ ] Implementar um aviso sonoro quando iniciar, parar e finalizar