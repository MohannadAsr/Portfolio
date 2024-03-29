import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styled from 'styled-components';
import TypeWriter from './TypeWriter';
import { Section } from './styled/styles/Section.style';

const HeroSection = styled(Section)`
  .img {
    transition: 0.3s linear;
    position: relative;
    z-index: 3;
  }
  .img:hover {
    scale: 1.02;
    transition: 0.3s linear;
  }
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    mix-blend-mode: multiply;
  }
`;

const Intro = styled.h1`
  position: relative;
  z-index: 3;
  font-size: 3vw;
  user-select: none;
  transition: 0.5s ease-in;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    text-align: center;
  }
  &:hover {
    text-shadow: 0px 0px 9px #18c4fe;
  }
  color: white;
`;

export default function Hero() {
  return (
    <HeroSection className="pt-2">
      <Container fluid>
        <Row className="d-flex  flex-lg-row flex-column-reverse">
          <Col
            lg={{ span: 5, offset: 1 }}
            className=" fs-1 flex-column d-flex justify-content-center "
          >
            <Intro className="my-4 fw-bolder">
              <TypeWriter
                text={"Hi ! , I'm Mohannad Alassar , a Front-End Developer "}
              />
            </Intro>
          </Col>
          <Col lg={{ span: 5, offset: 0 }}>
            <Image
              src="/me.png"
              width={700}
              height={700}
              alt="asr"
              className="img-fluid img"
              priority
            />
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
}
