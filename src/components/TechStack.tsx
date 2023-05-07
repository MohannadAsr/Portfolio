import React from "react";
import styled from "styled-components";
import { Section } from "./styled/styles/Section.style";
import { UniqueHead } from "./styled/styles/UniqueHead";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";
import { techStackInfo } from "@/data/techStackInfo";
import { techTypes } from "@/types/types";

const TechSection = styled(Section)``;

const TechContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  padding: 1rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.037);
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 25px 10px #ffffff19 inset;
  }

  &:hover p {
    background: -webkit-linear-gradient(#4568fe, #18c4fe);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
  }
  img {
    filter: grayscale(0.7);
    transition: 0.4s ease;
  }
  &:hover img {
    filter: grayscale(0);
    transition: 0.4s ease;
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
    transition: 0.4s linear;
  }
  &:hover::after {
    bottom: -35%;
    transition: 0.4s linear;
  }
`;

export default function TechStack() {
  const [tech, setTech] = React.useState<techTypes | null>(null);

  React.useEffect(() => {
    setTech(techStackInfo);
  }, []);

  return (
    <TechSection className="py-5" id="tech">
      <Container>
        <motion.div
          key={4}
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <UniqueHead className="my-3">TECH STACK</UniqueHead>
        </motion.div>
        <p className="fs-6 fw-normal px-4 my-4">
          Take a look at my favorite Developing Langauges , Frameworks and
          Application That I use in Creating And Developing Projects.
        </p>
        <Row className="my-4 gx-0 gy-3">
          {tech?.map((tech) => {
            return (
              <Col xs={6} md={3} lg={3} xl={2} key={tech.id}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: tech.id * 0.05,
                    duration: 2,
                  }}
                >
                  <TechContainer>
                    <p className="fs-5">{tech.name}</p>
                    <Image
                      src={`/${tech.src}.png`}
                      alt={`${tech.name}`}
                      className="img-fluid"
                      width={100}
                      height={100}
                    />
                  </TechContainer>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </TechSection>
  );
}
