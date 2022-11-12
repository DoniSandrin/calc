
//Seleção dos elemtos
const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")


//Logica da aplicação
class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText //Valores impresso na tela
        this.currentOperationText = currentOperationText //Valores impresso na tela
        this.currentOperation = "" //Valores que esta sendo digitado
    }

    //add digit to calculator screen
    addDigit(digit) {
        
        this.currentOperation = digit  // quando alguem clica no digito saber a operaçao current
        this.updateScreen(); // metodo responsavel por atualizar a tela
    }

    // Change values of the calculator screen
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation; // Numero da op atual dentro do texto da op atual
    }

}

const calc = new Calculator(previousOperationText, currentOperationText);


//Eventos para o funcionamento da calculadora
buttons.forEach((btn) => {    //Acessa cada um dos botoes
    btn.addEventListener("click", (e) => {  //Dentro de cada btn foi adicionado um evento de click

        const value = e.target.innerText; //Pega o valor do botão que foi clicado

        //Nesse bloco if separamos os cliques nos numeros dos cliques nos botões de operação
        if(+value >= 0 || value === ".") { //O operador de + converte para numero
            calc.addDigit(value);

        } else {
            console.log("Op: ' + value");  //Operação mais valor da operação
        }
    });
});
