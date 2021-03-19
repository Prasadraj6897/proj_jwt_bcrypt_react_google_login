import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage"

import Feautures from "./Feautures"
import AboutUs from "./AboutUs"
import Pricing from "./Pricing"
// import NavBar from "./NavBar"


let Routes = () =>{
    return (
        <React.Fragment>
            <Router>
                {/* <NavBar /> */}
                    <Switch>
                        <Route exact path = "/"  component = {HomePage} />
                        <Route  path = "/features"  component = {Feautures} />
                        <Route  path = "/aboutus"  component = {AboutUs} />
                        <Route  path = "/pricing"  component = {Pricing} />
                    </Switch>
                
                </Router>
        </React.Fragment>
    )
}
export default Routes;
