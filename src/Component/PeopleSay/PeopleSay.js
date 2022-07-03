import React from 'react';
import './PeopleSay.css'
import peopleImg from '../../images/Ellipse 1 .png'

const PeopleSay = () => {
    return (
        <div className='container '>
            <h3 className='fw-bolder mb-5'>People Say <span className='text-success '>About Us</span></h3>
            <div className='row row-cols-1  row-cols-md-4 g-2 '>

                <div class=" aboutUsCartInfo shadow mb-5 bg-body   ">
                    <div class="about-image ">
                        <img src={peopleImg} alt="" />
                    </div>

                    <div>
                        <p className="about-text py-3 fw-bold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non odit sequi unde doloribus, corrupti alias
                            quidem nostrum
                        </p>

                    </div>
                    <div>
                        <h4 class="text-center about-text-name">- Zabeen Yusuf Nur <br /> IT Consultant, Australia</h4>
                    </div>
                </div>
                <div class=" aboutUsCartInfo shadow  mb-5 bg-body ">
                    <div class="about-image ">
                        <img src={peopleImg} alt="" />
                    </div>

                    <div>
                        <p class="about-text py-3 fw-bold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non odit sequi unde doloribus, corrupti alias
                            quidem nostrum
                        </p>

                    </div>
                    <div>
                        <h4 class="text-center about-text-name">- Zabeen Yusuf Nur <br /> IT Consultant, Australia</h4>
                    </div>
                </div>
                <div class=" aboutUsCartInfo shadow mb-5 ">
                    <div class="about-image ">
                        <img src={peopleImg} alt="" />
                    </div>

                    <div>
                        <p class="about-text py-3 fw-bold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non odit sequi unde doloribus, corrupti alias
                            quidem nostrum
                        </p>

                    </div>
                    <div>
                        <h4 class="text-center about-text-name">- Zabeen Yusuf Nur <br /> IT Consultant, Australia</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSay;