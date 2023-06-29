const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const patent = require('./routes/patent');
const trademark = require('./routes/trademark');
const design = require('./routes/design');

app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

connectDB();

app.use('/patent', patent);
app.use('/trademark', trademark);
app.use('/design', design);

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})
