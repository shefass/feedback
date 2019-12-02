import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import mongoose from 'mongoose';


const Answer = ({answerFromServer}) => {
   
    return (
    answerFromServer.map(a => ( 
        <Card key={a._id}>
        <CardContent>
            {String(new mongoose.Types.ObjectId(a._id).getTimestamp())}<br />
            Name: {a.name } Email: {a.email}<br />
            {a.text}
        </CardContent>

    </Card>
     ))
    );
}
 
export default Answer;