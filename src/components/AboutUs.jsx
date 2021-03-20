import React, {useEffect, useState} from "react"
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { Line } from "react-chartjs-2";


let AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [dataLine, setdataLine] = useState({labels: ["January", "February", "March", "April", "May", "June", "July"],
                                        datasets: [
                                        {
                                            label: "My First dataset",
                                            fill: true,
                                            lineTension: 0.3,
                                            backgroundColor: "rgba(225, 204,230, .3)",
                                            borderColor: "rgb(205, 130, 158)",
                                            borderCapStyle: "butt",
                                            borderDash: [],
                                            borderDashOffset: 0.0,
                                            borderJoinStyle: "miter",
                                            pointBorderColor: "rgb(205, 130,1 58)",
                                            pointBackgroundColor: "rgb(255, 255, 255)",
                                            pointBorderWidth: 10,
                                            pointHoverRadius: 5,
                                            pointHoverBackgroundColor: "rgb(0, 0, 0)",
                                            pointHoverBorderColor: "rgba(220, 220, 220,1)",
                                            pointHoverBorderWidth: 2,
                                            pointRadius: 1,
                                            pointHitRadius: 10,
                                            data: [65, 59, 80, 81, 56, 55, 40]
                                        },
                                        {
                                            label: "My Second dataset",
                                            fill: true,
                                            lineTension: 0.3,
                                            backgroundColor: "rgba(184, 185, 210, .3)",
                                            borderColor: "rgb(35, 26, 136)",
                                            borderCapStyle: "butt",
                                            borderDash: [],
                                            borderDashOffset: 0.0,
                                            borderJoinStyle: "miter",
                                            pointBorderColor: "rgb(35, 26, 136)",
                                            pointBackgroundColor: "rgb(255, 255, 255)",
                                            pointBorderWidth: 10,
                                            pointHoverRadius: 5,
                                            pointHoverBackgroundColor: "rgb(0, 0, 0)",
                                            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                                            pointHoverBorderWidth: 2,
                                            pointRadius: 1,
                                            pointHitRadius: 10,
                                            data: [28, 48, 40, 19, 86, 27, 90]
                                        }
                                        ]})

    return (
        <MDBContainer className="mt-10">
            <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBCard reverse>
                                <MDBView hover cascade waves>
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <MDBMask overlay="white-slight" className="waves-light" />
                                </MDBView>
                                <MDBCardBody cascade className="text-center">
                                    <h2 className="font-weight-bold">
                                        <a href="#!">Title of the news</a>
                                    </h2>
                                    <p>
                                        Written by
                                        <a href="#!">
                                            <strong>Abby Madison</strong>
                                        </a>
                                        , 26/08/2018
                                    </p>
                                    <MDBBtn className="btn-fb waves-light">
                                        <MDBIcon fab icon="facebook-f" className="pr-2" />
                                        Facebook
                                    </MDBBtn>
                                    <span className="counter">46</span>
                                    <MDBBtn className="btn-tw waves-light">
                                        <MDBIcon fab icon="twitter" className="pr-2" />
                                        Twitter
                                    </MDBBtn>
                                    <span className="counter">22</span>
                                    <MDBBtn className="btn-gplus waves-light">
                                        <MDBIcon fab icon="google-plus-g" className="pr-2" />
                                        Google
                                    </MDBBtn>
                                    <span className="counter">31</span>
                                    <MDBBtn color="default" className="waves-light">
                                        <MDBIcon icon="comments" className="pr-2" />
                                        Comments
                                    </MDBBtn>
                                    <span className="counter">18</span>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBContainer className="mt-5">
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    praesentium voluptatum deleniti atque corrupti quos dolores et
                                    quas molestias excepturi sint occaecati cupiditate non
                                    provident, similique sunt in culpa nemo enim ipsam voluptatem
                                    quia voluptas sit qui officia deserunt mollitia animi, id est
                                    laborum et dolorum fuga quidem rerum facilis est distinctio.
                                </p>
                                <p>
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                    nihil impedit quo minus id quod maxime placeat facere
                                    possimus, omnis voluptas assumenda est, omnis dolor
                                    repellendus. Quis autem vel eum iure reprehenderit qui in ea
                                    voluptate velit esse quam nihil molestiae consequatur.
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae sint
                                    et molestiae non recusandae itaque earum rerum.
                                </p>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>   
                </MDBCardBody>
            </MDBCard>
                <h3 className="mt-5">Line chart</h3>
                <Line data={dataLine} options={{ responsive: true }} />
        </MDBContainer>
    )
}

export default AboutUs;