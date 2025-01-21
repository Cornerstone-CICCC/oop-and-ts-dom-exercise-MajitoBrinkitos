class Calculator {
    constructor(){
        this.inputNum1 = document.querySelector('#num1')
        this.inputNum2 = document.querySelector('#num2')
        this.selectOperation = document.querySelector('#operation')
        this.calculateBtn = document.querySelector('#calculateBtn')
        this.resultSpan = document.querySelector('#result')

        this.addEventListeners();
    }

    //Button
    addEventListeners(){
        this.calculateBtn.addEventListener('click', () => this.calculate());
    }


    //Methods
    //add
    add(num1, num2) {
        return num1 + num2
      }

    //subtract
    subtract(num1, num2) {
        return num1 - num2
    }

    //multiply
    multiply(num1, num2) {
        return num1 * num2
    }

    //divide
    divide(num1, num2) {
        if (num2 === 0 ) {
            return `Error`
        } return num1 / num2
    }

    //calculator
    calculate() {
        const num1 = parseFloat(this.inputNum1.value)
        const num2 = parseFloat(this.inputNum2.value)
        const operation = this.selectOperation.value

        let results

        //calculator logic
        switch(operation) {
            case 'add':
                result = this.add(num1, num2);
                break;
            case 'subtract':
                result = this.subtract(num1, num1);
                break;
            case 'multiply':
                result = this.multiply(num1, num2);
                break;
            case 'divide':
                result = this.divide(num1, num2);
                break;
            default:
                result = 'Perform a valid operation';
        }

        this.resultSpan.textContent = result;
        return result;
    }

    //to retrieve the current result
    getResult() {
        return this.resultSpan.textContent;
    }
}

//Instances
document.addEventListener('DOMContentLoaded', () => {
    const myCalculator = new Calculator()
})
