const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/cervezas'));
app.use('/', require('./routes/users'));

module.exports = {
    app,
    PORT
};
