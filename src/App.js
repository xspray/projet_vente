import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shopping/shopping.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/Shopping' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
