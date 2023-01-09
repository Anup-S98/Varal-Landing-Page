import React from "react";
import { ServiceSection } from "../../Config/Data";
import Container from "../../Container/Container";
// import UAEIcon from "../../Assets/dungeon.png";
// import Dubai from "../../Assets/Vector-2.png";
// import Offshore from "../../Assets/Vector-1.png";
import Ellipse23 from "../../Assets/Ellipse 23.png";
import Ellipse17 from "../../Assets/Ellipse 17.png";
import Ellipse16 from "../../Assets/Ellipse 16.png";
import Ellipse24 from "../../Assets/Ellipse 24.png";

const polkaDots = {
  dot1: {
    top: "-7%",
    left: "34%",
    zIndex: "1",
  },
  dot2: {
    top: "-3rem",
    left: "-12rem",
    zIndex: "1",
  },
  dot3: {
    top: "17rem",
    right: "38%",
  },
  dot4: {
    top: "35rem",
    right: "40%",
  },
};

const ServicesHeader = () => {
  return (
    <>
      <Container>
        <div className="col mx-auto my-4 position-relative" id="service">
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot1}
            alt=""
            srcset={Ellipse23}
          />
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot2}
            alt=""
            srcset={Ellipse17}
          />
          <img
            className="img-fluid position-absolute"
            style={polkaDots.dot4}
            alt=""
            srcset={Ellipse24}
          />
          <h2 className="text-center lh-base">
            <span className="border-bottom border-warning border-5">
              Dedicated
            </span>{" "}
            <br></br>to our mission we are
          </h2>
          <div className="row my-4">
            <div className="col-xl-6 col-lg-8 col-md-8 col-11 mx-auto">
              <h4 className="text-center opacity-50">{ServiceSection.desc}</h4>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        {ServiceSection.companylist.map((ele, ind) => {
          return (
            <div
              className="col-lg my-5 d-flex flex-column justify-content-lg-between align-items-lg-start align-items-center position-relative"
              key={ind}
            >
              <img
                className="img-fluid position-absolute"
                style={polkaDots.dot3}
                alt=""
                srcset={Ellipse16}
              />
              <img alt="" className="img-fluid my-4" src={ele.icon} />
              <h4>{ele.title}</h4>
              <p className="opacity-50 ">{ele.desc}</p>
              <a href="/" className="text-decoration-none text-warning">
                Get Started
              </a>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default ServicesHeader;
