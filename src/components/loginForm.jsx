import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    //* create an empty obj
    //* check every input element
    //* modify the state's error key
    let { account } = this.state;
    let errors = {};
    if (account.email.trim() === "") errors.email = "email is required";
    if (account.password.trim() === "")
      errors.password = "password is required";
    return Object.keys(errors).length === 0 ? null : errors;
    //!  when errors = {} in that case validate func will return null
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call the server
    console.log("submitted");
  };

  validateProperty = ({ name, value }) => {
    if (name === "email") {
      if (value.trim() === "") return "email is required.";
    }
    if (name === "password") {
      if (value.trim() === "") return "password is required.";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    let errors = { ...this.state.errors };
    let errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    let account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            handleChange={this.handleChange}
            label="Email"
            value={account.email}
            errors={errors.email}
            type="email"
          />
          <Input
            name="password"
            handleChange={this.handleChange}
            label="Password"
            value={account.password}
            errors={errors.password}
            type="password"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
