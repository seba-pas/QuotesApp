import "./App.scss";

import Quotes from "./Components/Quotes";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Quotes} />
      </Switch>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
