import styled from "styled-components";

export const SideLight = styled.div`
  z-index: 1;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #18c4fe 20.62%,
    transparent 100%
  );
  filter: blur(90px) saturate(0.8) grayscale(0.4);
  transition: 0.7s ease-in-out;
  &:hover {
    filter: blur(140px) saturate(1.5) grayscale(0);
    transition: 0.7s ease-in-out;
  }
`;
