import React, { Component } from "react";

// importing from global styles
import { AppWrapper } from "./components/Global/styled";

// Set up routes
import { Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// importing component pages for routes
import DailyLog from "./components/DailyLog";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import FoodItem from "./components/FoodItem";
import Onboarding from "./components/Onboarding";

<<<<<<< HEAD



library.add(faSearch);

function App() {
  return (
    <AppWrapper>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
      <Route path="/onboarding" exact component={Onboarding} />
      <Route path="/register" exact component={Register} />
      <Route path="/food_item" component={FoodItem} />
   
    </AppWrapper>
  );
=======
// setting up private route to make sure only authenticated users are in our home page
import PrivateRoute from "./components/PrivateRoute";
// import RequireAuth from "./components/Auth";

// imports for toast wrapper 
import { ToastProvider } from "react-toast-notifications";


class App extends Component {
  render() {
    return (
      <ToastProvider number="5000"> 
      <AppWrapper>
        <PrivateRoute exact path="/" component={DailyLog} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/onboarding" component={Onboarding} />
       
      </AppWrapper>
      </ToastProvider>
    );
  }
>>>>>>> master
}

export default App;
