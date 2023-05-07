import { projectTypes } from "@/types/types";
import React from "react";
import { Section } from "./styled/styles/Section.style";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { SideLight } from "./styled/styles/SideLight.style";
import { MainTypo } from "./styled/styles/MainTypo.style";
import { Button } from "./styled/styles/Button.style";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faSliders } from "@fortawesome/free-solid-svg-icons/faSliders";

type websiteProps = {
  website: projectTypes;
};

const WebSiteDetailsSection = styled(Section)`
  min-height: 90vh;
  position: relative;
  img {
    height: auto;
    width: auto;
  }
`;

const WeblightRight = styled(SideLight)`
  width: 40%;
  height: 40%;
  right: -30%;
  top: 10%;
  z-index: 1;
`;
const WeblightLeft = styled(SideLight)`
  width: 40%;
  height: 40%;
  left: -30%;
  bottom: 0;
  z-index: 1;
`;

const ToolContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.088);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-size: 10px;
  font-weight: bold;
`;

export default function WebsiteDetails(props: websiteProps) {
  const [bounceEye, setBounceEye] = React.useState(false);
  const [beat, setBeat] = React.useState(false);

  const { website } = props;

  return (
    <WebSiteDetailsSection className="py-5">
      <WeblightLeft />
      <WeblightRight />

      <Container>
        <div className="navigator d-flex flex-end mb-3 mx-2 fs-5">
          <Link href={`/websites?id=${website.id}`}>
            <Button className="d-flex align-items-center justify-contnet-center gap-2">
              <FontAwesomeIcon icon={faSliders} /> Advanced View
            </Button>
          </Link>
        </div>

        <Image
          src={`/${website.bg_src}.jpg`}
          priority
          width={800}
          height={800}
          alt={`${website.name}`}
          className="img-fluid rounded"
        />

        <div className="m-2">
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <h1>{website.name}</h1>
            <ToolContainer>
              <h6>{website.type}</h6>
            </ToolContainer>
          </div>

          <h5 className="my-3 ">{website.description}</h5>
          <h5 className="my-3">
            <MainTypo>Tools Used in This Website :</MainTypo>
          </h5>

          <div className="d-flex flex-start flex-wrap gap-2">
            {website.Tools?.map((tool) => {
              return (
                <ToolContainer key={tool.name}>
                  <span>
                    <Image
                      src={`/${tool.tool_img}.png`}
                      width={30}
                      height={30}
                      alt={tool.name}
                    />
                  </span>
                  <span>{tool.name}</span>
                </ToolContainer>
              );
            })}
          </div>
          {!website.noTry && (
            <h5 className="my-3">
              <MainTypo>Try it Now :</MainTypo>
            </h5>
          )}
        </div>

        {!website.noTry && (
          <div className="my-2 mx-2 fs-5 d-flex gap-2">
            <Link href={website.live_url} target="_blank">
              <Button
                className="d-flex align-items-center justify-contnet-center gap-2"
                onMouseEnter={() => {
                  setBounceEye(true);
                }}
                onMouseLeave={() => {
                  setBounceEye(false);
                }}
              >
                <FontAwesomeIcon icon={faEye} bounce={bounceEye} />
                Watch Live
              </Button>
            </Link>
            <Link href={website.git_url} target="_blank">
              <Button
                className="d-flex align-items-center justify-contnet-center gap-2"
                onMouseEnter={() => {
                  setBeat(true);
                }}
                onMouseLeave={() => {
                  setBeat(false);
                }}
              >
                <FontAwesomeIcon icon={faGithub} beat={beat} />
                GitHub
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </WebSiteDetailsSection>
  );
}
