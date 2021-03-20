import './App.css';
import React from "react";

// import HomePage from "./components/HomePage"
import Routes from "./components/Router"

import {Provider} from "react-redux"
import {store} from "./redux/store"

function App() {
  return (
      
      // <div className="App">
          <Provider store = {store}>
              <Routes />
          </Provider>
          
  //  </div>
  );
}

export default App;
