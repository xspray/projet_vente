import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const UnePage = props => {

  return (

    <div>

    <Link to='/detail/0'>Détail zéro</Link>

    <button onClick={ () => props.history.push('/detail/push')}>par push</button>

      <h1>Une page</h1>

    </div>

  )

}

const chapeaux = () => (
  <div>
    <h1>Une page</h1>
  </div>
);

const AutrePage = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Une autre page : {props.match.params.refArticle}</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route path="/chapeaux" component={chapeaux} />

      <Route path="/detail/:refArticle" component={AutrePage} />
    </Switch>
  );
}

export default App;
