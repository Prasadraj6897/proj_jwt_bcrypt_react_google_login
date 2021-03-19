import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn, MDBCardImage, MDBCardTitle, MDBCardText
} from "mdbreact";


let HomePageCorausel = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Others/documentation/img%20(136)-mini.jpg"
                            alt="First slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Others/documentation/img%20(137)-mini.jpg"
                            alt="Second slide"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
                            alt="Third slide"
                            />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    )
}

export default HomePageCorausel;