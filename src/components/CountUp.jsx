import CountUp from 'react-countup';
import {
    MDBContainer, MDBRow, MDBCol
  } from "mdbreact";
  

let CompleteHook = () => {
    // const { countUp } = useCountUp({ start: 0, end: 68, delay: 1, duration: 5});
    
    return (
      
        <div id="counter" class="justify-content-center row">
            
            <div class="mt-4 pt-2 col-md-4">
                <div class="counter-box text-center px-lg-4">
                    <h2 class="mb-0 text-primary display-4">
                        <span class="counter-value" data-count="97">
                            <span>
                                <CountUp delay={4} end={65} start = {0} duration = {5}/>    
                            </span>
                        </span>%
                    </h2>
                    <h5 class="counter-head">Less employee time</h5>
                        <p class="text-muted mb-0">than learning the same material in a traditional classroom setting. Learning is more faster.</p>
                </div>
            </div>
            <div class="mt-4 pt-2 col-md-4">
                <div class="counter-box text-center px-lg-4">
                    <h2 class="mb-0 text-primary display-4">
                        <span class="counter-value" data-count="15">
                            <span>
                                <CountUp delay={4} end={10} start = {0} duration = {5}/>
                            </span>
                        </span>+
                    </h2>
                    <h5 class="counter-head">Times More Material</h5>
                    <p class="text-muted mb-0">absorbed without increasing time spent in training. Easier access to anytime anythere material.</p>
                </div>
            </div>
            <div class="mt-4 pt-2 col-md-4">
                <div class="counter-box text-center px-lg-4">
                    <h2 class="mb-0 text-primary display-4">
                        <span class="counter-value" data-count="98">
                            <span>
                                <CountUp delay={4} end={35} start = {0} duration = {5}/>
                            </span>
                        </span>%
                    </h2>
                    <h5 class="counter-head">Revenue per employee</h5>
                    <p class="text-muted mb-0">Revenue generated per employee is 35% higher for companies that offer training using technology</p>
                </div>
            </div>
        </div>
        
      
    );
  };

export default CompleteHook;