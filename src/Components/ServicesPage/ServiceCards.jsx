import React from "react";
import { ServiceCardDetails } from "../../Config/Data";
import Container from "../../Container/Container";
import Vector from "../../Assets/Vector.png";
import Ellipse15 from "../../Assets/Ellipse 15.png";
import Ellipse8 from "../../Assets/Ellipse 8.png";
import Ellipse14 from "../../Assets/Ellipse 14.png";
import Ellipse11 from "../../Assets/Ellipse 11.png";

const polkaDots = {
  dot1: {
    top: "45%",
    right: "100%",
    zIndex: "1",
  },
  dot2: {
    top: "47rem",
    right: "6rem",
    zIndex: "1",
  },
  dot3: {
    top: "51rem",
    left: "38%",
    zIndex: "1",
  },
  dot4: {
    bottom: "21rem",
    right: "0",
    zIndex: "1",
  },
};

const ServiceCards = () => {
  return (
    <>
      <Container>
        <div className="col-lg-5 mx-auto px-5 my-5  d-flex flex-column position-relative" style={{"gap":"8rem"}}>
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot3}
            alt=""
            srcSet={Ellipse14}
          />
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot4}
            alt=""
            srcSet={Ellipse11}
          />
          <div>
            <h4>{ServiceCardDetails.title1}</h4>
            <h5 className="text-primary">{ServiceCardDetails.subtitle1}</h5>
          </div>

          {ServiceCardDetails.cardslistleft.map((ele, ind) => {
            return (
              <div className="row" key={ind}>
                <div className="col">
                  <div className="card p-4">
                    <img
                      src={ele.icon}
                      className="card-img-top p-5"
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column gap-3 ">
                      <h5 className="card-title">{ele.title}</h5>
                      <p className="card-text opacity-50">{ele.desc}</p>
                      <span>
                        <a
                          href="/"
                          className="text-primary text-decoration-none"
                        >
                          Learn More{" "}
                          <img
                            className="img-fluid ms-2"
                            alt=""
                            srcSet={Vector}
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-lg-5 mx-auto px-5 my-5 d-flex flex-column position-relative" style={{"gap":"8rem"}}>
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot1}
            alt=""
            srcset={Ellipse8}
          />
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot2}
            alt=""
            srcset={Ellipse15}
          />
          {ServiceCardDetails.cardlistright.map((ele, ind) => {
            return (
              <div className="row " key={ind}>
                <div className="col ">
                  <div className="card p-4">
                    <img
                      src={ele.icon}
                      className="card-img-top p-5"
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column gap-3">
                      <h5 className="card-title">{ele.title}</h5>
                      <p className="card-text opacity-50">{ele.desc}</p>
                      <span>
                        <a
                          href="/"
                          className="text-primary text-decoration-none"
                        >
                          Learn More{" "}
                          <img
                            className="img-fluid ms-2"
                            alt=""
                            srcSet={Vector}
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <h4>{ServiceCardDetails.title2}</h4>
            <h5 className="text-primary">
              {ServiceCardDetails.subtitle2}
              <span>
                <a href="/" className="text-primary text-decoration-none">
                  {" "}
                  <img className="img-fluid ms-2" alt="" srcSet={Vector} />
                </a>
              </span>
            </h5>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ServiceCards;
