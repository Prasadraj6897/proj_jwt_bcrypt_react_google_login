import logo from './logo.svg';
import './App.css';
import React from "react";

// import HomePage from "./components/HomePage"
import Routes from "./components/Router"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./components/HomePage"

import Feautures from "./components/Feautures"
import AboutUs from "./components/AboutUs"
import Pricing from "./components/Pricing"

function App() {
  return (
      <Routes />
  );
}

export default App;
