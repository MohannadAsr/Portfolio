import styled from 'styled-components';

export const ProjectContainer = styled.span`
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px #333;
  }

  img {
    transition: 0.3s ease-out;
    filter: saturate(1);
  }
  &:hover img {
    transform: scale(1.05);
    transition: 0.3s ease-in;
    filter: saturate(1.5);
  }
`;
