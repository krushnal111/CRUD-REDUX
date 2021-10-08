import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/adduser" component={AddUser} exact />
        <Route path="/updateuser/:id" component={UpdateUser} exact />
      </Switch>
    </div>
  );
}

export default App;
