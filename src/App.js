import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

require("dotenv").config();

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    // auth 리스너 불러옴.
    auth.onAuthStateChanged((authUser) => {
      console.log("The USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
