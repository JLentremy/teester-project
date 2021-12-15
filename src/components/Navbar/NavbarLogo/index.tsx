import styled from "@emotion/styled";
import React from "react";
import src from "../../../assets/logo.svg";

const NavbarLogoComp = () => {
  return (
    <NavbarLogo>
      <StyledImage src={src} />
    </NavbarLogo>
  );
};

const NavbarLogo = styled.div`
  flex-shrink: 0;
`;
const StyledImage = styled.img`
  display: block;
  width: auto;
  height: 2rem;
  max-width: 100%;
`;

export default NavbarLogoComp;
