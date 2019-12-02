import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import mongoose from 'mongoose';

import { styled } from "@material-ui/core/styles";

const StyledCard = styled(Card)({
    marginBottom: 5
});

const StyledCardContent = styled(CardContent)({
    textAlign: "center"
})

const Answer = ({answerFromServer}) => {
   
    return (
    answerFromServer.map(a => ( 
        <StyledCard key={a._id}>
        <StyledCardContent>
            {String(new mongoose.Types.ObjectId(a._id).getTimestamp())}<br />
            Name: {a.name } Email: {a.email}<br />
            {a.text}
        </StyledCardContent>

    </StyledCard>
     ))
    );
}
 
export default Answer;