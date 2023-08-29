const express = require('express');
const mongoose = require('mongoose')
const app = express();
const jwt = require('jsonwebtoken')


// middleware
app.use(express.static('public'));


// view engine
app.set('view engine', 'ejs');

app.get('/api', (req, res) => {
    res.json({
        message: 'hi'
    });
});

app.listen(3000, () => console.log('server started'));


