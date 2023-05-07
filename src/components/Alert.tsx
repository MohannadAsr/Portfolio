import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const AlertDiv = styled.div`
  position: fixed;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(255, 255, 255, 0.811);
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  width: fit-content;
  font-size: 1.3rem;
  text-align: center;
  color: #131126;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const AlertContainer = styled.div`
  position: relative;
`;

type AlertProps = {
  alert: { state: boolean; result: 200 | number };
};

export default function Alert(props: AlertProps) {
  const [open, setOpen] = React.useState<boolean>();
  const [mouse, setMouse] = React.useState<boolean>(false);

  React.useEffect(() => {
    setOpen(props.alert.state);
  }, [props]);

  React.useEffect(() => {
    setTimeout(() => {
      if (open) {
        setOpen(false);
      }
    }, 7000);
  }, [open, mouse]);

  return (
    <AlertContainer>
      {open && (
        <AnimatePresence>
          <motion.div
            key="alert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, stiffness: 100, type: "spring" }}
          >
            <AlertDiv className="fs-5 fw-bold">
              {props.alert.result === 200 && (
                <span style={{ color: "#0c0257" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    beatFade
                    className="px-2"
                    size="lg"
                  />
                  thank you i will replay soon
                </span>
              )}
              {props.alert.result !== 200 && props.alert.result !== 0 && (
                <span style={{ color: "#810e03" }}>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="px-2"
                    size="lg"
                  />
                  Something went wrong
                </span>
              )}
              {props.alert.result === 0 && (
                <span style={{ color: "#57020a" }}>
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    bounce
                    className="px-2"
                    size="lg"
                  />
                  Check internet connection
                </span>
              )}
            </AlertDiv>
          </motion.div>
        </AnimatePresence>
      )}
    </AlertContainer>
  );
}
