import React from "react";
import styled from "styled-components";

const MyLogo = styled.h1`
  font-family: "Kalam", cursive;
  font-weight: 900;
  font-size: 2.5rem;
  padding: 0 10px;
  animation: textGrad 2s infinite alternate linear;
  transition: 0.2s linear;
  margin-top: 5px;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s linear;
  }
`;

const Close = styled.span`
  letter-spacing: -7px;
`;

export default function Logo() {
  return (
    <MyLogo>
      M.<Close>ASR</Close>
    </MyLogo>
  );
}
