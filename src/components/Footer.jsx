import React from "react";
import { MDBFooter,MDBCol, MDBContainer, MDBRow, MDBAnimation, MDBListGroup, MDBListGroupItem, MDBIcon  } from "mdbreact";
import { Link } from 'react-router-dom';

let Footer = () => {
    return (
        <MDBFooter color="default-color-dark" className="font-small pt-2 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title">About Us</h5>
                        <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                        </p>
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">Company</h5>
                        <ul>
                        <li className="list-unstyled">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/aboutus">Blog</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/features">Features</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/contactus">ContactUs</Link>
                        </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="4">
                        
                        <h5 className="title">Location</h5>
                        <MDBListGroup style={{ width: "22rem" }} className ="mb-2 "success>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center text-dark" success >Sector 63, Bangalore
                                <MDBIcon icon="globe-asia" />
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center text-dark" success>9578951230
                                <MDBIcon icon="mobile" />
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center text-dark" success>info@gmail.com
                                <MDBIcon far icon="envelope" />
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                    <MDBCol md="2">
                    <MDBAnimation type="bounce" infinite className = "mt-5">
                        <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" />
                    </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    )
}
export default Footer;