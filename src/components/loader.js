import React from "react";
import styled from "styled-components";

const WrapperLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;

const CustomLoader = styled.div`
  display: inline-block;
  width: 164px;
  height: 164px;

  &:after {
    content: " ";
    display: block;
    width: 164px;
    height: 164px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => (
  <WrapperLoader>
    <CustomLoader />
  </WrapperLoader>
);
