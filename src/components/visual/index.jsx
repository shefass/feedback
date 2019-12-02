import React from "react";

import { styled } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Form from "./form";
import Welcome from "./welcome";
import Answer from "./answer";

const StyledContainer = styled(Container)({
  
  paddingTop: 10,
  paddingBottom: 10
  
});

const Visual = ({
  name,
  hendleNameInput,
  email,
  hendleEmailInput,
  feedback,
  hendleFeedBackInput,
  hendleSubmit,
  error,
  answerFromServer,
  success
}) => {
  return (
    <StyledContainer maxWidth="sm">
      <Welcome />
      <Form
        name={name}
        hendleNameInput={hendleNameInput}
        email={email}
        hendleEmailInput={hendleEmailInput}
        feedback={feedback}
        hendleFeedBackInput={hendleFeedBackInput}
        hendleSubmit={hendleSubmit}
        error={error}
        success={success}
      />
      <Answer answerFromServer={answerFromServer} />
    </StyledContainer>
  );
};

export default Visual;
