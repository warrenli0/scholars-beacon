const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/scholars-database', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Successfully connected to MongoDB!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
