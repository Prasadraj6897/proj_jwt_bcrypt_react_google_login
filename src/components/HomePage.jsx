import React from "react"
import NavBar from "./NavBar"
import {MDBContainer} from  "mdbreact";
import Footer from "./Footer"
import 'mdbreact/dist/css/mdb.css'
import HomePage_top from "./HomePAge_top"
import HomePageMiddle from "./HomePageMiddle"
import HomePageCorausel from "./HomePageCorausel"
import ScrollUpButton from "react-scroll-up-button";
import CompleteHook from "./CountUp"


let HomePage = () =>{

    return (
        <div>
            
            <NavBar />
            <HomePage_top />
            <HomePageMiddle />
            <HomePageCorausel />
            <CompleteHook />
            <Footer />
            <ScrollUpButton style={{width: 30, height:30}} ToggledStyle={{right: 15}}/>
        </div>
    )
}
export default HomePage;