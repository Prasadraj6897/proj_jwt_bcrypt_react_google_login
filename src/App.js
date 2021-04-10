import './App.css';
import React from "react";

// import HomePage from "./components/HomePage"
import Routes from "./components/Router"

import {Provider} from "react-redux"
import {store} from "./redux/store"
import UserRouter from "./components/userRouter"
function App() {
  return (
     
                <Provider store = {store}>
                    <UserRouter />
                      
                </Provider>
              
   // 
          //     <Routes />
          // 
  );
}

export default App;
