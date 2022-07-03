import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../images/image 1.png";
import vector from "../../images/Vector.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navButton = useRef(null);
  const linksContainerRef = useRef(null);
  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <>
      <div class="container-fluid navbar-color fixed-top  w-100">
        <div
          class="container  "
          data-target=".navbar-collapse"
          data-toggle="collapse"
        >
          <nav class="navbar navbar-expand-lg navbar-light  ">
            <div class="container-fluid">
              <Link to="/">
                {" "}
                <a class="navbar-brand" href="#">
                  <img src={logo} alt="" />
                </a>
              </Link>
              <button
                ref={navButton}
                class="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon top-bar"></span>
                <span class="toggler-icon middle-bar"></span>
                <span class="toggler-icon bottom-bar"></span>
              </button>
              <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
                ref={linksContainerRef}
              >
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex  ">
                  <li class="nav-item ">
                    <Link
                      onClick={collapseNav}
                      to="/flatRent"
                      style={{ textDecoration: "none" }}
                      data-bs-target=".navbar-collapse.show"
                    >
                      <a class="nav-link active" aria-current="page">
                        Flat Rent
                      </a>
                    </Link>
                  </li>

                  <li class="nav-item  ">
                    <Link
                      onClick={collapseNav}
                      to="/singleService"
                      style={{ textDecoration: "none" }}
                    >
                      <a class="nav-link services">All Services</a>{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link onClick={collapseNav} to="/signUp" style={{ textDecoration: "none" }}>
                      <a class="nav-link active" aria-current="page" href="#">
                        Sign In
                      </a>
                    </Link>
                  </li>
                  <li class="nav-item vector-img">
                    <Link onClick={collapseNav} to='/VendorDetails'>
                    <a class="nav-link active" aria-current="page" href="#">
                      <img src={vector} alt="" />
                      </a>
                      </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
