import React from "react";
import styled from "styled-components";
import { Section } from "./styled/styles/Section.style";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const FooterSection = styled(Section)`
  text-align: center;
  font-size: 15px;
  padding: 10px 0;
  font-weight: 500;
`;

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <hr />© M.ASR Portfolio 2023 | With Next JS
      </Container>
    </FooterSection>
  );
}
