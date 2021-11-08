import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/index";
import Home from "./pages/Home/index";
import CreateNFT from "./pages/CreateNFT/index";
import Item from "./pages/Item/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Profile from "./pages/Profile/index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/header" component={Header} />
          <Route path="/" exact component={Home} />
          <Route path="/create-nft" component={CreateNFT} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/nft/:nftId" component={Item} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
