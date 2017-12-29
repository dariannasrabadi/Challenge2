$(document).ready(start);

function start() {//Start of document listener
$('#add').on('click', storeDataAdd);
$('#minus').on('click', storeDataMinus);
$('#divide').on('click', storeDataDivide);
$('#multiply').on('click', storeDataMultiply);  
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
/** End Universal Variables **/

/*********** Following functions are the same with just the "type" being different per function. **************/

function storeDataAdd() {//Start of Add function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'add')
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
}//End of Add function

function storeDataMinus() {//Start of Minus function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'minus')
    console.log('Inside minus function', dataToSend);
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
}//End of Minus function

function storeDataDivide() {//Start of Divide function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'divide')
    console.log('Inside divide function', dataToSend);
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
}//End of Divide function

function storeDataMultiply() {//Start of Multiply function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'multiply')
    console.log('Inside multiply function', dataToSend);
    $.ajax({ //Start of POST AJAX
        method: 'POST',
        url: '/runCalculator',
        data: dataToSend,
        success: function(response){
            console.log('Inside POST Ajax', response);
            getResults();
            getHistory(); 
        }
    })// END OF POST AJAX
}//End of Multiply function

/** END OF SAME FUNCTIONS DIFFERENT TYPES **/

function displayHistory(historyArray) {// Start of displayHistory Function   
    let $compHis = $( '#computationsHistory' );
    $compHis.empty();
    $('#currentResults').empty();
    $('#currentResults').append('<h2> Total: ' + (historyArray[0].result) + '</h2>')
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
    $('#currentResults').html('<h2>0</h2>');
    $('#valueOne').val('');
    $('#valueTwo').val('');
}