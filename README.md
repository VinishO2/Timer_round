# 🥊 Boxing Timer - Cronômetro de Treino

Uma aplicação web desenvolvida em JavaScript puro (Vanilla JS) para gerenciar rotinas de treino intervalado, com foco específico em rounds de boxe. 

A ideia do projeto nasceu da necessidade de ter um controle de tempo autossuficiente e inteligente durante os treinos físicos, unindo a prática esportiva com a Engenharia de Software. O cronômetro alerta visualmente e sonoramente os momentos de preparação, luta e descanso, permitindo total foco na movimentação e nos golpes sem precisar olhar para a tela.

## ✨ Funcionalidades

* **Máquina de Estados (State Machine):** Lógica inteligente que transita automaticamente entre três estados distintos: "Preparação", "Luta" e "Descanso".
* **Tempo de Preparação (UX):** Um timer inicial de 10 segundos antes do primeiro round para que o atleta possa colocar o protetor bucal e entrar em posição.
* **Alertas Visuais Dinâmicos:** O DOM é manipulado para alterar as cores de fundo da tela dependendo do estado atual (amarelo para preparação, azul para descanso) e emitir um alerta visual piscante em vermelho ao fim do treino.
* **Feedback Sonoro:** Integração com a API nativa de áudio do navegador para tocar sons de gongo nas viradas de round e bipes de aviso durante os descansos e preparações.
* **Finalização Automática (Assincronicidade):** Uso de temporizadores assíncronos para manter a tela de fim de treino ativa por 5 segundos antes de restaurar automaticamente o aplicativo ao seu estado original de fábrica.
* **Sincronização e Proteção de Estado:** Proteções contra múltiplos cliques e dessincronização entre o motor de tempo e a interface.
* **Princípio DRY (Don't Repeat Yourself):** Funções de atualização de tela e de reinicialização refatoradas para evitar duplicação de código e atrasos (delays) visuais.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do painel de controle.
* **CSS3:** Estilização responsiva e criação de classes utilitárias para mudança de estado visual (`.tela-preparacao`, `.tela-descanso`, `.tela-piscando-vermelho`).
* **JavaScript (ES6+):** * Manipulação de DOM (`addEventListener`, `classList`, `textContent`).
    * Controle de concorrência e gerenciamento de tempo (`setInterval`, `clearInterval`, `setTimeout`).
    * Formatação de strings e tratamento de variáveis dinâmicas (`padStart()`).
    * Instanciação de objetos de mídia (`new Audio()`).

