import React from "react";
import styled from "styled-components";
import { Section } from "./styled/styles/Section.style";
import { Col, Container, Row } from "react-bootstrap";
import { myProjects } from "@/data/myProjectsData";
import { projectTypes } from "@/types/types";
import { UniqueHead } from "./styled/styles/UniqueHead";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { MainTypo } from "./styled/styles/MainTypo.style";
import { Button } from "./styled/styles/Button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const AdWebsiteSection = styled(Section)`
  /* min-height: 100vh; */
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

const ImageContainer = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    width: 40%;
  }
  img {
    transition: 0.1s ease-out;
    filter: grayscale(1);
    width: auto;
    height: auto;
  }
  img.active {
    border: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
    animation: gradBorder 0.3s infinite alternate;
    filter: grayscale(0);
  }
  &:hover img {
    transform: scale(1.05);
    filter: saturate(1.05);
    transition: 0.1s ease-in;
  }
`;

export default function AdWebsites() {
  const [data, setData] = React.useState<null | projectTypes[]>();
  const [selectWeb, setSelectWeb] = React.useState<projectTypes>(myProjects[0]);
  const router = useRouter();

  const [bounceEye, setBounceEye] = React.useState(false);
  const [beat, setBeat] = React.useState(false);

  React.useEffect(() => {
    setData(myProjects);
  }, []);

  React.useEffect(() => {
    if (typeof router.query.id !== undefined && router.query.id) {
      myProjects.forEach((item) => {
        if (item.id.toString() === router.query.id) {
          setSelectWeb(item);
        }
      });
    }
  }, [router.query, data]);

  return (
    <AdWebsiteSection>
      <Container className="py-4">
        <UniqueHead>Advanced View</UniqueHead>
        <h5 className="my-3">
          Click on the Image to see the Projcet Details :
        </h5>
        <Row className=" g-2">
          <Col
            xs={12}
            md={2}
            className="d-flex flex-row flex-md-column gap-2 flex-wrap"
          >
            {data?.map((item) => {
              return (
                <ImageContainer key={item.id}>
                  <Image
                    role="button"
                    className={`img-fluid cursor-pointer  ${
                      item.id === selectWeb.id && "active"
                    }`}
                    src={`/${item.bg_src}.jpg`}
                    alt={item.name}
                    width={400}
                    height={400}
                    onClick={() => {
                      setSelectWeb(item);
                    }}
                  />
                </ImageContainer>
              );
            })}
          </Col>
          <Col xs={12} md={{ span: 10 }}>
            <Image
              src={`/${selectWeb.bg_src}.jpg`}
              priority
              width={800}
              height={800}
              alt={`${selectWeb.name}`}
              className="img-fluid rounded"
              style={{ width: "auto", height: "auto" }}
            />

            <div className="m-2">
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <h1>{selectWeb.name}</h1>
                <ToolContainer>
                  <h6>{selectWeb.type}</h6>
                </ToolContainer>
              </div>

              <p className="my-3 fs-5">{selectWeb.description}</p>
              <p className="my-3 fs-5">
                <MainTypo>Tools Used in This Website:</MainTypo>
              </p>

              <div className="d-flex flex-start flex-wrap gap-2">
                {selectWeb.Tools?.map((tool) => {
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
              {!selectWeb.noTry && (
                <h5 className="my-3">
                  <MainTypo>Try it Now :</MainTypo>
                </h5>
              )}
            </div>

            {!selectWeb.noTry && (
              <div className="my-2 mx-2 fs-5 d-flex gap-2">
                <Link href={selectWeb.live_url} target="_blank">
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
                <Link href={selectWeb.git_url} target="_blank">
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
          </Col>
        </Row>
      </Container>
    </AdWebsiteSection>
  );
}
