import React from "react";
import galleryImg from "../../images/Rectangle 517.png";
import smallImg from "../../images/Ellipse 52.png";
import { Col, Container, Row } from "react-bootstrap";
import "./VendorDetails.css";
import { Divider, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import cardImg from "../../images/Ellipse 53.png";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    FreeMode,
} from "swiper";
import Carousel from "react-grid-carousel";

// Import Swiper styles
import "swiper/css";

// import "swiper/css/pagination";

// import required modules
import "swiper/css/grid";

import { Grid } from "swiper";
import Footer from "../Footer/Footer";

export const VendorDetails = () => {
    const value = 4;

    return (
        <>
            <div className="mt-5 pt-5 container ">
                <div className="row   w-100 mx-auto  ">
                    <div className="col-md-5 col-sm-5">
                        <img
                            className="fluid galleryImg"
                            src={galleryImg}
                            alt=""
                            srcset=""
                        />
                        <p className="fs-2 text-start mt-5 text-bolder ps-2 pt-2">
                            Window Repair Professionals
                        </p>
                    </div>

                    <div className="col-md-7 col-sm-12">
                        <div className="row">
                            <div className="col-1  ">
                                <img className=" smallImg " src={smallImg} alt="" srcset="" />
                                <div
                                    id="vertical_line"
                                    className="pt-5 mt-3 bg-dark h-100"
                                ></div>
                            </div>
                            <div className="col-11 about-us-container">
                                <div className="">
                                    <h2 className="text-start">AC Repair Service</h2>
                                    <p className="text-start">
                                        Window Sales &amp; Installation Providing Window Repair
                                    </p>
                                    <p className="text-start">
                                        <Rating
                                            name="text-feedback"
                                            value={value}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={
                                                <StarIcon
                                                    style={{ opacity: 0.55 }}
                                                    fontSize="inherit"
                                                />
                                            }
                                        />
                                    </p>
                                </div>
                                <div className="ps-3">
                                    <p className="text-start">
                                        <i class="fa fa-phone me-2"></i>7855462259633
                                    </p>
                                    <div className="d-flex">
                                        <i class="fa fa-map-marker fa-1x" aria-hidden="true"></i>
                                        <p
                                            style={{ lineHeight: "16px" }}
                                            className=" text-start ms-2"
                                        >
                                            2222 Hamburg Turnpike <br />
                                            Wayne, New Jersey 07470 <br />
                                            United States
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        class="btn btn-dark btn-lg mt-3 d-block"
                                    >
                                        Send Message
                                    </button>
                                    <br />
                                    <div className="text-start">
                                        <h5 style={{ fontWeight: "900" }} className="text-bolder">
                                            About us
                                        </h5>
                                        <p>
                                            Very pleased with the work TAC did remodeling my kitchen
                                            and also work in myy dining room. I highly recommend Very
                                            pleased with the work TAC did remodeling my kitchen and
                                            also work in myy dining room. I highly recommend... Very
                                            pleased with the work TAC did remodeling my kitchen and
                                            also work in myy dining room. I highly recommend...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* IMAGES SLIDER GALLERY START */}

                <div className="mt-5 mb-5">
                    <Carousel
                        responsiveLayout={[
                            {
                                breakpoint: 768,
                                cols: 3,
                            },
                            {
                                breakpoint: 768,
                                cols: 2,
                            },
                        ]}
                        mobileBreakpoint={768}
                        cols={4}
                        rows={2}
                        gap={10}
                        autoplay={3000}
                        loop={true}
                    >
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="https://picsum.photos/800/600?random=2" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* IMAGES SLIDER GALLERY END */}

                {/* What our clients say about us START */}

                <div className="mt-5 mb-5">
                    <h1 className="mb-5">What our clients say about us</h1>
                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        grid={{
                            rows: 1,
                        }}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        breakpoints={{
                            340: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                pagination:false
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                        }}
                        modules={[Grid, Pagination,Autoplay,Navigation]}
                        className="mySwiper"
                    >
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <SwiperSlide>
                                <div class="card h-100  py-2 px-2 card-section vendor-testimonial-card">
                                    <img
                                        style={{
                                            width: "175px",
                                            height: "175px",
                                            margin: "auto",
                                            padding: "10px",
                                        }}
                                        src={cardImg}
                                        class="card-img-top "
                                        alt="..."
                                    />
                                    <div class="card-body lh-1">
                                        <p className="fw-bolder">James Pattinson</p>
                                        <Rating
                                            name="text-feedback"
                                            value={value}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={
                                                <StarIcon
                                                    style={{ opacity: 0.55 }}
                                                    fontSize="inherit"
                                                />
                                            }
                                        />
                                        <p className="text-muted">
                                            “Lobortis leo pretium facilisis amet nisl at nec.
                                            Scelerisque risus tortor donec ipsum consequat semper
                                            consequat adipiscing ultrices.”
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* What our clients say about us END */}

                {/* Simirlar Proffesionals START */}

                <div className="proffesionals-container  mt-5 mb-5">
                    <h1 className="text-center mb-5">
                        <Divider>Simirlar Proffesionals </Divider>
                    </h1>
                    <Swiper
                        loop={true}
                        slidesPerView={0}
                        grid={{
                            rows: 1,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        spaceBetween={30}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        breakpoints={{
                            340: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                navigation:false
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                navigation:false
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                                navigation:false
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                                navigation:false
                            },
                        }}
                        navigation={true}
                        modules={[Grid, Pagination,Navigation,Autoplay]}
                        className="mySwiper"
                    >
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <SwiperSlide>
                                <div class="card h-100 shadow pt-4 card-section w-100">
                                    <img
                                        style={{
                                            width: "175px",
                                            height: "175px",
                                            margin: "auto",
                                            padding: "10px",
                                        }}
                                        src={cardImg}
                                        class="card-img-top "
                                        alt="..."
                                    />
                                    <div class="card-body lh-1">
                                        <p className="fw-bolder">James Pattinson</p>
                                        <Rating
                                            name="text-feedback"
                                            value={value}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={
                                                <StarIcon
                                                    style={{ opacity: 0.55 }}
                                                    fontSize="inherit"
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Simirlar Proffesionals END*/}
            </div>
            <Footer></Footer>
        </>
    );
};
