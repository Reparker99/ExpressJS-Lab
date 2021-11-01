const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.post('/contact-form', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    res.send('Thank you for submitting your contact form.');
});

app.use(express.static(path.join(__dirname, '../public')));

/* app.get('/order/:id', (req, res) => {
    let id = req.params.id;
    let email = req.query.email;
    res.send(`Your name is ${id} and email is ${email}`);
});*/

app.listen(3000);