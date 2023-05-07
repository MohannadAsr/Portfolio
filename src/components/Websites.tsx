import Image from "next/image";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProjectContainer } from "./styled/styles/ProjectContainer";
import { myProjects } from "@/data/myProjectsData";
import { projectTypes } from "@/types/types";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Websites() {
  const [projects, setProjects] = React.useState<null | projectTypes[]>(null);

  React.useEffect(() => {
    setProjects(myProjects);
  }, []);

  return (
    <div className="my-5">
      <Row className="gy-4">
        {projects &&
          projects.map((project) => {
            return (
              <Col lg={6} key={project.id}>
                <Link href={`/websites/${project.bg_src}`}>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring", stiffness: 60 }}
                  >
                    <ProjectContainer>
                      <Image
                        src={`/${project.bg_src}.jpg`}
                        alt={project.name}
                        width={800}
                        height={400}
                        className="img-fluid rounded"
                        priority
                      />
                    </ProjectContainer>
                  </motion.div>
                </Link>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
