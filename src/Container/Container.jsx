import React from "react";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;

//   @media (min-width: 576px) {
//     width: 540px;
//   }
//   @media (min-width: 768px) {
//     width: 720px;
//   }
//   @media (min-width: 992px) {
//     width: 960px;
//   }
//   @media (min-width: 1200px) {
//     width: 1140px;
//   }
//   @media (min-width: 1400px) {
//     width: 1320px;
//   }
// `;

const Container = ({ children }) => {
  return (
    <div className="container overflow-hidden">
      <div className="row">{children}</div>
    </div>
  );
};

export default Container;
