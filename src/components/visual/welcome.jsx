import React from 'react';

import { styled } from "@material-ui/core/styles";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const StyledCard = styled(Card)({
    marginBottom: 5
});

const StyledCardContent = styled(CardContent)({
    textAlign: "center"
})

const Welcome = () => {
    return ( 
        <StyledCard>
            <StyledCardContent>
                Welcome to a Feedback book. Please leave your feedback to me!
            </StyledCardContent>
        </StyledCard>

     );
}
 
export default Welcome;