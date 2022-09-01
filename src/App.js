import "./App.scss";
import Quotes from "./Components/Quotes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Random from "./Components/Random";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Quotes} />
        <Route exact path="/random" component={Random} />
      </Switch>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
