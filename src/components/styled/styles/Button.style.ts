import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 15px;
  outline: none;
  border: none;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 7px;
  color: #fff;

  &.active::after {
    bottom: -35%;
    transition: 0.4s linear;
  }
  &:disabled {
    color: gray;
  }

  &:disabled::after {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(
      50% 50% at 50% 50%,
      #18c4fe 20.62%,
      transparent 100%
    );
    width: 80%;
    height: 50%;
    transition: 0.1s linear;
  }
  &:hover::after {
    bottom: -35%;
    transition: 0.1s linear;
  }

  &.active span {
    background: -webkit-linear-gradient(#4568fe, #18c4fe);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
  }
`;
