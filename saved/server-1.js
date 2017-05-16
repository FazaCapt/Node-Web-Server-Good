// Hello Express 16: 51

const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Faza!</h1>');
    res.send({
        name: 'Faza',
        likes: [
            'sepede',
            'Berenang',
            'Belajar'
        ]
    })
});

app.get('/about', (req, res) => {
    res.send('<h1>Hello About Route Page!</h1>');
})

//send Back ErrorMessage JSON
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle Request'
    });
});
app.listen(3000);