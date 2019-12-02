import React, { Component } from "react";
import axios from "axios";

import Visual from "./visual/index";



class Logic extends Component {
  state = {
    name: "",
    email: "",
    feedback: "",
    error: "",
    answerFromServer: [],
    success: false
  };

  componentDidMount() {
    this.getPastFeedbacks();
  }
  hendleNameInput = e => {
    this.setState({ name: e.target.value, error: "", success: false });
  };
  hendleEmailInput = e => {
    this.setState({ email: e.target.value, error: "", success: false });
  };
  hendleFeedBackInput = e => {
    this.setState({ feedback: e.target.value, error: "", success: false });
  };

  getPastFeedbacks = () => {
    axios
      .get(process.env.REACT_APP_SERVER_ADDRESS)
      .then(response => {
        // handle success
        this.setState({ answerFromServer: response.data });
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  validateInput = () => {
    if (this.state.name === "") {
      this.setState({ error: "Please write your name!" });
      return 1;
    } else if (this.state.name.length < 2) {
      this.setState({ error: "Your name only one latter?" });
      return 1;
    } else if (this.state.name.length > 50) {
      this.setState({ error: "Your name longer then 50 letters?" });
      return 1;
    }
    if (this.state.email === "") {
      this.setState({ error: "Please write your email!" });
      return 1;
    } else if (
      this.state.email.length < 8 ||
      this.state.email.search("@") === -1
    ) {
      this.setState({ error: "Please write your real email!" });
      return 1;
    }
    if (this.state.feedback === "") {
      this.setState({ error: "Please write your feedback!" });
      return 1;
    } else if (this.state.feedback.length > 5000) {
      this.setState({
        error: "Your feedback is to long, please make it shorter."
      });
      return 1;
    }
  };
  
  hendleSubmit = () => {
    if (this.validateInput()) return;
    console.log("submited");
    axios
      .post(process.env.REACT_APP_SERVER_ADDRESS, {
        name: this.state.name,
        email: this.state.email,
        text: this.state.feedback
      })
      .then(response => {
        
        if (response.status === 200) {
          let copyOfArray = this.state.answerFromServer.slice();
          copyOfArray.unshift(response.data);
          this.setState({
            success: true,
            answerFromServer: copyOfArray,
            feedback: ""
          })
        } else {
          this.setState({
            success: false,
            error: "Server connection error" + response.status
          });
        }

        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
   
    const {
      name,
      email,
      feedback,
      error,
      answerFromServer,
      success
    } = this.state;
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
        answerFromServer={answerFromServer}
        success={success}
      />
    );
  }
}

export default Logic;
