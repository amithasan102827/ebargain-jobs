
import React from "react";
import './FlatRent.css'
import sliderImg from "../../images/slider-1.png";
import imgCard from "../../images/kitchen-gbf79b887b_1920.jpg";
import Footer from "../Footer/Footer";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const FlatRent = () => {
    return (
        <>
            <div className="mt-5 pt-2">
                <div className="banner-slider">
                    <div
                        id="carouselExampleSlidesOnly"
                        class="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={sliderImg} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={sliderImg} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={sliderImg} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD SECTION */}
                <div className="flat-card mt-5 container mb-5">
                    <h1 className="mb-5">Designers</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <Card
                                sx={{ maxWidth: 385, borderRadius: "12px", margin: "auto" }}
                                className="shadow-lg "
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={imgCard}
                                    alt="green iguana"
                                />
                                <CardContent sx={{ textAlign: "start" }}>
                                    <Typography
                                        sx={{ paddingLeft: "4px" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Armchair
                                    </Typography>

                                    <button
                                        type="button"
                                        class="btn btn-link text-decoration-none bg-dark text-white px-3 py-1 rounded-pill fs-5 "
                                    >
                                        see more
                                    </button>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col">
                            <Card
                                sx={{ maxWidth: 385, borderRadius: "12px", margin: "auto" }}
                                className="shadow-lg "
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={imgCard}
                                    alt="green iguana"
                                />
                                <CardContent sx={{ textAlign: "start" }}>
                                    <Typography
                                        sx={{ paddingLeft: "4px" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Armchair
                                    </Typography>

                                    <button
                                        type="button"
                                        class="btn btn-link text-decoration-none bg-dark text-white px-3 py-1 rounded-pill fs-5 "
                                    >
                                        see more
                                    </button>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col">
                            <Card
                                sx={{ maxWidth: 385, borderRadius: "12px", margin: "auto" }}
                                className="shadow-lg "
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={imgCard}
                                    alt="green iguana"
                                />
                                <CardContent sx={{ textAlign: "start" }}>
                                    <Typography
                                        sx={{ paddingLeft: "4px" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Armchair
                                    </Typography>

                                    <button
                                        type="button"
                                        class="btn btn-link text-decoration-none bg-dark text-white px-3 py-1 rounded-pill fs-5 "
                                    >
                                        see more
                                    </button>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col">
                            <Card
                                sx={{ maxWidth: 385, borderRadius: "12px", margin: "auto" }}
                                className="shadow-lg "
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={imgCard}
                                    alt="green iguana"
                                />
                                <CardContent sx={{ textAlign: "start" }}>
                                    <Typography
                                        sx={{ paddingLeft: "4px" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Armchair
                                    </Typography>

                                    <button
                                        type="button"
                                        class="btn btn-link text-decoration-none bg-dark text-white px-3 py-1 rounded-pill fs-5 "
                                    >
                                        see more
                                    </button>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col">
                            <Card
                                sx={{ maxWidth: 385, borderRadius: "12px", margin: "auto" }}
                                className="shadow-lg "
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={imgCard}
                                    alt="green iguana"
                                />
                                <CardContent sx={{ textAlign: "start" }}>
                                    <Typography
                                        sx={{ paddingLeft: "4px" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Armchair
                                    </Typography>

                                    <button
                                        type="button"
                                        class="btn btn-link text-decoration-none bg-dark text-white px-3 py-1 rounded-pill fs-5 "
                                    >
                                        see more
                                    </button>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col">
                            <Card
                                sx={{ maxWidth: 385, borderRadius: "12px", margin: "auto" }}
                                className="shadow-lg "
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={imgCard}
                                    alt="green iguana"
                                />
                                <CardContent sx={{ textAlign: "start" }}>
                                    <Typography
                                        sx={{ paddingLeft: "4px" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Armchair
                                    </Typography>

                                    <button
                                        type="button"
                                        class="btn btn-link text-decoration-none bg-dark text-white px-3 py-1 rounded-pill fs-5 "
                                    >
                                        see more
                                    </button>
                                </CardContent>
                            </Card>
                        </div>


                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default FlatRent;
