import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenu from "./SideMenu";

const StyledNav = styled.nav`
  color: white;
  background-color: #1f1e1f;
  background-image: ${(props) =>
    `linear-gradient(to right,${props.theme.black} , ${props.theme.bg} )`};
  color: white;
  z-index: 1000;
  width: 100%;
  &.relative {
    position: relative;
  }
  &.fixed {
    position: fixed;
    top: 0;
    animation: smoothNav 0.5s 1 linear;
    box-shadow: 0px 0px 4px 0px #242323;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

const NavLink = styled.a`
  font-size: 1.3rem;
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

export default function NavBar() {
  const [fixedNav, setFixedNav] = React.useState<"relative" | "fixed">(
    "relative"
  ); // Switching between relative pos and fixed pos
  const [sideMenu, setSideMenu] = React.useState<boolean>(false);

  // event listener for switching from relative to fixed
  React.useEffect(() => {
    addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setFixedNav("fixed");
      } else {
        setFixedNav("relative");
      }
    });
  }, []);

  return (
    <>
      <StyledNav className={`py-2 ${fixedNav}`}>
        <Container
          className={`d-flex justify-content-between align-items-center px-4 `}
        >
          <Link href="/">
            <Logo />
          </Link>

          <NavLinksContainer className="w-50 d-lg-flex d-none">
            {["Home", "Tech Stack", "Projects", "Contact", "About"].map(
              (item) => {
                if (item === "Home") {
                  return (
                    <NavLink key={item} href="/">
                      {item}
                    </NavLink>
                  );
                } else {
                  return (
                    <NavLink
                      key={item}
                      href={`/#${item.split(" ")[0].toLowerCase()}`}
                    >
                      {item}
                    </NavLink>
                  );
                }
              }
            )}
          </NavLinksContainer>
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            className="d-block d-lg-none"
            onClick={() => {
              setSideMenu(true);
            }}
          />
        </Container>
      </StyledNav>
      <SideMenu open={sideMenu} setopen={setSideMenu} />
    </>
  );
}
