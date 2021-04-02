import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call the server
    console.log("submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            handleChange={this.handleChange}
            label="Email"
            value={data.email}
            errors={errors.email}
            type="email"
          />
          <Input
            name="password"
            handleChange={this.handleChange}
            label="Password"
            value={data.password}
            errors={errors.password}
            type="password"
          />
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
