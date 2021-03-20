import React, {useState, useEffect} from "react"
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


let RegisterPage = () =>{

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    let [userdata, setuserdata] = useState({fname: '',lname: '',email: '',city: '',state: '', zip: ''});

    let submitHandler = (event) => {
        event.preventDefault();
        event.target.className += ' was-validated';
        };
    
    let changeHandler = (event) => {
        setuserdata({ [event.target.name]: event.target.value })
    }
    return(
        <MDBContainer className="mt-10">
            <br></br>
            <br></br>
            {/* <section className="text-center my-5 mt-25"> */}
                <h2 className="h1-responsive font-weight-bold my-5">
                Registration
                </h2>
    
                <form
                    className='needs-validation'
                    onSubmit={submitHandler}
                    noValidate >
                    
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBInput
                                icon='user'
                                value={userdata.fname}
                                name='fname'
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterNameEx'
                                label='First name'
                                outline
                                required
                            >
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput
                                icon='address-card'
                                value={userdata.lname}
                                name='lname'
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterEmailEx2'
                                label='Last name'
                                outline
                                required
                            >
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput
                                icon='envelope-open'
                                value={userdata.email}
                                onChange={changeHandler}
                                type='email'
                                id='materialFormRegisterConfirmEx3'
                                name='email'
                                label='Your Email address'
                                outline
                            >
                                <small id='emailHelp' className='form-text text-muted'>
                                    We'll never share your email with anyone else.
                                </small>
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBInput
                                icon='city'
                                value={userdata.city}
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterPasswordEx4'
                                name='city'
                                label='City'
                                outline
                                required
                            >
                                <div className='invalid-feedback ml-3 pl-3'>
                                    Please provide a valid city.
                                </div>
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput
                                icon='map-marked-alt'
                                value={userdata.state}
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterPasswordEx4'
                                name='state'
                                label='State'
                                outline
                                required
                            >
                                <div className='invalid-feedback ml-3 pl-3'>
                                    Please provide a valid state.
                                </div>
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput
                                icon='location-arrow'
                                value={userdata.zip}
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterPasswordEx4'
                                name='zip'
                                label='Zip'
                                outline
                                required
                            >
                                <div className='invalid-feedback ml-3 pl-3'>
                                Please provide a valid zip.
                                </div>
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>
                    <MDBCol md='4' className='mb-3'>
                        <div className='custom-control custom-checkbox pl-3'>
                            <input
                                className='custom-control-input'
                                type='checkbox'
                                value=''
                                id='invalidCheck'
                                required
                            />
                            <label className='custom-control-label' htmlFor='invalidCheck'>
                                Agree to terms and conditions
                            </label>
                            <div className='invalid-feedback'>
                                You must agree before submitting.
                            </div>
                        </div>
                    </MDBCol>
                    <MDBBtn color='primary' type='submit'>
                        Submit Form
                    </MDBBtn>
                </form>
                
            {/* </section> */}
        </MDBContainer> 
    )
}
export default RegisterPage;