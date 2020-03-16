import React from "react";
import { signIn } from "../../firebase/firebase";

import "./signIn.styles.scss";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Login</CustomButton>
            <CustomButton onClick={signIn} isGoogleSignIn>
              SignIn With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
