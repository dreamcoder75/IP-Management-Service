const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const patent = require('./routes/api/patent');
const trademark = require('./routes/api/trademark');
const design = require('./routes/api/design');
const fileupload = require('./routes/api/fileupload');
const cors = require("cors");

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

connectDB();

app.use('/api/patent', patent);
app.use('/api/trademark', trademark);
app.use('/api/design', design);
app.use('/api/fileupload', fileupload);

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
    
})
