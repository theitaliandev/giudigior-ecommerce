import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/homepage/shop/ShopPage.component";
import Header from "./components/header/Header.component";
import { auth, createUserDocument } from "./firebase/firebase";

import "./App.css";
import SignIn from "./pages/homepage/signin/SignIn.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserDocument(user);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: user });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
        {/* <Route path="/hats" component={HatsPage} />
      <Route path="/jackets" component={JaketsPage} />
      <Route path="/sneakers" component={SneakersPage} />
      <Route path="/womens" component={WomensPage} />
      <Route path="/mens" component={MensPage} /> */}
      </>
    );
  }
}

export default App;
