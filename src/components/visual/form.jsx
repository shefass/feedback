import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const Form = ({name, hendleNameInput, email, hendleEmailInput, feedback, hendleFeedBackInput, hendleSubmit, error, success}) => {
 
  return (
    <Card>
      <CardContent>Form here!</CardContent>
      <form>
        <TextField
          label="Name"
          type="search"
          margin="normal"
          value={name} 
          onChange={value => hendleNameInput(value)}
        />
        <TextField
          label="Email "
          type="search"
          margin="normal"
          value={email}
          onChange={value => hendleEmailInput(value)}
        />
        <br />
        <TextField
          id="standard-multiline-flexible"
          label="Please write your feedback!"
          multiline
          value={feedback}
          onChange={value => hendleFeedBackInput(value)}
          margin="normal"
        />
      </form>
      <Button variant="contained" color={error === ""? "primary":"secondary"} onClick={hendleSubmit}>
        {success ? "Thank you for your feedback! Good luck": error === "" ? "Send": error}
      </Button>
    </Card>
  );
};

export default Form;
