import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            <div className=' row container w-100 m-auto    footer-section  '>
                <div class=" col-sm-12 col-12  col-md-8 mt-4   px-4 py-5  ">
                    <div >
                        <div className='text-start mb-3'>
                            <h1 style={{ fontWeight: 'bolder' }} >Say Hi!</h1>
                            <span style={{ color: 'white' }} >We'd like to talk with you</span>
                        </div>
                        <form class="main-form text-start">
                            <div class="form-group ">
                                <label className='ms-auto' for="exampleInputEmail1">My Name is</label>

                                <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter Name" />


                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">I'm looking for</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="what you love"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Your message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='I want to say that...'></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary mt-4 form-button">send message</button>
                        </form>
                    </div>
                </div>



                <div class="  form-text col-sm-12 col-12  col-md-4 my-auto pt-5  contact-section-1 ">
                  <div className='contact-section pt-5 mt-2   '>
                  <div class="mb-3 text-start">
                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Contact Information</h2>
                        <span style={{ color: 'white' }}>Fill up the form and Out Team will back to <br /> you with in 24 hours</span>
                    </div>
                    <div class="ps-5 text-start" style={{lineHeight:'30px'}} >
                        <span style={{ color: 'white' }}>(+40)722 100 200</span> <br />
                        <span style={{ color: 'white' }}>hello@creativ-tim.com</span> <br />
                        <span style={{ color: 'white' }}>Dyonisie Wolf Bucharest RQ010485</span>

                        
                    </div>
                    <div class="footer-icon mt-5 text-start">


                        <a href=""><i class="fab fa-facebook-square fa-2x "></i></a>
                        <a href=""><i class="fab fa-twitter fa-2x"></i></a>
                        <a href=""><i class="fab fa-instagram fa-2x"></i></a>
                        <a href=""><i class="fab fa-chrome fa-2x"></i></a>

                    </div>
                  </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;