/*
Project startet on 13.08.2017
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to Database
mongoose.connect(config.database);

mongoose.connection.on('connected', function () {
   console.log('Connected to Database' + config.database);
});
mongoose.connection.on('error', function (err) {
    console.log('Database Error' + err);
});

const app = express();
const port = 3000;
const users = require('./routes/users');

app.use(cors());//CORS Middleware
app.use(express.static(path.join(__dirname, 'public')));//Set static folder
app.use(bodyParser.json());//Body Parser Middleware
app.use(passport.initialize());//Passport Middleware
app.use(passport.session());

require('./config/passport')(passport);
app.use('/users', users);

//Index Route
app.get('/', function (req, res) {
    res.send("Invalid Endpoint");
});


//Start Server
app.listen(port, function () {
    console.log("Server startet on port: " + port);
});
