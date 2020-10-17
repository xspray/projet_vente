import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopping/shopping.component";
import LoginEtInscription from "./pages/login-et-inscription/login-et-inscription.component";
import Header from "./components/header/header.component";
import { auth, creerUserProfilDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  deconnexionDeAuth = null;

  componentDidMount() {
    this.deconnexionDeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creerUserProfilDocument(userAuth);

        userRef.onSnapshot((capture) => {
          this.setState(
            {
              currentUser: {
                id: capture.id,

                ...capture.data(),
              },
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.deconnexionDeAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/shopping" component={ShopPage} />

          <Route path="/inscription" component={LoginEtInscription} />
        </Switch>
      </div>
    );
  }
}

export default App;
