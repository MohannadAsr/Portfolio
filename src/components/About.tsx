import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Section } from "./styled/styles/Section.style";
import { SideLight } from "./styled/styles/SideLight.style";
import { motion, AnimatePresence } from "framer-motion";
import { UniqueHead } from "./styled/styles/UniqueHead";

const AboutSection = styled(Section)``;

const RightLight = styled(SideLight)`
  width: 50%;
  height: 50%;
  right: -30%;
  top: 90%;
  transform: translateY(-50%);
`;

const LeftLight = styled(SideLight)`
  width: 50%;
  height: 50%;
  left: -30%;
  top: 40%;
  transform: translateY(-50%);
`;

export default function About() {
  return (
    <AboutSection className="py-5" id="about">
      <AnimatePresence>
        <motion.div
          key={1}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <RightLight />
        </motion.div>

        <motion.div
          key={2}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <LeftLight />
        </motion.div>
      </AnimatePresence>

      <Container className="px-4">
        <motion.div
          key={3}
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <UniqueHead className="my-3">ABOUT ME</UniqueHead>
        </motion.div>

        <p className="fs-5 fw-normal text-center my-4">
          Hi !, I am Mohannad Adnan ALassar from Syria, a Front-End Developer
          interested in developing and designing creative , stylish and
          responsive websites using React JS and the latest developing tools, as
          well as designing posters and logos for social media , also I have a
          Bachelors degree in electronic and telecommunication engineering.
        </p>
      </Container>
    </AboutSection>
  );
}
