import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import Login from "./Components/Login"
import AddFriend from "./Components/AddFriend"
import FriendList from "./Components/FriendList"

function App() {
  return (
    <div className="App">
      <Router>
        <h2>Client Auth Project</h2>
        <Link to="/">Login</Link>
        <Link to="/login">Login</Link>
        <Link to="/friendlist">FriendList</Link>
        <Link to="/add/friend">Add Friend</Link>
        <Link to="/friendlist">Logout</Link>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/login">
            <Redirect to="/"></Redirect>
          </Route>
          <Route path="/friendlist">
            <FriendList/>
            </Route>
          <Route path="/add/friend">
            <AddFriend/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// Use the mockup provided to build out a simple login component.
// In App.js, add a route to allow this component to be displayed when navigating to / or /login
// When submitting your login form, save the token returned to localStorage and redirect to the FriendsList route.