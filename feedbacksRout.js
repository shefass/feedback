const express = require('express');
const router = express.Router();


const { Feedback } = require('./feedbackModel')

router.get('/', async (req, res) => {
    const feedbacks = await Feedback.find().sort("-_id"); //sorts by time of creation, - means descending order.
    console.log(feedbacks);
   
    res.send(feedbacks); 
});

router.post('/', async (req, res) => {

   let feedback = new Feedback({
        name: req.body.name,
        email: req.body.email,
        text: req.body.text
    });
    feedback = await feedback.save();

    res.send(feedback); 
    
    //console.log(feedback._id.Time())
   
});

module.exports = router;