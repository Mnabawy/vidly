import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
  };

  email = React.createRef();
  password = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // let username = this.email.current.value;
    // let pasword = this.password.current.value;

    // console.log(`username : ${username} \npasword : ${pasword}`);
  };

  handleChange = ({currentTarget}) => {
    let account = { ...this.state.account };
    account[currentTarget.name] = currentTarget.value;
    this.setState({ account: account });
  };
  render() {
      const {account } = this.state
    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email1">Email address</label>
            <input
              autoFocus
              value={account.email}
              name="email"
              onChange={this.handleChange}
              ref={this.username}
              type="email"
              className="form-control"
              id="Email1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              name="password"
              value={account.passwod}
              onChange={this.handleChange}
              ref={this.password}
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
