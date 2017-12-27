$(document).ready(start);

function start() {//Start of document listener
$('#add').on('click', storeDataAdd);
$('#minus').on('click', storeDataMinus);
$('#divide').on('click', storeDataDivide);
$('#multiply').on('click', storeDataMultiply);   

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
let dataReceived; //Data from server to be displayed
let dataHistory; //Data from server of total computations.
/** End Universal Variables **/

/*********** Following functions are the same with just the "type" being different per function. **************/

function storeDataAdd() {//Start of Add function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'add')
    console.log('Inside add function', dataToSend);
    $.ajax({ //Start of POST AJAX
        Method: 'POST',
        url: '/runCalculator',
        data: dataToSend,
        success: function(response){
            console.log('Inside POST Ajax ', response);
            //will place get ajax function inside of this. 
        }
    })// END OF POST AJAX
}//End of Add function

function storeDataMinus() {//Start of Minus function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'minus')
    console.log('Inside minus function', dataToSend);
    $.ajax({ //Start of POST AJAX
        Method: 'POST',
        url: '/runCalculator',
        data: dataToSend,
        success: function(response){
            console.log('Inside POST Ajax ', response);
            //will place get ajax function inside of this. 
        }
    })// END OF POST AJAX
}//End of Minus function

function storeDataDivide() {//Start of Divide function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'divide')
    console.log('Inside divide function', dataToSend);
    $.ajax({ //Start of POST AJAX
        Method: 'POST',
        url: '/runCalculator',
        data: dataToSend,
        success: function(response){
            console.log('Inside POST Ajax ', response);
            //will place get ajax function inside of this. 
        }
    })// END OF POST AJAX
}//End of Divide function

function storeDataMultiply() {//Start of Multiply function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'multiply')
    console.log('Inside multiply function', dataToSend);
    $.ajax({ //Start of POST AJAX
        Method: 'POST',
        url: '/runCalculator',
        data: dataToSend,
        success: function(response){
            console.log('Inside POST Ajax ', response);
            //will place get ajax function inside of this. 
        }
    })// END OF POST AJAX
}//End of Multiply function

