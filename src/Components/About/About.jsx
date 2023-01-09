import React from "react";
import { aboutUsData, blogsData, CustomerFeedback } from "../../Config/Data";
import Container from "../../Container/Container";
import Blog from "../../Assets/Vector-4.png";
import FeedBack from "../../Assets/Vector-3.png";
import Ellipse9 from "../../Assets/Ellipse 9.png";
import Ellipse19 from "../../Assets/Ellipse 19.png";
import Ellipse28 from "../../Assets/Ellipse 28.png";
import Ellipse27 from "../../Assets/Ellipse 27.png";
import Group34 from "../../Assets/Group 34.png";

const polkaDots = {
  dot1: {
    top: "-4%",
    left: "61%",
    zIndex: "1",
  },
  dot2: {
    top: "26rem",
    left: "24rem",
    zIndex: "1",
  },
  dot3: {
    top: "32rem",
    right: "-92%",
    zIndex: "1",
  },
  dot4: {
    bottom: "18rem",
    right: "-10%",
    zIndex: "1",
  },
  dot5: {
    bottom: "10rem",
    right: "96%",
    zIndex: "1",
  },
};

const About = () => {
  return (
    <Container>
      <div className="col-lg-4 my-5 position-relative" id="about">
        <img
          className="img-fluid position-absolute"
          style={polkaDots.dot1}
          alt=""
          srcSet={Ellipse9}
        />
        <img
          className="img-fluid position-absolute"
          style={polkaDots.dot2}
          alt=""
          srcSet={Ellipse19}
        />
        <img
          className="img-fluid position-absolute"
          style={polkaDots.dot3}
          alt=""
          srcSet={Ellipse28}
        />
        <img
          className="img-fluid position-absolute"
          style={polkaDots.dot4}
          alt=""
          srcSet={Ellipse19}
        />

        <h4 className="border-start border-5 border-primary ms-2 ps-3 my-5">
          {blogsData.title}
        </h4>
        {blogsData.blogList.map((ele, ind) => {
          return (
            <div className="card mb-3 border-0 my-4" key={ind}>
              <div className="row g-0">
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <img
                    srcSet={Blog}
                    className="img-fluid p-3 border border-2 border-primary rounded-1"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text">{ele.time}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <h4 className="border-start border-5 border-primary ms-2 ps-3 my-5">
          {CustomerFeedback.title}
        </h4>
        {CustomerFeedback.comments.map((ele, ind) => {
          return (
            <div key={ind}>
              <div className="row mt-5">
                <div className="col-3">
                  <img
                    srcSet={FeedBack}
                    className="img-fluid p-2 border border-2 border-primary rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <h5 className="card-title">{ele.comment}</h5>
                </div>
              </div>
              <div className="row my-2 align-items-center">
                <div className="col-3">
                  <div className="w-75 border-bottom border-4 border-primary"></div>
                </div>
                <div className="col-8 ">
                  <h4 className="card-text">{ele.name}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-lg-4 mt-5 ms-auto position-relative">
        <img
          className="img-fluid position-absolute"
          style={polkaDots.dot5}
          alt=""
          srcSet={Ellipse27}
        />
        <h4 className="border-start border-5 border-primary ms-2 ps-3 mt-5">
          {aboutUsData.title}
        </h4>
        <div className="row ps-4">
          {aboutUsData.dataList.map((ele, ind) => {
            return (
              <div className="col-lg-12 col-6" key={ind}>
                <h4 className="my-3">{ele.title}</h4>
                {ele.itemList.map((ele, ind) => {
                  return (
                    <h5 key={ind} className="opacity-50">
                      {ele.item}
                    </h5>
                  );
                })}
              </div>
            );
          })}
          <div className="input-group my-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter email address"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text p-0" id="basic-addon1">
              <img className="img-fluid" alt="" srcset={Group34} />
            </span>
          </div>
          <div className="col-lg-12 col-6">
            {aboutUsData.socialMedia.map((ele, ind) => {
              return <img alt="" className="img-fluid me-2" src={ele.icon} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;

/* <div className="card mb-3 border-0 my-4" key={ind}>
              <div className="row g-0">
                <div className="col-3  ">
                  <img
                    srcSet={FeedBack}
                    className="img-fluid p-2 border border-2 border-primary rounded-circle"
                    alt="..."
                  />
                  <div className="border-bottom border-5 w-100 border-primary"></div>
                </div>
                <div className="col-8">
                  <div className="card-body p-0">
                    <h5 className="card-title">{ele.comment}</h5>
                    <h4 className="card-text">{ele.name}</h4>
                  </div>
                </div>
              </div>
            </div> */
