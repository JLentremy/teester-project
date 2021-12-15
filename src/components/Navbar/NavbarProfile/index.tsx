import styled from "@emotion/styled";
import React from "react";
import { NavbarProps } from "..";
import Avatar from "../../Avatar";

const NavbarProfileComp = ({ name, mail }: NavbarProps) => {
  return (
    <NavbarProfile>
      <Avatar letter={name[0]} />
      <div>
        <Name>{name}</Name>
        <Mail>{mail}</Mail>
      </div>
    </NavbarProfile>
  );
};

const NavbarProfile = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.div`
  font-weight: 700;
  font-size: var(--md-font);
  line-height: 1.25rem;
  text-transform: capitalize;
`;
const Mail = styled.div`
  font-size: var(--sm-font);
  line-height: 1.25rem;
`;

export default NavbarProfileComp;
