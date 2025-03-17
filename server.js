const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// this variable keeps track of the number of payments
let paymentCounter = 0;

// send homepage html file to the client
app.get('/', function (req, res) {
    const options = {
        root: path.join(__dirname)
    };
    const fileName = 'homepage.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });

    // by default, the code prints the current time every second. this is a relatively load low
    setInterval(printCurrentTime, 1000);
});

// when the user submits the form, the payment variable increases and it is displayed back to the client
app.post("/submit", (req, res) => {
    paymentCounter++;
    res.send(`<h1>Thanks. Payment number: ` + paymentCounter + `</h1>`);
});

// this is called when the user presses the "low load" button
app.post("/lowLoad", (req, res) => {
    // prints the current time every second. this is a relatively load low
    setInterval(printCurrentTime, 1000);

    // returns the current page to the client
    const options = {
        root: path.join(__dirname)
    };
    const fileName = 'homepage.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

// calls a method every 1 miliseconds and redirects the user to the same page
app.post("/highLoad", (req, res) => {
    // prints the current time every milisecond. this is a relatively high low
    setInterval(printCurrentTime, 1);

    // returns the current page to the client
    const options = {
        root: path.join(__dirname)
    };
    const fileName = 'homepage.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

// prints the current time to the console
function printCurrentTime()
{
    var date_time = new Date();
    console.log(date_time);
}

// server listens for new clients
app.listen(PORT, function (err) {
    if (err) console.error(err);
    console.log("Server listening on PORT", PORT);
});