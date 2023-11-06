const actions = document.querySelector('.actions');
const ans = document.querySelector('.ans');
let expression = '';

actions.addEventListener('click', (event) => {
    const value = event.target.dataset['value'];
    if (value) {
    switch (value) {
        case 'CE':
            M = 0;
            ans.innerText = '0';
            break;
        case 'C':            
            expression = '';
            ans.innerText = '0';
            break;
        case '<=':
            expression = expression.slice(0, -1);
            ans.innerText = expression;
            break;        
        case 'x^2':
            expression = square();
            ans.innerText = expression;
            break;
        case 'a^b':
            if (expression.includes('^')) {
                const [a, b] = expression.split('^'); 
                const result = Math.pow(parseFloat(a), parseFloat(b)); 
                expression = result.toString(); 
                ans.innerText = expression;
            } else {
                expression += '^'; 
                ans.innerText = expression; 
            }
            break;
        case '√':
            expression = Math.sqrt(parseFloat(expression));
            ans.innerText = expression;
            break;
        case 'log':
            expression = Math.log(parseFloat(expression));
            ans.innerText = expression;
            break;
        case 'sen':
            expression = Math.sin(parseFloat(expression));
            ans.innerText = expression;
            break;
        case 'cos':
            expression = Math.cos(parseFloat(expression));
            ans.innerText = expression;
            break;
        case 'tan':
            expression = Math.tan(parseFloat(expression));
            ans.innerText = expression;
            break;
        case '!':
            if (expression !== '') {
                let num = parseInt(expression);
                let result = 1;
                for (let i = 2; i <= num; i++) {
                    result *= i;
                }
                expression = result;
                ans.innerText = expression;
            }
            break;
        case 'Rnd':
            expression = Math.random();
            ans.innerText = expression;
            break;
        case '1/x':
            if (expression !== '') {
                let num = parseFloat(expression);
                if (num !== 0) {
                    expression = 1 / num;
                    ans.innerText = expression;
                } else {
                    ans.innerText = 'Error';
                }
            }
            break;
        case '+/-':
            if (expression !== '') {
                expression = -parseFloat(expression);
                ans.innerText = expression;
            }
            break;
        case '%':
            const percentageValue = parseFloat(expression); 
            const result = percentageValue / 100;
            expression = result.toString();
            ans.innerText = expression;
            break;
        case 'mod':
            const modValue = parseFloat(expression); 
            const modResult = modValue % 1; 
            expression = modResult.toString();
            ans.innerText = expression;
            break;
        case 'IN':
            const logValue = parseFloat(expression); 
            const logResult = Math.log(logValue); 
            expression = logResult.toString();
            ans.innerText = expression;
            break;
        case 'e':
             expression = Math.E.toString();
            ans.innerText = expression;
            break;
        case 'M':
            const currentValueM = parseFloat(expression); 
            M = currentValueM; 
            ans.innerText = `M = ${M}`; 
            break;
               
        case '=':
            try {
                const answer = eval(expression);
                expression = answer.toString();
                ans.innerText = expression;
            } catch (error) {
                ans.innerText = 'Error';
                console.error(error);
            }
            break;
        default:
            expression += value;
            ans.innerText = expression;
    }
}
});


const square = () => {
    return eval(expression) ** 2;
};

document.addEventListener('DOMContentLoaded', function() {
    changeCalculatorType();
});

function changeCalculatorType() {
    const selectElement = document.getElementById('calculatorType');
    const selectedValue = selectElement.value;

    const basicFunctions = ['M', '<=', 'C', 'CE', '+', '-', '*', '/', '=', '+/-', '√', '%', '1/x', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const allButtons = document.querySelectorAll('button');

    allButtons.forEach(button => {
        const buttonText = button.innerText;
        if (selectedValue === 'basic') {
            button.style.display = basicFunctions.includes(buttonText) ? 'inline-block' : 'none';
        } else {
            button.style.display = 'inline-block';
        }
    });
}



