const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// this variable keeps track of the payments
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
});

// when the user submits the form, the payment variable increases and it is displayed back to the client
app.post("/submit", (req, res) => {
    paymentCounter++;
    res.send(`<h1>Thanks. Payment number: ` + paymentCounter + `</h1>`);
});

// server listens for new clients
app.listen(PORT, function (err) {
    if (err) console.error(err);
    console.log("Server listening on PORT", PORT);
});