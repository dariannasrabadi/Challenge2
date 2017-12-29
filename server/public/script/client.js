$(document).ready(start);

function start() {//Start of document listener
    $('#equal').on('click', sendStoreData) 
    $('.numbers').on('click', changeDisplayResult)
    $('.calculations').on('click', addValueOne)
    $('#reset').on('click', clearBtn);
    getHistory();
}//end of document listener

class Calculation{ //Start Calculation Class Constructor

    constructor(val1, val2, type){
        this.value1 = val1;
        this.value2 = val2;
        this.type = type;
    }

} //End Calculations Class Constructor

/** Universal Variables **/
let dataToSend; //Data from Client to be sent to server
let valueOne; //For stored value one from buttons
let valueTwo; //For stored value two from buttons
let symbolType; //For stored sign to be sent. 
/** End Universal Variables **/

// TRIED SHORTENING document.getElementById("currentResults").innerHTML to curRes but it would not work that way. Had to leave it lengthy 

function addValueOne() { //Start of addValueOne function
    if (document.getElementById("currentResults").innerHTML == 'x' || document.getElementById("currentResults").innerHTML == '-' || document.getElementById("currentResults").innerHTML == '+' || document.getElementById("currentResults").innerHTML == '÷') {
        console.log('double symbol overwriting previous one: ', document.getElementById("currentResults").innerHTML);
       
        if ($(this).is('#divide')) { //start of if else statements in if
            document.getElementById("currentResults").innerHTML = '÷';
            symbolType = 'divide';
        }

        else if ($(this).is('#add')) {
            document.getElementById("currentResults").innerHTML = '+';
            symbolType = 'add';
        }

        else if ($(this).is('#minus')) {
            document.getElementById("currentResults").innerHTML = '-';
            symbolType = 'minus';
        }

        else if ($(this).is('#multiply')) {
            document.getElementById("currentResults").innerHTML = 'x';
            symbolType = 'multiply';
        }// end of if else statements in if. 
    }//end of if

    else { // start of else
        valueOne = document.getElementById("currentResults").innerHTML;
        console.log('Added numbers to valueOne: ', valueOne);

        if ($(this).is('#divide')) { //start of if else statements in else
            document.getElementById("currentResults").innerHTML = '÷';
            symbolType = 'divide';
        }

        else if ($(this).is('#add')) {
            document.getElementById("currentResults").innerHTML = '+';
            symbolType = 'add';
        }

        else if ($(this).is('#minus')) {
            document.getElementById("currentResults").innerHTML = '-';
            symbolType = 'minus';
        }

        else if ($(this).is('#multiply')) {
            document.getElementById("currentResults").innerHTML = 'x';
            symbolType = 'multiply';
        }// end of if else statements in else
    }// end of else
    console.log('This is the symbolType: ', symbolType);
    
} //End of addValueOne function

