import React from "react";
import { signIn } from "../../firebase/firebase";

import FormInput from "../form-input/FormInput.component";

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
      <div>
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
          <input type="submit" value="Login" />
          <button onClick={signIn}>SignIn With Google</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
