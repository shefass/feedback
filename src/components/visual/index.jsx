import React from "react";
import Form from "./form";
import Welcome from "./welcome";
import Answer from "./answer";

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
    <React.Fragment>
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
      <Answer answerFromServer={answerFromServer}/>
    </React.Fragment>
  );
};

export default Visual;
