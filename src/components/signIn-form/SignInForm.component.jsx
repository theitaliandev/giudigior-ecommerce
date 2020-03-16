import React from "react";
import { signIn } from "../../firebase/firebase";

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
          <input
            name="email"
            value={this.state.email}
            type="email"
            onChange={this.handleChange}
          />
          <input
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
          />
          <input type="submit" value="Login" />
          <button onClick={signIn}>SignIn With Google</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
