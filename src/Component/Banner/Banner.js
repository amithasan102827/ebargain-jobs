import React, { useState } from "react";
import "./Banner.css";
import banner from "../../images/Rectangle 9.png";
import cardImg from "../../images/Rectangle 15.png";
import groupImg from "../../images/Group.png";
import Counter from "../Counter/Counter";
import PeopleSay from "../PeopleSay/PeopleSay";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { height } from "@mui/system";
import Select from "react-select";


const Banner = () => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
  ];
  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" }
  ];
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  const [user, setUser] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [Films, setFilms] = useState([top100Films]);

  const handleSearch = (e) => {
    const matchMeals = top100Films.filter((meal) =>
      meal.year.toString().includes(e.target.value)
    );
    setFilms(matchMeals);
  };
  console.log(Films);

  return (
    <div>
      <div className="hero-image">
        <div class="hero-text my-auto w-100  ">
         

          {user ? (
            <div className="d-flex justify-content-center  align-items-center search-dropdown-container">
             

              <div className="">
               
                
                 
                  <div className="dropdown-container">
                    <Select className="search-location"
                      options={optionList}
                      placeholder="Select location"
                      value={selectedOptions}
                      onChange={handleSelect}
                      isSearchable={true}
                      // isMulti
                    />
                  </div>
             

              </div>

              <form class="  ">
                <div className="input-icons  banner-serarc-field">
                  {/* <SearchIcon sx={{fontWeight:'900'}} className='mui-icon' /> */}

                  <i
                    style={{ fontSize: "18px" }}
                    class="fa fa-search  mui-icon"
                    aria-hidden="true"
                  ></i>
                  <input
                    class="form-control  hero-text-input text-center "
                    type="search"
                    placeholder="Search for services"
                    aria-label="Search"
                    onChange={handleSearch}
                  />
                </div>
              </form>
            </div>
          ) : (
            <>
              <Link to="/user_sign_up">
                <button>Sing up as user</button>
              </Link>
              <Link to="vendor_sign_up">
                <button>Sing up as vendor</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* SERVICES CARD SECTION */}

      {/* <div>
                    {
                        Films.map(f =>
                            <li>{f.title}</li>
                        )
                    }
                </div> */}

      <div className="mt-5 container mb-5">
        <h2 style={{ fontWeight: "bold" }} class="text-center mb-4">
          Services
        </h2>

        <div className="row row-cols-1  row-cols-md-4 g-4 ">
          {/* <div className="col-md-3 col-6 col-sm-4 mb-4 ">
            <Link to='/signUp' style={{textDecoration:'none'}}>
            <div  class="banner-service-card  text-dark ">
              <img src={cardImg} alt="Avatar" style={{ width: "100%" }} />
              <div class="text-container">
                <h5 className="p-2 service-card-text">AC Repair Service </h5>
              </div>
            </div>
            </Link>
          </div> */}

          {Array.from({ length: 8 }).map((_, idx) => (
            <div className="col-md-3 col-6 col-sm-4  ">
              <Card
                sx={{ maxWidth: 295, borderRadius: "10px", margin: "auto" }}
                className="shadow services-card"
              >
                <CardMedia
                  className="services-card-img"
                  component="img"
                  height="260"
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png"
                  alt="green iguana"
                />

                <CardContent
                  className="services-card-CardContent"
                  sx={{ textAlign: "center", padding: "none" }}
                >
                  <h5>AC Repair Service</h5>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="container mb-5 mt-5">
        <h3 className="fw-bold mb-5">
          Why <span className="text-primary"> Choose Us</span>
        </h3>
        <div class="row">
          <div class="col-md-4 ">
            <div class="card border choose-us-card  shadow  ps-5 mt-3 d-flex flex-col justify-content-center">
              <img src={groupImg} class=" card-img" alt="..." />

              <h6 class="card-text text-start pt-2">
                Easy to find <br /> your need
              </h6>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="card choose-us-card shadow ps-5 mt-3  d-flex flex-col justify-content-center">
              <img src={groupImg} class=" card-img" alt="..." />

              <h6 class="card-text text-start pt-2">
                Easy to find <br /> your need
              </h6>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="card  choose-us-card shadow ps-5 mt-3  d-flex flex-col justify-content-center">
              <img src={groupImg} class=" card-img" alt="..." />

              <h6 class="card-text text-start pt-2">
                Easy to find <br /> your need
              </h6>
            </div>
          </div>
        </div>
      </div>

      <Counter></Counter>
      <PeopleSay></PeopleSay>
      <Footer></Footer>
    </div>
  );
};

export default Banner;
