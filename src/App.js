import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddContact from "./components/AddContact/AddContact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import UpdateContact from "./components/UpdateContact/UpdateContact";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/addContact"><AddContact /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/update/:todo"><UpdateContact /></Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
