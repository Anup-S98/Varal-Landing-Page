import React from "react";
import { PriceCard } from "../../Config/Data";
import Container from "../../Container/Container";
import RightTick from "../../Assets/Group 35.png";
import Ellipse7 from "../../Assets/Ellipse 7.png";
import Ellipse12 from "../../Assets/Ellipse 12.png";
import Ellipse13 from "../../Assets/Ellipse 13.png";
import Ellipse17 from "../../Assets/Ellipse 17.png";
import styled from "styled-components";
import './Price.css';
 
const polkaDots = {
  dot1: {
    top: "-30%",
    left: "-40%",
    zIndex: "1",
  },
  dot2: {
    top: "-3rem",
    right: "-25%",
    zIndex: "1",
  },
  dot3: {
    top: "9rem",
    right: "-50%",
    zIndex: "1",
  },
  dot4: {
    top: "48rem",
    right: "-115%",
    zIndex: "1",
  },
};


const Price = () => {
  return (
    <>
      <Container>
        <div className="col-lg-5 mx-auto my-5 position-relative " id="price">
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot1}
            alt=""
            srcSet={Ellipse7}
          />
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot2}
            alt=""
            srcSet={Ellipse12}
          />
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot3}
            alt=""
            srcSet={Ellipse13}
          />

          <h2 className="text-center lh-base">
            Most
            <span className="border-bottom border-warning border-5">
              {" "}
              popular affordable pricing
            </span>{" "}
            per jurisdictions are brought to you to kick off your adventure.
          </h2>
        </div>
      </Container>
      <Container>
        {/* <div className="col position-absolute">
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot4}
            alt=""
            srcSet={Ellipse17}
          />
        </div> */}
        {PriceCard.cardlist.map((ele, ind) => {
          return (
            <div className="col-lg-4 my-5" key={ind}>
              <card className="card text-primary border-0 cardEffect">
                <div className="card-body">
                  <h5 className="card-title">{ele.cardtitle}</h5>
                  <p className="card-text">
                    <span className="h2  fw-bold">{ele.cardprice} </span>
                    <span className="text-dark opacity-50">
                      One Time Payment
                    </span>
                  </p>
                  <p>{ele.cardsubtitle}</p>
                  {PriceCard.features.map((eleFea, feaInd) => {
                    return (
                      <p key={feaInd}>
                        <img className="me-2" alt="" srcSet={RightTick} />
                        {eleFea}
                      </p>
                    );
                  })}
                  <a href="/" className="btn btn-outline-primary d-block py-3">
                    Continue
                  </a>
                </div>
              </card>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Price;
