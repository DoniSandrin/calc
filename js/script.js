//Seleção dos elemtos
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

//Logica da aplicação
class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText; //Valores impresso na tela
    this.currentOperationText = currentOperationText; //Valores impresso na tela
    this.currentOperation = ""; //Valores que esta sendo digitado
  }

  //add digit to calculator screen
  addDigit(digit) {
    //Check if current operation already has a dot
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currentOperation = digit; // quando alguem clica no digito saber a operaçao current
    this.updateScreen(); // metodo responsavel por atualizar a tela
  }

  // Process all calculator operations
  processOperation(operation) {

    // Check if current is empty
    if(this.currentOperationText.innerText === "") {
        // Change opertion
        if(this.previousOperationText.innerText !== "") {
            this.changeOperation(operation); // Metodo para mudar a opreração
        }
        return;
    }

    //get current and previous value
    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0]; // .split(" ")[0] separa os textos com espaços e pega a primeira parte pq retorn um array de split
    const current = +this.currentOperationText.innerText; //Obs: '+'this o operador de + faz a converção para numeros

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      default:
        return;
    }
  }

  // Change values of the calculator screen
  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    console.log(operationValue, operation, current, previous);

    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      // Check if value is zero, if it is just add current value
      if (previous === 0) {
        operationValue = current;
      }

      // Add current value to previous
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

//Eventos para o funcionamento da calculadora
buttons.forEach((btn) => {
  //Acessa cada um dos botoes
  btn.addEventListener("click", (e) => {
    //Dentro de cada btn foi adicionado um evento de click

    const value = e.target.innerText; //Pega o valor do botão que foi clicado

    //Nesse bloco if separamos os cliques nos numeros dos cliques nos botões de operação
    if (+value >= 0 || value === ".") {
      //O operador de + converte para numero
      calc.addDigit(value);
    } else {
      calc.processOperation(value); //Operação mais valor da operação
    }
  });
});
