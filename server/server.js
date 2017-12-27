const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calculation = require('./calculations/calculator');
const history = require('./historyLog/log');
const port = 43770;

app.use(express.static('server/public')); //what to display on the hosted page
app.use(bodyParser.urlencoded({extended:true}));



//POST & GET Area
app.post('/runCalculator', function(req,res){
    console.log('/runCalculator POST from client hit: ', req.body);
    calculation.computation(req.body);
    history.addHistory(req.body)
    console.log(history.historyLog);
    res.sendStatus(201);    
})

app.get('/runCalculator', function(req,res){
    console.log('/runCalculator GET back to client: ', calculation.compResults);
    res.send(calculation.compResults)        
})

app.get('/historyLogData', function(req,res){
    console.log('/historyLogData GET back to client: ', history.historyLog);
    res.send(history.historyLog)        
})
//End POST & GET Area



app.listen(port, function(){ //listen to host server on port
    console.log('server up on port #', port);
})