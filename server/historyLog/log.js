const calculation = require('./../calculations/calculator');
let calculationHistory = [];

function addHistory(newCalculation) {
    let newLog = {
        value1: newCalculation.value1,
        value2: newCalculation.value2,
        result: calculation.computation(newCalculation)
        }

    if (newCalculation.type == 'add') { // If statement = ADD
        newLog.type = '+'
        console.log('inside of addHistory ADD', newLog);
        calculationHistory.unshift(newLog);
    } // End of IF Statement

    else if (newCalculation.type == 'minus') { // Else If statement = Minus
        newLog.type = '-'
        console.log('inside of addHistory MINUS', newLog);
        calculationHistory.unshift(newLog);
    } // End of Else IF Statement

    else if (newCalculation.type == 'divide') { // Else If statement = Divide
        newLog.type = '÷'
        console.log('inside of addHistory DIVIDE', newLog);
        calculationHistory.unshift(newLog);
    } // End of Else IF Statement

    else if (newCalculation.type == 'multiply') { // Else If statement = Multiply
        newLog.type = 'x'
        console.log('inside of addHistory MULTIPLY', newLog);
        calculationHistory.unshift(newLog);
    }// End of Else IF Statement
}


module.exports = {
    historyLog: calculationHistory,
    addHistory: addHistory
};