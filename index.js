const mongoose = require('mongoose');
const express = require('express');
const app = express();
var cors = require('cors')
const feedbacks = require('./feedbacksRout');

const MONGO_DB_ADDRESS = require('./CONFIQ');

mongoose.connect(MONGO_DB_ADDRESS, { useUnifiedTopology: true, useNewUrlParser: true }) 
    .then(()=> console.log('Connected to MongoDb...'))  
    .catch(err => console.error('Coud not conect to db', err)); 

app.use(express.json());
app.use(cors())
app.use('/api/feedback', feedbacks);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));