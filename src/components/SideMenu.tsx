import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Menu = styled.div`
  width: 70%;
  position: fixed;
  height: 100vh;
  z-index: 90000;
  color: white;
  top: 0;
  right: 0;
  background-color: white;
  background-image: ${(props) =>
    `linear-gradient(to right,${props.theme.black} , ${props.theme.bg} )`};
  animation: sideMenu 0.2s 1 linear;
`;

const Overlay = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 80000;
  background-color: #000000c0;
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

const NavLink = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  text-transform: capitalize;
  transition: 0.2s linear;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 15px;
    bottom: 0;
    left: -100%;
    background-image: linear-gradient(to right, #4568fe, #18c4fe);
    transition: 0.2s linear;
  }
  &:hover {
    transition: 0.2s linear;
    background: -webkit-linear-gradient(right, #4568fe, #18c4fe);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:hover::before {
    left: 0;
    transition: 0.2s linear;
  }
`;

type MenuTypes = {
  open: boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideMenu({ open, setopen }: MenuTypes) {
  const menu = React.useRef(null);

  return (
    <>
      {open && (
        <Overlay>
          <Menu className="p-3 " ref={menu}>
            <div className="d-flex justify-content-end px-3">
              <FontAwesomeIcon
                icon={faXmark}
                size="2xl"
                onClick={() => {
                  setopen(false);
                }}
              />
            </div>
            <hr className="pt-1" />
            <NavLinksContainer className="d-flex flex-column my-4">
              {["Home", "Tech Stack", "Projects", "Contact", "About"].map(
                (item) => {
                  if (item === "Home") {
                    return (
                      <NavLink
                        key={item}
                        href={`/`}
                        onClick={() => {
                          setopen(false);
                        }}
                      >
                        {item}
                      </NavLink>
                    );
                  } else {
                    return (
                      <NavLink
                        key={item}
                        href={`/#${item.split(" ")[0].toLowerCase()}`}
                        onClick={() => {
                          setopen(false);
                        }}
                      >
                        {item}
                      </NavLink>
                    );
                  }
                }
              )}
            </NavLinksContainer>
          </Menu>
        </Overlay>
      )}
    </>
  );
}
