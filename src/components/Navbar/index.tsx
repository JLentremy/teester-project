import styled from "@emotion/styled";
import React from "react";
import Logo from "./Logo";
import NavbarProfile from "./NavbarProfile";

export type NavbarProps = {
  name: string;
  mail: string;
};

const NavbarComp = ({ name, mail }: NavbarProps) => {
  return (
    <Navbar>
      <div>
        <Logo />
        <NavbarProfile name={name} mail={mail} />
      </div>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  color: var(--accent-text-color);
  background-color: var(--accent-color);

  > div {
    display: flex;
    flex: 1 1 0%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--xl-size);
    padding-right: var(--xl-size);
    height: var(--2xl-size);
    align-items: center;
    justify-content: space-between;
  }
`;

export default NavbarComp;
