// Rendering Templates with Data
// Advanced Templating
// express Middleware

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('screemIt', (text) => {
    return text.toUpperCase();
});

//Ini Bila ingin membuat penjelasan di console
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`
    console.log(log);
    //ini membuat file server.log || Jadi buat catatan pindahnya routes
    fs.appendFile('server.log', log + '\n');
    next();
})

//Ini untuk maintanance, bila terjadi perbaikan
// app.use((req, res, next) => {
//     res.render('maintanance.hbs');
// });

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        wellcomeMessage: 'Wellcome to my website',
        currentYear: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle Request'
    });
});
app.listen(port, () => {
    console.log(`Server is up on ${port} `);
});