function changeDisplayResult() { //Start of ChangeDisplayResult Function
    if (document.getElementById("currentResults").innerHTML == 'x' || document.getElementById("currentResults").innerHTML == '-' || document.getElementById("currentResults").innerHTML == '+' || document.getElementById("currentResults").innerHTML == '÷') {
        document.getElementById("currentResults").innerHTML = 0; 
    }

    else if (document.getElementById("currentResults").innerHTML.includes('Total')) {
        document.getElementById("currentResults").innerHTML = 0; 
    }

    if ($(this).is('#one')) {
        if (document.getElementById("currentResults").innerHTML == 0) {
            document.getElementById("currentResults").innerHTML = 1;        
        }
        else {
        document.getElementById("currentResults").innerHTML += 1;  
        }
    }

    else if($(this).is('#two')) {
        if (document.getElementById("currentResults").innerHTML == 0) {
            document.getElementById("currentResults").innerHTML = 2;        
        }
        else {
        document.getElementById("currentResults").innerHTML += 2;  
        }
    }

    else if($(this).is('#three')) { 
        if (document.getElementById("currentResults").innerHTML == 0) {
            document.getElementById("currentResults").innerHTML = 3;        
        }
        else {
        document.getElementById("currentResults").innerHTML += 3;  
        }
    }

    else if($(this).is('#four')) {
        if (document.getElementById("currentResults").innerHTML == 0) {
            document.getElementById("currentResults").innerHTML = 4;        
        }
        else {
        document.getElementById("currentResults").innerHTML += 4;  
        }
    }

    else if($(this).is('#five')) {
        if (document.getElementById("currentResults").innerHTML == 0) {
            document.getElementById("currentResults").innerHTML = 5;        
        }
        else {
        document.getElementById("currentResults").innerHTML += 5;  
        }
    }

    else if($(this).is('#six')) {
        if (document.getElementById("currentResults").innerHTML == 0) {
            document.getElementById("currentResults").innerHTML = 6;        
        }
        else {
        document.getElementById("currentResults").innerHTML += 6;  
        }
    }

    else if($(this).is('#seven')) {
        if (document.getElementById("currentResults").innerHTML == 0) {
            document.getElementById("currentResults").innerHTML = 7;        
        }
        else {
        document.getElementById("currentResults").innerHTML += 7;  
        }
    }

    else if($(this).is('#eight')) {
        if (document.getElementById("currentResults").innerHTML == 0) {
            document.getElementById("currentResults").innerHTML = 8;        
        }
        else {
        document.getElementById("currentResults").innerHTML += 8;  
        }
    }

    else if($(this).is('#nine')) {
        if (document.getElementById("currentResults").innerHTML == 0) {
            document.getElementById("currentResults").innerHTML = 9;        
        }
        else {
        document.getElementById("currentResults").innerHTML += 9;  
        }
    }

    else if($(this).is('#zero')) {
        document.getElementById("currentResults").innerHTML += 0;
        
        if (document.getElementById("currentResults").innerHTML == 00) {
            document.getElementById("currentResults").innerHTML = 0;        
        }
    }
}//End of ChangeDisplayResult Function


function sendStoreData() {//Start of sendStoreData function
    valueTwo = document.getElementById("currentResults").innerHTML;
    dataToSend = new Calculation(valueOne, valueTwo, symbolType)
    console.log('Inside add function', dataToSend);
    $.ajax({ //Start of POST AJAX
        method: 'POST',
        url: '/runCalculator',
        data: dataToSend,
        success: function(response){
            console.log('Inside POST Ajax ', response);
            getResults();
            getHistory(); 
        }
    })// END OF POST AJAX
    valueOne = ''
    valueTwo = ''
    symbolType = ''
    console.log('testing 3 vars after sent to server: ', valueOne, valueTwo, symbolType);
    
}//End of sendStoreData function

function displayHistory(historyArray) {// Start of displayHistory Function   
    let $compHis = $( '#computationsHistory' );
    $compHis.empty();
    document.getElementById("currentResults").innerHTML = ('Total: ' + (historyArray[0].result))
    for( let i=0; i< historyArray.length; i++ ){
        $compHis.append( '<li>' + historyArray[i].value1 + ' ' + historyArray[i].type + ' ' + historyArray[i].value2 + ' ' + '=' + ' ' + historyArray[i].result + '</li>')
    } // End for statement
} // End of displayHistory Function

function getResults() { // Start of getResults Function // Redundant and I thought it was not needed but when I remove this and everything related to it, the calculations do not work. will have to go through everything again when I have time.
    console.log('In getResults from URL /runCalculator');
    $.ajax({
        method: 'GET',
        url: '/runCalculator',
        success: function(response){
            console.log('back from server with: ', response);
        }
    });
} // End of getResults Function

function getHistory() { // Start of getHistory Function
    console.log('In getHistory from URL /historyLogData');
    $.ajax({
        method: 'GET',
        url: '/historyLogData',
        success: function(response){
            console.log('back from server with: ', response);
            displayHistory(response)
        }
    });
} // End of getHistory Function

function clearBtn() {//Clear results area.
    document.getElementById("currentResults").innerHTML = '0';
    console.log('inside clear');
    console.log(document.getElementById("currentResults").innerHTML);
    
    
}