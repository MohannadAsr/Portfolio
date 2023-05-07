import styled from "styled-components";

export const Section = styled.section`
  background-image: ${(props) =>
    `linear-gradient(to right,${props.theme.black} , ${props.theme.bg} )`};
  color: white;
  position: relative;
`;
