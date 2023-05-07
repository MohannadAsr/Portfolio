import React from "react";
import styled from "styled-components";
import { Section } from "./styled/styles/Section.style";
import { UniqueHead } from "./styled/styles/UniqueHead";
import { motion } from "framer-motion";
import { Button } from "./styled/styles/Button.style";
import { Container } from "react-bootstrap";
import Websites from "./Websites";
import Posters from "./Posters";

const MyPorjects = styled(Section)``;

export default function MyProjects() {
  const [Category, setCategory] = React.useState<1 | 0>(0); // 0 for projects 1 for Posters

  return (
    <MyPorjects className="py-5" id="projects">
      <Container>
        <motion.div
          key={4}
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <UniqueHead className="mb-4" id="pro">
            My Projects
          </UniqueHead>
        </motion.div>

        <Button
          className={Category === 0 ? "fs-4 mx-2 active" : "fs-4 mx-2 "}
          onClick={() => {
            setCategory(0);
          }}
        >
          <span>Websites</span>
        </Button>
        <Button
          className={Category === 1 ? "fs-4 mx-2 active" : "fs-4 mx-2 "}
          onClick={() => {
            setCategory(1);
          }}
        >
          <span>Posters</span>
        </Button>
        {Category ? <Posters /> : <Websites />}
      </Container>
    </MyPorjects>
  );
}
