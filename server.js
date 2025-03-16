const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const fs = require('fs')

let paymentCounter = 0;

// Without middleware
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

app.post("/submit", (req, res) => {
    res.send(`<h1>Thanks</h1>`);
    paymentCounter++;
    fs.writeFile('payments.txt', paymentCounter + "", (err) => {
        if (err) throw err;
    })
});

app.listen(PORT, function (err) {
    if (err) console.error(err);
    console.log("Server listening on PORT", PORT);
});