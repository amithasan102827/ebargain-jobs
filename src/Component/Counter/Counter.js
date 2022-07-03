
import React, { useState } from 'react';
import './Counter.css';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
const Counter = () => {

 const count=2000;
  return (
    <div className='container-fluid mb-5'>

      <div class="counter-section container-fluid row">
        <div class="service-provider col-md-4 col-12  my-auto fw-bolder vertical-line">
          <p class="counter-text mb-0 p-0 counter">


            <CountUp end={count} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>+
          </p>

          <span className='fs-4 text-white mt-0 pt-0'>Service Provider </span>
          {/* <div class="vl p-0 mx-0"></div> */}

        </div>

        <div class="service-provider col-md-4 col-12  my-auto fw-bolder vertical-line">

          <p class="counter-text mb-0 p-0 ">
          <CountUp end={5000} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>+
            
           </p>
          <span className='fs-4 text-white mt-0 pt-0'>Order Servered </span>
        </div>
        {/* <div class="vertical-line">
        </div> */}
        <div class="service-provider col-md-4 col-12  my-auto fw-bolder">
          <p class="counter-text mb-0 p-0 ">
          <CountUp end={2000} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>+
          </p>
          <span className='fs-4 text-white mt-0 pt-0'>5 Start Receieved </span>
        </div>
      </div>

    </div>
  );
};

export default Counter;