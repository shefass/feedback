import React, { Component } from "react";
import axios from 'axios';
import mongoose from 'mongoose';

import Visual from "./visual/index";

class Logic extends Component {
  state = {
    name: "",
    email: "",
    feedback: "",
    error: "",
    answerFromServer: null
  };

  hendleNameInput = e => {
    this.setState({ name: e.target.value, error: "" });
  };
  hendleEmailInput = e => {
    this.setState({ email: e.target.value, error: "" });
  };
  hendleFeedBackInput = e => {
    this.setState({ feedback: e.target.value, error: "" });
  };
  
  //

    //console.log(new mongoose.Types.ObjectId(response.data._id).getTimestamp() );

  validateInput = () => {
    if(this.state.name === ""){
      this.setState({error: "Please write your name!"})
      return 1;
    } else if(this.state.name.length < 2) {
      this.setState({error: "Your name only one latter?"})
      return 1;
    } else if(this.state.name.length > 50){
      this.setState({error: "Your name longer then 50 letters?"})
      return 1;
    } 
    if(this.state.email === ""){
      this.setState({error: "Please write your email!"})
      return 1;
    } else if(this.state.email.length < 8 || this.state.email.search("@") === -1){
      this.setState({error: "Please write your real email!"})
      return 1;
    }
    if(this.state.feedback === ""){
      this.setState({error: "Please write your feedback!"})
      return 1;
    } else if(this.state.feedback.length > 5000){
      this.setState({error: "Your feedback to long, please make it shorter."})
      return 1;
    }
  }

  hendleSubmit = () => {
    if(this.validateInput()) return;
    console.log("submited");
   /* axios.post('http://localhost:4000/api/feedback', {
      name: this.state.name,
      email: this.state.email,
      text: this.state.feedback
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); */
  };

  render() {
    
    const { name, email, feedback, error} = this.state;
    return (
      <Visual
        name={name}
        hendleNameInput={this.hendleNameInput}
        email={email}
        hendleEmailInput={this.hendleEmailInput}
        feedback={feedback}
        hendleFeedBackInput={this.hendleFeedBackInput}
        hendleSubmit={this.hendleSubmit}
        error={error}
      />
    );
  }
}

export default Logic;
