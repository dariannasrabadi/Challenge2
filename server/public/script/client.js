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
let dataToSend;
/** End Universal Variables **/

function storeDataAdd() {//Start of Add function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'add')
    console.log('Inside add function', dataToSend);
}//End of Add function

function storeDataMinus() {//Start of Minus function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'minus')
    console.log('Inside minus function', dataToSend);
}//End of Minus function

function storeDataDivide() {//Start of Divide function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'divide')
    console.log('Inside divide function', dataToSend);
}//End of Divide function

function storeDataMultiply() {//Start of Multiply function
    dataToSend = new Calculation($('#valueOne').val(), $('#valueTwo').val(), 'multiply')
    console.log('Inside multiply function', dataToSend);
}//End of Multiply function