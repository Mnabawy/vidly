import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    let errors = {};
    error.details.map((item) => (errors[item.path[0]] = item.message));
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
    // console.log(error);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call the server
    console.log("submitted");
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
