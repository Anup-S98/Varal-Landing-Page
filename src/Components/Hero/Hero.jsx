import React from "react";
import './Hero.css';
import Container from "../../Container/Container";
import { HeroData } from "../../Config/Data";
import HeroImg from "../../Assets/ILLUSTRATION.png";
import AdIcon from "../../Assets/Group 117.png";
import Ellipse16 from "../../Assets/Ellipse 16.png";
import Ellipse21 from "../../Assets/Ellipse 21.png";
import Ellipse25 from "../../Assets/Ellipse 25.png";
import Ellipse19 from "../../Assets/Ellipse 19-1.png";

const polkaDots = {
  dot1: {
    top: "15%",
    left: "6rem",
  },
  dot2: {
    top: "15%",
    left: "17rem",
  },
  dot3: {
    top: "8rem",
    right: "38%",
  },
  dot4: {
    top: "11rem",
    right: "25%",
  },
};

const Hero = () => {
  return (
    <Container>
      <div className="row justify-content-end mt-5" id="hero">
        <div className="col col-lg-3 ">
          <img
            className="img-fluid position-absolute z-1"
            style={polkaDots.dot1}
            alt=""
            srcset={Ellipse16}
          />
          <img
            className="img-fluid position-absolute z-1"
            style={polkaDots.dot2}
            alt=""
            srcset={Ellipse21}
          />
          <img
            className="img-fluid position-absolute z-1"
            style={polkaDots.dot3}
            alt=""
            srcset={Ellipse25}
          />
          <img
            className="img-fluid position-absolute z-1"
            style={polkaDots.dot4}
            alt=""
            srcset={Ellipse19}
          />
          <div className="input-group mb-3 border border-3 border-primary rounded-1 p-1" >
            <span
              className="input-group-text bg-white border border-0 text-primary"
              id="basic-addon1"
            >
              <i class="fa fa-search fs-3"></i>
            </span>
            <input
              type="search"
              className="form-control border border-0"
              placeholder="Search a Term | Topic"
              aria-label="Username"
              aria-describedby="basic-addon1"
              
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 d-flex flex-column gap-3 mt-5 mb-4">
        <h5 className="text-primary">{HeroData.subtitle1}</h5>
        <h1 className="fw-bold lh-base">
          <span className="border-bottom border-warning border-5">
            Get started{" "}
          </span>
          on fulfilling your Dubai or UAE dream.
        </h1>
        <h5 className="text-primary">{HeroData.subtitle2}</h5>
        <h3 className="fw-bold opacity-50">{HeroData.desc}</h3>
        <div className="row">
          <button
            type="button"
            className="btn btn-primary btn-lg col-6 col-md-4 rounded-0 py-3"
          >
            {HeroData.btn1}
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-lg col-6 col-md-4 rounded-0 py-3"
          >
            {HeroData.btn2}
          </button>
        </div>
      </div>
      <div className="col-12 col-lg-6 mt-4 d-flex justify-content-cente">
        <img srcSet={HeroImg} className="img-fluid" alt="..." />
      </div>
      <div className="row">
        <div className="col my-5">
          <p className="text-center text-primary">
            {HeroData.ads}
            <span className="mx-2">
              <img
                alt=""
                className="p-1 img-fluid border border-3 border-primary rounded-circle"
                srcSet={AdIcon}
              />
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
