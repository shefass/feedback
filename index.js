const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); //.env

const feedbacks = require('./feedbacksRout');


mongoose.connect(process.env.MONGO_DB_ADDRESS, { useUnifiedTopology: true, useNewUrlParser: true }) 
    .then(()=> console.log('Connected to MongoDb...'))  
    .catch(err => console.error('Coud not conect to db', err)); 

    
app.use(express.json());
app.use(cors())
app.use('/api/feedback', feedbacks);

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Listening on port ${port}...`));