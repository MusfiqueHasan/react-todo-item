import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TodoDetails from './components/TodoDetails/TodoDetails';



function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/details/:todoId"><TodoDetails /></Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
