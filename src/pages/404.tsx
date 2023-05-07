import { MainTypo } from "@/components/styled/styles/MainTypo.style";
import { Section } from "@/components/styled/styles/Section.style";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Error = styled(Section)`
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function ErrorPage() {
  return (
    <Error>
      <h1>
        <MainTypo>Error 404 Not Found</MainTypo>
      </h1>
      <h6>
        <Container className="text-center">
          <MainTypo>If you think the page appeared by mistake, ,</MainTypo>
          <Link href="/#contact" style={{ color: "#efe8e8d3" }}>
            contact me.
          </Link>
        </Container>
      </h6>
    </Error>
  );
}
