let compResults;//Universal Let for result

function computation(problem) {//Start of computation function
    if (problem.type == 'add') { // If statement = ADD
        compResults = (Number(problem.value1) + Number(problem.value2))
        console.log('in computation add problem', compResults);
        return compResults
    } // End of IF Statement

    else if (problem.type == 'minus') { // Else If statement = Minus
        compResults = (Number(problem.value1) - Number(problem.value2))
        console.log('in computation minus problem', compResults);
        return compResults
    } // End of Else IF Statement

    else if (problem.type == 'divide') { // Else If statement = Divide
        compResults = (Number(problem.value1) / Number(problem.value2))
        console.log('in computation divide problem', compResults);
        return compResults
    } // End of Else IF Statement

    else if (problem.type == 'multiply') { // Else If statement = Multiply
        compResults = (Number(problem.value1) * Number(problem.value2))
        console.log('in computation multiply problem', compResults);
        return compResults
    } // End of Else IF Statement
    
}// END OF COMPUTATION FUNCTION

module.exports = {
    computation: computation,
    compResults: compResults
}