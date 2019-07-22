const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log('Sever is Running on Port ' + PORT);
});