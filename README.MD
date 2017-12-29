## To Do

[x] Create readme, do gitinit & npm init.

[x] Create files needed for client side.

## Client Side

[x] Create Basic HTML layout and link necessary files in order

[x] Create 2 input fields & 4 buttons containing "+, -, / and *" 

[x] Create a clear button (designed to reset the calculations).

[x] Add history log area

[x] Create basic layout/style for client side

[x] Create document ready and place into an object the values from input fields and the button clicked

[x] Create display area for current results (This is what the clear button will reset)

[x] Send data for processing to server via POST & ajax

[x] Display results via GET to the results and history log area. 

[x] make the clear button reset the displayed result

## Server Side

[x] Create server side files and nodes. 

[x] Install Express & Body-Parser

[x] Create consts then the basic app.use/listen/post 

[x] Create a calculations function and a storage area for history logs and future use.

[x] Grab the POST request from client and run through the function (Console log to see the POST received and function result)

[x] Store the result into the history variable

[x] Send back the results via GET

## Hard Mode

[x] Convert the input fields for the two values to Numerical Buttons. 
[ ] Equal sign that sends the values and desired calculation to the server for the desired answer

## Pro Mode 

    Allow a user to clear the history by clicking on a button. Technically this shouldn't be a GET or a POST. Look into making a DELETE request!
Allow a user to click on an entry in the History list to re-run that calculation. This should display the answer on the calculator interface like a normal calculation.
Anything else you can think of!