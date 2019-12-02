import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { styled } from "@material-ui/core/styles";

const StyledCard = styled(Card)({
  marginBottom: 5
});

const StyledCardContent = styled(CardContent)({
  textAlign: "center"
});

const StyledName = styled(TextField)({
  marginRight: 2
})

const StyledFeedback = styled(TextField)({
  paddingBottom: 10
});

const Form = ({
  name,
  hendleNameInput,
  email,
  hendleEmailInput,
  feedback,
  hendleFeedBackInput,
  hendleSubmit,
  error,
  success
}) => {
  return (
    <StyledCard>
      <StyledCardContent>

      <StyledName
        label="Your name"
        type="search"
        margin="normal"
        
        value={name}
        onChange={value => hendleNameInput(value)}
      />
      <TextField
        label="Your email "
        margin="normal"
        value={email}
        onChange={value => hendleEmailInput(value)}
      />
      <br />
      <StyledFeedback
        id="standard-multiline-flexible"
        label="Please write your feedback here!"
        multiline
        fullWidth
        value={feedback}
        onChange={value => hendleFeedBackInput(value)}
        margin="normal"
      />
      <br />
      <Button
        variant="contained"
        color={error === "" ? "primary" : "secondary"}
        onClick={success? null:hendleSubmit}
      >
        {success
          ? "Thank you for your feedback! Good luck"
          : error === ""
          ? "Send"
          : error}
      </Button>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Form;
