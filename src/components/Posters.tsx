import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Myposters } from "@/data/myPostersData";
import { motion } from "framer-motion";

export default function Posters() {
  return (
    <div className="my-5">
      <Row className="g-1">
        {Myposters?.map((poster) => {
          return (
            <Col key={poster.id} xs={12} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, rotate: 20 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{
                  duration: 2,
                  type: "spring",
                  stiffness: 60,
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={`/${poster.src}.jpg`}
                  className="img-fluid rounded"
                  width={500}
                  height={500}
                  alt={poster.name}
                />
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
