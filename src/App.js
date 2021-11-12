import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import PizzaForm from "./Components/PizzaForm";
import Home from "./Components/Home";
import './App.css';

const App = () => {
  return (
    <div className='hero-header'>
      <Switch>
      <Route exact path="/">
        <Home />
        </Route>
      <Route exact path="/pizza">
        <PizzaForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
