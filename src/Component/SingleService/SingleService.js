import React from "react";

import "./SingleService.css";
import cardImg from "../../images/Ellipse 53.png";

import StarIcon from "@mui/icons-material/Star";
import locationImg from "../../images/Vector (1).png";
import Footer from "../Footer/Footer";
import serviceImg from "../../../src/images/Rectangle 492.png";
import { useEffect } from "react";
import { useState } from "react";
import { Rating } from "@mui/material";
import { FaBeer } from "react-icons/fa";



const SingleService = () => {
  const value = 3.5;

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  // const [img, setImg] = useState([]);
  // useEffect(() => {
  //     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  //         .then(res => res.json())
  //     .then(data=>setImg(data) )
  // },[])

  return (
    <div>
      {/* BANNER SECTION */}
      <div className="mt-5 ">
        <div
          className="hero-image-2 "
        //     style={{
        //         backgroundImage: ` url(${img.categories[10].strCategoryThumb})`,

        //         backgroundPosition: "center center",
        //         backgroundSize: 'cover',
        //         backgroundRepeat: 'no-repeat',
        //         width: '80%',
        //         padding: '20%',

        //         position: "relative",
        //   }}
        >
          <div class="hero-text-2">
            {/* <button>Sing up as user</button>
                    <button>Sing up as vendor</button> */}
          </div>
        </div>
      </div>

      {/* Filter section */}

      <div className="row w-100 m-auto  mt-5     ">
        <div className=" col-md-4 col-sm-12  my-auto h-100  select   ">
          {/* <div class="dropdown  select-2">
            <a
              class="btn dropdown-toggle border  rounded "
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-map-marker-alt "></i>
              <span className="ps-3 toggle-button"> Select location</span>
            </a>


            <ul
              class="dropdown-menu service-scrollable-menu service-dropdown-menu "
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>

            </ul>
          </div> */}


          <select class="form-select    selece-location-service-page" aria-label="Default select example">
           

           <option  selected ><FaBeer  />select location</option>
           
           {Array.from({ length: 8 }).map((_, idx) => (
            <option >Open this </option>
         ))}

         </select>
          
         
        </div>

        <div className="col-md-4 col-12  my-auto service mx-auto ">
          <h3 style={{ fontWeight: "900" }} className=" ">
            AC <span className="text-primary">Repair Service </span>
          </h3>
        </div>

        <div className="col-md-4 col-12   my-auto short-by  ">
          <div className="  d-flex justify-content-center   align-items-center short-by-2">
            <div className="   short-by-3">
              {/* <div class="btn-group ">
                <button
                  class="btn  btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort by
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                 
                </ul>
              </div> */}
              <select class="form-select form-select-sm border-0 sort-by" aria-label="Default select example">
                <option selected>Sort by</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="">
              
              <select class="form-select form-select-sm border-0" aria-label="Default select example">
                <option selected>Filter</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

           
          </div>
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="container mt-1 mb-5 ">
        <div class="row g-4 mt-5 card-section-1">
         

          {Array.from({ length: 8 }).map((_, idx) => (
            <div class="col-md-3 col-6 col-sm-4 ">
              <a
                href="https://www.youtube.com/"
                className="text-decoration-none text-dark "
              >
                <div class="card h-100 shadow pt-4 card-section singleservice-card">
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
                        <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                      }
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}

        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SingleService;
