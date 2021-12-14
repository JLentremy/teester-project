import styled from "@emotion/styled";
import React from "react";
import Logo from "../../assets/logo.svg";
import ProfilePicture from "../ProfilePicture";

export type NavbarProps = {
  name: string;
  mail: string;
};

const Navbar = ({ name, mail }: NavbarProps) => {
  return (
    <Nav>
      <NavContent>
        <ImageContainer>
          <Image src={Logo} />
        </ImageContainer>
        <NavProfile>
          <ProfilePicture label={name} />
          <div>
            <Name>{name}</Name>
            <Mail>{mail}</Mail>
          </div>
        </NavProfile>
      </NavContent>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  padding: 10;
  color: #fff;
  background-color: #7272ff;
`;
const NavContent = styled.div`
  display: flex;
  flex: 1 1 0%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
`;
const NavProfile = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  flex-shrink: 0;
`;
const Image = styled.img`
  display: block;
  width: auto;
  height: 2rem;
  max-width: 100%;
`;
const Name = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: capitalize;
`;
const Mail = styled.div`
  font-size: 0.75rem;
  line-height: 1.25rem;
`;

export default Navbar;
