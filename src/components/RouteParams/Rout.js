import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";

const Home = () => {
  return <h2>home...</h2>;
};

const Dummy = () => {
  return <h2>Dummy...</h2>;
};

const Rout = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <BlogDetails />
          </Route>
          <Route exact path="/dummy">
            <Dummy />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Rout;
